/**
 * ScamB💣mb User Testing Form - JavaScript
 * Features: Progress tracking, auto-save, form validation
 */

// ==================== CONFIGURATION ====================
const CONFIG = {
    autoSaveInterval: 2000, // Auto-save every 2 seconds
    storageKey: 'scambomb_testing_form_data',
    progressUpdateDelay: 100
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    initializeForm();
    setupEventListeners();
    loadSavedData();
    updateProgress();
});

// ==================== FORM INITIALIZATION ====================
function initializeForm() {
    console.log('🎯 ScamB💣mb Testing Form initialized');
    
    // Add submission handler
    const form = document.getElementById('testingForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // Warn before leaving if form has data
    window.addEventListener('beforeunload', function(e) {
        const formData = new FormData(document.getElementById('testingForm'));
        let hasData = false;
        
        for (let [key, value] of formData.entries()) {
            if (value && value.trim() !== '') {
                hasData = true;
                break;
            }
        }
        
        if (hasData && !form.classList.contains('submitted')) {
            e.preventDefault();
            e.returnValue = '';
        }
    });
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    const form = document.getElementById('testingForm');
    
    // Auto-save on input change
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('input', debounce(autoSave, CONFIG.autoSaveInterval));
        input.addEventListener('change', updateProgress);
    });
    
    // Keyboard shortcut for manual save (Ctrl/Cmd + S)
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            autoSave();
            showNotification('💾 Progress saved!', 'success');
        }
    });
    
    // Smooth scroll to first error on validation fail
    form.addEventListener('invalid', function(e) {
        e.preventDefault();
        const firstInvalid = form.querySelector(':invalid');
        if (firstInvalid) {
            firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstInvalid.focus();
        }
    }, true);
}

// ==================== PROGRESS TRACKING ====================
function updateProgress() {
    const form = document.getElementById('testingForm');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    
    if (!form || !progressBar || !progressText) return;
    
    // Count total required fields
    const requiredFields = form.querySelectorAll('[required]');
    let completedFields = 0;
    const processedRadioGroups = new Set();
    
    requiredFields.forEach(field => {
        if (field.type === 'radio') {
            if (processedRadioGroups.has(field.name)) {
                return;
            }

            processedRadioGroups.add(field.name);

            const radioGroup = form.querySelectorAll(`input[name="${field.name}"]:checked`);
            if (radioGroup.length > 0) {
                completedFields++;
            }
        } else if (field.value && field.value.trim() !== '') {
            completedFields++;
        }
    });
    
    const percentage = Math.round((completedFields / requiredFields.length) * 100);
    
    // Animate progress bar
    setTimeout(() => {
        progressBar.style.width = percentage + '%';
        progressText.textContent = percentage + '% Complete';
    }, CONFIG.progressUpdateDelay);
    
    // Visual feedback at milestones
    if (percentage === 100) {
        progressText.textContent = '🎉 All done! Ready to submit!';
        progressBar.style.backgroundColor = '#10B981'; // Green
    } else if (percentage >= 75) {
        progressBar.style.backgroundColor = '#F5C84C'; // Yellow
    }
}

// ==================== AUTO-SAVE ====================
function autoSave() {
    const form = document.getElementById('testingForm');
    const formData = new FormData(form);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    try {
        localStorage.setItem(CONFIG.storageKey, JSON.stringify(data));
        console.log('💾 Form data auto-saved');
    } catch (error) {
        console.warn('⚠️ Could not save to localStorage:', error);
    }
}

function loadSavedData() {
    try {
        const saved = localStorage.getItem(CONFIG.storageKey);
        if (!saved) return;
        
        const data = JSON.parse(saved);
        const form = document.getElementById('testingForm');
        
        // Restore form values
        for (let [key, value] of Object.entries(data)) {
            const field = form.querySelector(`[name="${key}"]`);
            
            if (!field) continue;
            
            if (field.type === 'radio') {
                const radio = form.querySelector(`[name="${key}"][value="${value}"]`);
                if (radio) radio.checked = true;
            } else {
                field.value = value;
            }
        }
        
        console.log('📂 Restored saved form data');
        showNotification('📂 Your previous progress has been restored!', 'info');
        updateProgress();
        
    } catch (error) {
        console.warn('⚠️ Could not load saved data:', error);
    }
}

function clearSavedData() {
    try {
        localStorage.removeItem(CONFIG.storageKey);
        console.log('🗑️ Cleared saved form data');
    } catch (error) {
        console.warn('⚠️ Could not clear saved data:', error);
    }
}

// ==================== FORM SUBMISSION ====================
async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    // Disable form during submission
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline-block';
    form.classList.add('loading');
    
    try {
        // Submit form data
        const formData = new FormData(form);
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Success!
            form.classList.add('submitted');
            clearSavedData();
            showSuccessMessage();
            
            // Scroll to success message
            setTimeout(() => {
                document.getElementById('successMessage').scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }, 300);
            
        } else {
            throw new Error('Submission failed');
        }
        
    } catch (error) {
        console.error('❌ Form submission error:', error);
        alert('Oops! Something went wrong. Please try again or email us directly at hello@scambomb.com');
        
        // Re-enable form
        submitBtn.disabled = false;
        btnText.style.display = 'inline-block';
        btnLoading.style.display = 'none';
        form.classList.remove('loading');
    }
}

function showSuccessMessage() {
    const form = document.getElementById('testingForm');
    const successMessage = document.getElementById('successMessage');
    
    // Hide form
    form.style.display = 'none';
    
    // Show success message
    successMessage.style.display = 'block';
    
    // Update progress to 100%
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    progressBar.style.width = '100%';
    progressBar.style.backgroundColor = '#10B981';
    progressText.textContent = '✅ Submitted!';
    
    console.log('✅ Form submitted successfully!');
}

// ==================== NOTIFICATIONS ====================
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#F5C84C'};
        color: ${type === 'info' ? '#0B1324' : '#FFFFFF'};
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        font-weight: 600;
        font-size: 14px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== UTILITY FUNCTIONS ====================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==================== ANALYTICS (Optional) ====================
// Uncomment and configure if you want to track form interactions
/*
function trackEvent(eventName, eventData = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Plausible Analytics
    if (typeof plausible !== 'undefined') {
        plausible(eventName, { props: eventData });
    }
    
    console.log('📊 Event tracked:', eventName, eventData);
}

// Track section completions
document.querySelectorAll('.form-section').forEach((section, index) => {
    section.addEventListener('change', function() {
        const sectionNumber = index + 1;
        trackEvent('section_completed', { section: sectionNumber });
    });
});
*/

// ==================== DEVELOPMENT HELPERS ====================
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('🔧 Development mode active');
    
    // Add reset button for testing
    const resetBtn = document.createElement('button');
    resetBtn.textContent = '🔄 Reset Form (Dev)';
    resetBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #EF4444;
        color: white;
        padding: 0.75rem 1rem;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        z-index: 1000;
    `;
    resetBtn.onclick = function() {
        if (confirm('Reset form and clear saved data?')) {
            document.getElementById('testingForm').reset();
            clearSavedData();
            updateProgress();
            location.reload();
        }
    };
    document.body.appendChild(resetBtn);
}

console.log('✨ ScamB💣mb Testing Form ready!');
