import React from 'react';
import { useNavigate } from 'react-router-dom';
import ExerciseCard from './ExerciseCard';
import AddExerciseCard from './AddExerciseCard';

const ExerciseContainer = () => {
  const navigate = useNavigate();

  const exercises = [
    { id: 1, title: 'Exercise 1', description: 'Description of Exercise 1' },
    { id: 2, title: 'Exercise 2', description: 'Description of Exercise 2' },
    { id: 3, title: 'Exercise 3', description: 'Description of Exercise 3' },
  ];

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
        <AddExerciseCard />
      </div>
    </div>
  );
};

export default ExerciseContainer;
