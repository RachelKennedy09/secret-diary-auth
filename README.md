
# Lab 4 – Passport Third-Party Authentication with Auth0

## 🔐 Project Overview

This project demonstrates how to integrate **Auth0** with **Passport.js** in a Node.js + Express application to authenticate users. After logging in, each user sees a personalized "secret diary" entry based on their login info.

> Built for Full Stack Integration Unit 4 Lab

---

## ✨ Features

- ✅ Auth0 login via Passport.js strategy
- ✅ Session-based authentication
- ✅ Protected `/diary` route (only visible when logged in)
- ✅ Personalized greeting using `req.user`
- ✅ EJS views with conditional content for logged-in users

---

## 🔧 Technologies Used

- Node.js
- Express
- Passport.js
- Auth0 (third-party provider)
- express-session
- dotenv
- EJS (template engine)

---

## 🛠 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/secret-diary-auth.git
cd secret-diary-auth
npm install


### 2. Add a .env File

AUTH0_CLIENT_ID=yourClientID
AUTH0_CLIENT_SECRET=yourClientSecret
AUTH0_DOMAIN=yourDomain.auth0.com
SESSION_SECRET=anyRandomSecret


### 3. Start the app
node app.js
visit http://localhost:3000 in your browser

---

🧠 Why Auth0?
 I chose Auth0 because it integrates easily with Passport, has clear documentation, and supports social login options. It allowed me to focus on route protection and session handling without building a custom auth system from scratch.

🚧 Challenges Faced
🔄 At first, my .env variables weren't loading correctly, which caused Auth0 to throw "missing domain" errors. I solved this by using dotenv.config() at the top of both app.js and auth.js.

🔒 I learned how passport.serializeUser() and deserializeUser() allow user data to persist across requests.

📦 Keeping ES module syntax (import) consistent across files was tricky but essential.

📸 Screenshots

Folder Structure

secret-diary-auth/
├── app.js
├── config/
│   └── auth.js
├── routes/
│   └── index.js
├── views/
│   ├── home.ejs
│   └── diary.ejs
├── .env
├── README.md
└── package.json

🙋‍♀️ Author
Rachel Kennedy
Full Stack Integration Student, Unit 4
UBC Software Development Bootcamp

IMPORTANT:
Please unzip before testing. The .env.example file is included so you can recreate environment variables locally.
