import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExerciseContainer from './ExerciseContainer';
import AddExerciseDetails from './AddExerciseDetails';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ExerciseDetailsPage from './ExerciseDetailsPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<ExerciseContainer />} />
        <Route path="/exercise/:id" element={<ExerciseDetailsPage />} />
        <Route path="/add-exercise" element={<AddExerciseDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
