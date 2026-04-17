# 👥 KeenKeeper — Keep Your Friendships Alive

KeenKeeper is a modern, responsive web application designed to help you maintain meaningful relationships. It allows you to track your interactions with friends, get reminders to reconnect, and visualize your communication habits through analytics.

---

## 🚀 Live Demo
https://keen-keeper-ten-sigma.vercel.app/

---

## 📌 Project Overview

In today’s busy world, it’s easy to lose touch with people who matter. **KeenKeeper** solves this problem by:

- Tracking when you last contacted your friends  
- Allowing quick check-ins via Call, Text, or Video  
- Automatically logging interactions in a timeline  
- Providing visual insights into your communication patterns  

---

## 🛠️ Technologies Used

- **React.js (with Vite)** — Fast and modern frontend development  
- **React Router DOM** — Client-side routing  
- **Tailwind CSS** — Responsive and utility-first styling  
- **Recharts** — Data visualization (Pie Chart analytics)  
- **React Toastify / Sonner (or similar)** — Toast notifications  

---

## ✨ Key Features

### 👥 Friend Management
- Display a list of friends using dynamic JSON data  
- Each friend card shows:
  - Profile picture  
  - Name  
  - Days since last contact  
  - Tags (e.g., work, college)  
  - Status (on-track / almost due / overdue)  

---

### 👤 Friend Details Page
- Detailed profile view with:
  - Bio, email, and tags  
  - Status indicator with color coding  
- Action buttons:
  - ⏰ Snooze  
  - 📦 Archive  
  - 🗑️ Delete *(UI only)*  

---

### ⚡ Quick Check-In System
- Instantly log interactions:
  - 📞 Call  
  - 💬 Text  
  - 🎥 Video  
- Features:
  - Automatically adds entry to Timeline  
  - Shows real-time toast notification  

---

### 📜 Timeline Tracking
- View complete interaction history  
- Each entry includes:
  - Date  
  - Interaction type icon  
  - Title (e.g., “Call with John”)  

---

### 🔍 Timeline Filtering (Challenge Feature)
- Filter interactions by:
  - Call  
  - Text  
  - Video  

---

### 📊 Friendship Analytics (Challenge Feature)
- Pie chart visualization of interaction types  
- Built using Recharts  
- Helps understand communication habits  

---

### 🎨 UI & UX
- Fully responsive (Mobile, Tablet, Desktop)  
- Clean and modern design following Figma  
- Active route highlighting in Navbar  
- Smooth user experience  

---

### ⚙️ Additional Features
- 🔄 Loading animation while fetching data  
- ❌ Custom 404 Page for invalid routes  
- 🔁 Page reload works without breaking (SPA routing handled correctly)  

---


---

## 🧪 How to Run This Project Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/shawon2911/B13-A7-KeenKeeper.git

cd keenkepper
npm install
npm run dev

