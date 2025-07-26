# 🧡 Vendor Assist Chatbot

**Vendor Assist** is a responsive web app designed to help Indian street food vendors connect with affordable and trusted raw material suppliers. The platform features:

- 🔐 Auth system (Login/Signup)
- 📊 Vendor dashboard with real-time CSV data
- 💬 Chatbot powered by Loveable
- 📝 Feedback form
- 📱 Mobile responsiveness

---

## 🚀 Features

- **Supabase Auth** – Secure email/password login and signup
- **Responsive Dashboard** – View a curated table of trusted vendors for items like onion, tomato, oil, etc.
- **Vendor CSV Integration** – Data from a CSV file displayed in a dynamic, styled table
- **Smart Chatbot** – Panel-based chatbot interface trained to assist vendors
- **Animated Login UI** – A welcoming, minimalist auth page with fun visuals
- **Feedback Form** – Users can suggest new vendors or improvements
- **Mobile Friendly** – Tested across iPhone and Android screen sizes

---

## 🧑‍🍳 Who It's For

Street food vendors and small-scale food businesses looking to:

- Source verified raw materials
- Compare suppliers on price, location, ratings
- Ask queries via chatbot assistance

---

## 💻 Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Auth & Backend:** Supabase
- **Data Display:** PapaParse.js for CSV parsing
- **Chatbot:** [Loveable](https://www.lovable.dev) embed
- **Version Control:** Git + GitHub

---

## 📂 File Structure
vendor-assist-chatbot/  
├── index.html  
├── dashboard.html  
├── style.css  
├── auth.js  
├── supabase.js  
├── vendors_specific_train.csv  
├── chatbot_bg.png   
├── auth_page.png  
├── chatbot_panel.png  
├── vendor_dashboard.png  
└── feedback_form.png  
---


## 📝 Feedback Form

A form at the bottom of the dashboard allows users to submit new vendor suggestions or share feedback. This encourages community-driven growth and trust.

---

## 🛠️ Setup Instructions

1. Clone the repository  
   `git clone https://github.com/yourusername/vendor-assist-chatbot.git`

2. Install dependencies  
   _(if you plan to extend it via npm)_  
   `npm install`

3. Add your Supabase project URL and anon key in `supabase.js`

4. Launch in browser  
   Just open `index.html` in your browser!

---

## 🙋‍♀️ Author

Made with 💛 by [Khushi Gupta, Sanika Shaha, Khushi Zehra, Durga Chintala]  
🔗 GitHub: [khushi123-git](https://github.com/khushi123-git)

---

## 📌 TODOs & Improvements (Future Scope)

- [ ] Smarter chatbot responses using more knowledge
- [ ] Vendor filtering or search
- [ ] Admin portal for vendors to apply directly
- [ ] Dark mode (why not 😎)

---


