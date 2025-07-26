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
│
├── index.html # Login/Signup UI
├── dashboard.html # Vendor dashboard
├── style.css # Styling
├── auth.js # Supabase login/signup/logout logic
├── supabase.js # Supabase client config
├── vendors_specific_train.csv # Vendor data
└── README.md # This file


---

## 📷 Screenshots

<img width="1920" height="843" alt="image" src="https://github.com/user-attachments/assets/d0eeb9bb-41a8-4c49-ba9a-ea1ef9a1e8d8" />

<img width="1920" height="844" alt="image" src="https://github.com/user-attachments/assets/9c2f6957-9e09-48b5-8298-063a1b58785c" />

<img width="1920" height="844" alt="image" src="https://github.com/user-attachments/assets/81508b90-7ab7-407d-990a-29b4d509c47a" />

<img width="1920" height="837" alt="image" src="https://github.com/user-attachments/assets/7f8e9ee7-4798-486f-b48b-6ab0f62b41f4" />

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


