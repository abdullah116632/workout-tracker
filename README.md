# Workout Tracker (Full-stack)

## 📌 Overview
**Workout Tracker** is a full-stack **MERN (MongoDB, Express, React, Node.js)** application that allows users to **sign up, log in, add workout tasks, and delete them**. All workout data is securely stored in **MongoDB Atlas**.

## 🎯 Features
- 📝 **User Authentication** (Sign Up & Login)  
- 💪 **Add Workout Tasks**  
- ❌ **Delete Workout Tasks**  
- 🗄️ **Data stored in MongoDB Atlas**  
- 🔐 Secure authentication with **bcrypt & JWT**  

## 🛠️ Technologies Used
### **Frontend:**
- **React.js** (for the user interface)
- **React Router** (for navigation)
- **CSS** (for styling)

### **Backend:**
- **Node.js & Express.js** (for API and server)
- **MongoDB Atlas** (for database)
- **Mongoose** (for database modeling)
- **JWT Authentication** (for secure login)
- **Bcrypt** (for password hashing)

## 📂 Folder Structure
```
workout-tracker/
│── frontend/   # React frontend
│── backend/    # Express & MongoDB backend
```

## 📸 Screenshots
![Workout Tracker Screenshot](https://res.cloudinary.com/dp0zdj77w/image/upload/v1742192462/forReadme/Screenshot_2025-03-17_122037_uznhr1.png)

## 🚀 How to Run

0. Clone the repository:
   ```sh
   git clone https://github.com/abdullah116632/workout-tracker.git
   ```

### 🖥️ Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Add a `.env` file and set up:
   ```
   MONGO_URI=your-mongodb-atlas-url
   PORT=your-port-number
   JWT_SECRET=your-secret-key
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

### 🎨 Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend:
   ```sh
   npm start
   ```
4. Open your browser and go to `http://localhost:3000/`.

## 📌 Future Improvements
- 📊 Add **progress tracking** with charts  
- 🔔 Implement **notifications/reminders**  
- 🌍 Deploy the app online  

## 📜 License
This project is open-source and can be modified for learning purposes.
