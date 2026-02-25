/**
 * ScamB💣mb Scam Stories Form - JavaScript
 * Features: Progress tracking, auto-save, conditional fields, form validation
 */

// ==================== CONFIGURATION ====================
const CONFIG = {
    autoSaveInterval: 2000,
    storageKey: 'scambomb_stories_form_data',
    progressUpdateDelay: 100
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    initializeForm();
    setupEventListeners();
    setupOptinToggle();
    setupAnonSubmit();
    loadSavedData();
    updateProgress();
});

// ==================== FORM INITIALIZATION ====================
function initializeForm() {
    console.log('💣 ScamB💣mb Stories Form initialized');

    const form = document.getElementById('scamStoriesForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    // Warn before leaving if form has data
    window.addEventListener('beforeunload', function(e) {
        const form = document.getElementById('scamStoriesForm');
        const formData = new FormData(form);
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
    const form = document.getElementById('scamStoriesForm');

    // Auto-save and progress update on all inputs
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('input', debounce(autoSave, CONFIG.autoSaveInterval));
        input.addEventListener('change', function() {
            updateProgress();
            autoSave();
        });
    });

    // Show/hide money lost question based on outcome selection
    const outcomeRadios = form.querySelectorAll('input[name="outcome"]');
    outcomeRadios.forEach(radio => {
        radio.addEventListener('change', updateMoneyQuestion);
    });

    // Keyboard shortcut: Ctrl/Cmd + S to save
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            autoSave();
            showNotification('💾 Progress saved!', 'success');
        }
    });

    // Smooth scroll to first invalid field on validation fail
    form.addEventListener('invalid', function(e) {
        e.preventDefault();
        const firstInvalid = form.querySelector(':invalid');
        if (firstInvalid) {
            firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstInvalid.focus();
        }
    }, true);
}

// ==================== ANONYMOUS SUBMIT ====================
function setupAnonSubmit() {
    const anonBtn = document.getElementById('anonSubmitBtn');
    if (!anonBtn) return;

    anonBtn.addEventListener('click', function() {
        // Uncheck the opt-in so it's clear in the data
        const checkbox = document.getElementById('wantsUpdates');
        if (checkbox && checkbox.checked) {
            checkbox.checked = false;
            checkbox.dispatchEvent(new Event('change'));
        }
        // Submit the form
        document.getElementById('scamStoriesForm').requestSubmit();
    });
}

// ==================== OPT-IN TOGGLE ====================
function setupOptinToggle() {
    const checkbox = document.getElementById('wantsUpdates');
    const section = document.getElementById('optinSection');
    if (!checkbox || !section) return;

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            section.classList.remove('opted-out');
        } else {
            section.classList.add('opted-out');
        }
    });
}

// ==================== CONDITIONAL: MONEY QUESTION ====================
function updateMoneyQuestion() {
    const form = document.getElementById('scamStoriesForm');
    const moneyQuestion = document.getElementById('moneyLostQuestion');
    if (!form || !moneyQuestion) return;

    const selected = form.querySelector('input[name="outcome"]:checked');
    const showMoney = selected && (
        selected.value === 'Lost money' ||
        selected.value === 'Lost money and gave personal info'
    );

    moneyQuestion.style.display = showMoney ? 'block' : 'none';

    // Clear selection when hidden
    if (!showMoney) {
        form.querySelectorAll('input[name="money_lost"]').forEach(r => r.checked = false);
    }
}

// ==================== PROGRESS TRACKING ====================
function updateProgress() {
    const form = document.getElementById('scamStoriesForm');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    if (!form || !progressBar || !progressText) return;

    const requiredFields = form.querySelectorAll('[required]');
    let completedFields = 0;
    const processedRadioGroups = new Set();

    requiredFields.forEach(field => {
        if (field.type === 'radio') {
            if (processedRadioGroups.has(field.name)) return;
            processedRadioGroups.add(field.name);
            const checked = form.querySelector(`input[name="${field.name}"]:checked`);
            if (checked) completedFields++;
        } else if (field.value && field.value.trim() !== '') {
            completedFields++;
        }
    });

    const total = requiredFields.length - countDuplicateRadios(requiredFields);
    const percentage = total > 0 ? Math.round((completedFields / total) * 100) : 0;

    setTimeout(() => {
        progressBar.style.width = percentage + '%';
        progressText.textContent = percentage + '% Complete';
    }, CONFIG.progressUpdateDelay);

    if (percentage === 100) {
        progressText.textContent = '🎉 All done! Ready to submit!';
        progressBar.style.backgroundColor = '#10B981';
    } else if (percentage >= 75) {
        progressBar.style.backgroundColor = '#F5C84C';
    } else {
        progressBar.style.backgroundColor = '#F5C84C';
    }
}

function countDuplicateRadios(fields) {
    const seen = new Set();
    let duplicates = 0;
    fields.forEach(field => {
        if (field.type === 'radio') {
            if (seen.has(field.name)) {
                duplicates++;
            } else {
                seen.add(field.name);
            }
        }
    });
    return duplicates;
}

// ==================== AUTO-SAVE ====================
function autoSave() {
    const form = document.getElementById('scamStoriesForm');
    const formData = new FormData(form);
    const data = {};

    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }

    try {
        localStorage.setItem(CONFIG.storageKey, JSON.stringify(data));
        console.log('💾 Story form auto-saved');
    } catch (error) {
        console.warn('⚠️ Could not save to localStorage:', error);
    }
}

function loadSavedData() {
    try {
        const saved = localStorage.getItem(CONFIG.storageKey);
        if (!saved) return;

        const data = JSON.parse(saved);
        const form = document.getElementById('scamStoriesForm');

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

        console.log('📂 Restored saved story form data');
        showNotification('📂 Your previous progress has been restored!', 'info');
        updateProgress();
        updateMoneyQuestion();

    } catch (error) {
        console.warn('⚠️ Could not load saved data:', error);
    }
}

function clearSavedData() {
    try {
        localStorage.removeItem(CONFIG.storageKey);
        console.log('🗑️ Cleared saved story form data');
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

    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline-block';
    form.classList.add('loading');

    try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            form.classList.add('submitted');
            clearSavedData();
            showSuccessMessage();

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
        alert('Oops! Something went wrong. Please try again or email us at hello@scambomb.com');

        submitBtn.disabled = false;
        btnText.style.display = 'inline-block';
        btnLoading.style.display = 'none';
        form.classList.remove('loading');
    }
}

function showSuccessMessage() {
    const form = document.getElementById('scamStoriesForm');
    const successMessage = document.getElementById('successMessage');

    form.style.display = 'none';
    successMessage.style.display = 'block';

    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    progressBar.style.width = '100%';
    progressBar.style.backgroundColor = '#10B981';
    progressText.textContent = '✅ Submitted — thank you!';

    console.log('✅ Story submitted successfully!');
}

// ==================== NOTIFICATIONS ====================
function showNotification(message, type = 'info') {
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
        font-family: 'Montserrat', sans-serif;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ==================== UTILITY ====================
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

// ==================== DEVELOPMENT HELPERS ====================
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('🔧 Development mode active');

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
        font-family: 'Montserrat', sans-serif;
        z-index: 1000;
    `;
    resetBtn.onclick = function() {
        if (confirm('Reset form and clear saved data?')) {
            document.getElementById('scamStoriesForm').reset();
            clearSavedData();
            updateProgress();
            updateMoneyQuestion();
            location.reload();
        }
    };
    document.body.appendChild(resetBtn);
}

console.log('✨ ScamB💣mb Stories Form ready!');
