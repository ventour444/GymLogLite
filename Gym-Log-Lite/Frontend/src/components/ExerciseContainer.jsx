import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ExerciseCard from './ExerciseCard';
import AddExerciseCard from './AddExerciseCard';
import { fetchCurrentUser } from '../utils/fetchinfo.js';

const ExerciseContainer = () => {
  const navigate = useNavigate();
  const [exercises, setExercises] = useState([]);
  const [token, setToken] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedToken = localStorage.getItem('token');
        if (!storedToken) {
          console.log('No token found, redirecting to login');
          navigate('/login'); 
        }
        setToken(storedToken);

        const currentUserData = await fetchCurrentUser(storedToken); 
        setExercises(currentUserData.exercises);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="container max-w-md my-8 p-8">
      <div className="flex justify-between items-center mb-4 max-w-md">
        <h1 className="text-2xl font-bold px-5">Your Workout Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
        <div>
          <h2>Exercises</h2>
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
        <AddExerciseCard />
      </div>
    </div>
  );
};

export default ExerciseContainer;
