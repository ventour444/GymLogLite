import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/exercise/${exercise.id}`);
  };

  return (
    <div onClick={handleCardClick} className="bg-white p-4 rounded-md shadow-md cursor-pointer">
      <h3 className="text-xl font-semibold text-gray-800">{exercise.title}</h3>
      <p className="text-gray-500">{exercise.description}</p>
    </div>
  );
};

export default ExerciseCard;
