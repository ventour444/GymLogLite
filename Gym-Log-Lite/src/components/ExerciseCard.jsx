import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => {
  if (!exercise) {
    console.error('Exercise is undefined or null');
    return null;
  }

  return (
    <Link to={`/exercise/${exercise.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md mb-5">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{exercise.title}</h2>
          <p className="text-gray-700">{exercise.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;
