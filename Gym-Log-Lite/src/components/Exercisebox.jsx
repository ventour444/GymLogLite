import React from 'react';

const ExerciseBox = ({ exercise }) => {
  return (
    <div className="bg-gray-300 rounded p-4 mb-4 w-full">
      <h2 className="text-lg font-semibold mb-2">{exercise}</h2>
      <p>Description of the exercise goes here.</p>
    </div>
  );
};

export default ExerciseBox;
