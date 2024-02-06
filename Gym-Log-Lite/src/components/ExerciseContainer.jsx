import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ExerciseCard from './ExerciseCard';
import AddExerciseCard from './AddExerciseCard';

const ExerciseContainer = () => {
  const navigate = useNavigate();
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/data/exercises.json');
        const data = await response.json();
        setExercises(data.users[0].exercises); // Assuming there's only one user for now
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="container mx-auto my-8 p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Your Workout Dashboard</h1>
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
            <ExerciseCard key={exercise.title} exercise={exercise} />
          ))}
        </div>
        <AddExerciseCard />
      </div>
    </div>
  );
};

export default ExerciseContainer;
