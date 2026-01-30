# 🚀 ScamB💣mb User Testing Form - Quick Start Guide

**Everything you need to get your testing form live in 5 minutes!**

---

## 📦 What's in This Package?

```
scambomb-testing-form/
├── index.html              # Main form with ScamB💣mb branding
├── css/
│   └── style.css          # Navy/yellow styling, Montserrat font
├── js/
│   └── script.js          # Auto-save, validation, form handling
├── QUICK-START.md         # This file - get started fast!
├── SETUP-GUIDE.md         # Detailed deployment instructions
└── README.md              # Full documentation
```

---

## ⚡ Get Live in 3 Steps (5 Minutes)

### **Step 1: Set Up Form Backend (2 min)**

Your form needs somewhere to send responses. **Formspree** is free and perfect:

1. Go to **https://formspree.io**
2. Sign up (free, no credit card)
3. Click "New Form"
4. Name it: "ScamBomb User Testing"
5. Copy your **Form ID** (looks like: `mrbzkdpq`)

### **Step 2: Update Your Form (1 min)**

1. Open `index.html` in any text editor
2. Find line **65** (search for `YOUR_FORM_ID`)
3. Replace `YOUR_FORM_ID` with your actual Formspree ID
4. Save the file

**Example:**
```html
<!-- BEFORE -->
<form id="testingForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

<!-- AFTER -->
<form id="testingForm" action="https://formspree.io/f/mrbzkdpq" method="POST">
```

### **Step 3: Deploy FREE (2 min)**

**Option A - Netlify Drop (Easiest!):**
1. Go to **https://app.netlify.com/drop**
2. Drag the entire `scambomb-testing-form` folder onto the page
3. Get your live URL instantly! (looks like: `scambomb-testing-abc123.netlify.app`)

**Option B - Vercel:**
1. Go to **https://vercel.com**
2. Sign in with GitHub/Email
3. Click "Add New" → "Project"
4. Upload this folder
5. Click "Deploy"

**Option C - GitHub Pages (if you use GitHub):**
1. Create new repository: `scambomb-testing`
2. Upload all files
3. Go to Settings → Pages
4. Enable Pages, select "main" branch
5. Get URL: `yourusername.github.io/scambomb-testing`

---

## 🎉 You're Done!

Share your live URL with testers:
- Send via email
- Post in testing groups
- Share on social media

**Responses will arrive in your email automatically!** 📧

---

## 💡 Pro Tips

### **Testing It Out:**
- Fill it out yourself first to test
- Check that email arrives from Formspree
- View on mobile to ensure it looks good

### **Formspree Free Tier:**
- **50 submissions/month** (perfect for initial testing!)
- Need more? Upgrade to Pro ($10/mo = 1,000 submissions)
- Or switch to Web3Forms (unlimited free)

### **Custom Domain (Optional):**
Want `testing.scambomb.com` instead of a Netlify URL?
- Buy domain from Namecheap/Google Domains ($10-15/year)
- Point it to your Netlify site (Settings → Domain Management)
- Much more professional!

### **Analytics (Optional):**
Want to track views/completions?
- Add Google Analytics (free)
- Or use Plausible Analytics (privacy-friendly)
- Instructions in SETUP-GUIDE.md

---

## 🎯 Using Your Form

### **For Testers:**
Just send them the URL! The form:
- ✅ Works on any device (phone/tablet/computer)
- ✅ Auto-saves progress every second
- ✅ Takes 15-20 minutes to complete
- ✅ Guides them through testing app.scambomb.com
- ✅ Has clear, friendly instructions

### **For You:**
After people submit:
- ✅ Get email notification for each response
- ✅ View all responses in Formspree dashboard
- ✅ Export to CSV/Excel for analysis
- ✅ See completion rate and drop-off points

---

## ❓ Common Questions

**Q: What if I get more than 50 responses?**  
A: Upgrade Formspree ($10/mo) or switch to Web3Forms (unlimited free). Instructions in SETUP-GUIDE.md.

**Q: Can I edit the questions?**  
A: Yes! Just edit index.html. The structure is clear and well-commented.

**Q: How do I analyze responses?**  
A: Export CSV from Formspree dashboard, open in Excel/Google Sheets.

**Q: Can I use my own email server?**  
A: Yes! See "Advanced Options" in SETUP-GUIDE.md for custom backends.

**Q: Is this mobile-friendly?**  
A: Absolutely! It's mobile-first responsive design.

**Q: What about GDPR/privacy?**  
A: The form includes optional consent fields. Formspree is GDPR-compliant.

---

## 🆘 Need Help?

1. **Check SETUP-GUIDE.md** - Detailed troubleshooting
2. **Check README.md** - Full documentation
3. **Formspree Support** - help.formspree.io
4. **Netlify Support** - docs.netlify.com

---

## 🎨 Customization

Want to tweak the design? Everything is clearly labeled:

**Colors** - Edit `css/style.css`:
```css
:root {
    --navy: #0B1324;    /* Change header/button color */
    --yellow: #F5C84C;  /* Change accent color */
    --gray: #9CA3AF;    /* Change secondary text */
}
```

**Questions** - Edit `index.html`:
- All questions are clearly marked with comments
- Add/remove/modify as needed
- Keep the `name=""` attributes for Formspree

**Text Size** - Edit `css/style.css`:
```css
body {
    font-size: 18px;  /* Make bigger for seniors */
}
```

---

## ✨ What This Form Captures

Your testing form collects everything you need:

- ✅ Demographics (age, device, scam experience)
- ✅ Website clarity (scambomb.com impressions)
- ✅ Task completion (3 realistic scenarios)
- ✅ Comprehension (do they understand results?)
- ✅ Pain points (where do they get stuck?)
- ✅ Emotional response (confident? confused?)
- ✅ Value perception (would they pay $4.99/mo?)
- ✅ Recommendations (who would they tell?)
- ✅ Open feedback (anything we missed?)

**All with open-ended questions following NN/g research best practices!**

---

## 🔥 Ready to Launch?

1. ✅ Get Formspree account
2. ✅ Update Form ID in index.html
3. ✅ Deploy to Netlify/Vercel
4. ✅ Test it yourself
5. ✅ Share with testers
6. ✅ Watch the insights roll in!

**You've got this! Go make ScamBomb bulletproof!** 💣💛

---

*Questions? Check the other documentation files or reach out!*
