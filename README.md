📝 Feedback App 🚀  

A full-stack feedback application built with React (frontend), Node.js/Express (backend), and MongoDB (database). Users can submit feedback, view past submissions, and enjoy a clean, responsive UI with dark mode support.  

🔹 Frontend: React.js  
🔹 Backend: Node.js + Express  
🔹 Database: MongoDB (Atlas)  
🔹 Hosting: Render  

---

## 🌐 Live Demo  
🔗 Frontend: https://feedback-app-frontend-efbx.onrender.com  
🔗 Backend API: https://feedback-app-backend-ynec.onrender.com 

---

## 📂 Project Structure
```
📦 feedback-app
 ┣ 📂 frontend      # React Frontend
 ┣ 📂 backend       # Node.js/Express Backend
 ┗ 📜 README.md     # Project Documentation
```

---

##  Getting Started
### 🔹 Prerequisites
- Install Node.js ([Download Here](https://nodejs.org/))
- Install MongoDB (Use [MongoDB Atlas](https://www.mongodb.com/cloud))
- Install Git ([Download Here](https://git-scm.com/))

---

### 🔹 Backend Setup
1. Clone the Repository
   ```sh
   git clone https://github.com/yourusername/feedback-app.git
   cd feedback-app/backend
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Create a `.env` file in the backend directory
   ```
   MONGO_URI=mongodb+srv://your_mongo_connection_string
   ```
4. Start the backend
   ```sh
   node server.js
   ```
   ✅ Backend runs on:`http://localhost:5000`

---

### 🔹 Frontend Setup
1. Navigate to the frontend
   ```sh
   cd ../frontend
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Start the React app
   ```sh
   npm start
   ```
   ✅ Frontend runs on: `http://localhost:3000`

---

##  Deployment Guide
### 🔹 Backend Deployment (Render)
1. Push the backend code to GitHub.
2. Go to [Render](https://render.com), create a new Web Service.
3. Connect GitHub repo → Deploy.
4. Add MONGO_URI in Environment Variables.
5. Get backend URL and update the frontend API calls.

### 🔹 Frontend Deployment (Render)
1. Push the frontend code to GitHub.
2. Go to [Render](https://render.com), create a new Static Site.
3. Connect GitHub repo → Deploy.
4. Make sure backend URL is updated in `App.js`.

---

## 📌 Features
✔ Submit feedback using React  
✔ Store feedback in MongoDB  
✔ Retrieve feedback via Express API  
✔ Dark Mode support  
✔ Fully **responsive design**  

---
