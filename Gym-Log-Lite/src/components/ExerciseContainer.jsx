import React from 'react';
import ExerciseBox from './Exercisebox';

const ExerciseContainer = () => {

  const exercises = ['Exercise 1', 'Exercise 2', 'Exercise 3', 'Exercise 4', 'Exercise 5', 'Exercise 6'];

  const totalExerciseBoxes = 12;

  const emptyExerciseBoxes = totalExerciseBoxes - exercises.length;

  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Your Workout Dashboard</h1>
      <div className="flex flex-col">
        {/* Render exercise boxes */}
        {exercises.map((exercise, index) => (
          <ExerciseBox key={index} exercise={exercise} />
        ))}
        
        {/* Render empty exercise boxes */}
        {Array.from({ length: emptyExerciseBoxes }).map((_, index) => (
          <ExerciseBox key={`empty-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ExerciseContainer;
