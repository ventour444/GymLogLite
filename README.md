<h1 align="center">GymLogLite 🏋️‍♂️</h1>

<p align="center">
  <em>A minimalist gym logging app designed for simplicity and ease of use.</em>
</p>

<h2 align="center">Table of Contents</h2>

- [🚀 Overview](#overview)
- [🛠️ Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [📁 Folder Structure](#folder-structure)
- [🛠️ Tech Stack](#tech-stack)
- [🔮 Roadmap](#roadmap)
- [🤝 Contributing](#contributing)
- [📄 License](#license)

---

<h2 align="center">🚀 Overview</h2>

<p align="center">
  GymLogLite simplifies your workout tracking experience. With an intuitive interface, you can easily log exercises, sets, reps, and weights.
</p>

---

<h2 align="center">🛠️ Getting Started</h2>

<h3>Prerequisites</h3>
<ul>
  <li>Node.js and npm installed on your machine. You can download them <a href="https://nodejs.org/">here</a>.</li>
  <li>MongoDB installed and running locally or accessible via a connection string. Get started <a href="https://www.mongodb.com/">here</a>.</li>
</ul>

<h3>Installation</h3>
<ol>
  <li>Clone the repository: <code>git clone https://github.com/ventour444/gym-log-lite.git</code></li>
  <li>Navigate to the project directory: <code>cd gym-log-lite</code></li>
  <li>Install dependencies: <code>npm install</code></li>
  <li>Navigate to the backend directory: <code>cd backend</code></li>
  <li>Install backend dependencies: <code>npm install</code></li>
  <li>Start the backend server: 
    <ul>
      <li>On Windows: <code>npm run start-win</code></li>
    </ul>
  </li>
  <li>In a new terminal, navigate back to the main project directory and start the frontend: <code>npm run dev</code></li>
</ol>

---

<h2 align="center">📁 Folder Structure</h2>

<pre>
src/
|-- components/
|   |-- ExerciseContainer.js   // Main dashboard component for viewing exercises
|   |-- ExerciseDetailsPage.js // Component for viewing detailed information about a specific exercise
|   |-- LoginPage.js           // Component for user login
  
|-- router/
|   |-- AppRouter.js           // Application routing logic
|-- styles/
|   |-- App.css                // Main styles for the application
|   |-- tailwind.css           // Tailwind CSS configurations
|-- App.js                     // Main application file
|-- index.js                   // Entry point of the application

backend/
|-- controllers/               
|   |-- exerciseController.js  // Logic for handling exercise-related routes
|   |-- authController.js      // Logic for user authentication and authorisation
|-- models/                    
|   |-- Exercise.js            // Schema for exercise data
|   |-- User.js                // Schema for user accounts
|-- routes/                    
|   |-- exerciseRoutes.js      // Routes for exercise-related endpoints
|   |-- authRoutes.js          // Routes for user authentication endpoints
|-- config/                    
|   |-- db.js                  // MongoDB connection setup
|-- server.js                  // Entry point of the backend application
</pre>


---

<h2 align="center">🛠️ Tech Stack</h2>

- **Frontend**: React, HTML, CSS, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **State Management**: React Hooks

---

<h2 align="center">🔮 Roadmap</h2>

Here’s what’s planned for the next iteration of GymLogLite:

1. **User Authentication**  
   - Ability to sign up, log in, and manage accounts with secure password storage.

2. **Workout History**  
   - Save and view previous workout logs for better progress tracking.

3. **Advanced Analytics**  
   - Generate charts and graphs to visualise workout progress over time.

4. **Cloud Sync**  
   - Store workout data securely in the cloud for access from any device.

5. **Enhanced Community Features**  
   - Allow users to share progress, join workout groups, and interact with others.

---

<h2 align="center">🤝 Contributing</h2>

Contributions, issues, and feature requests are welcome!   

If you’d like to contribute:  
1. Fork the repository.  
2. Create your feature branch: <code>git checkout -b feature/my-feature</code>.  
3. Commit your changes: <code>git commit -m "Add my feature"</code>.  
4. Push to the branch: <code>git push origin feature/my-feature</code>.  
5. Open a pull request.  

---

<h2 align="center">📄 License</h2>

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.  

---

<h4 align="center">Made with ❤️ by Austin Ventour</h4>
