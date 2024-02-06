import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddExerciseCard = () => {
  const navigate = useNavigate();

  const handleAddExerciseClick = () => {
    navigate('/add-exercise');
  };

  return (
    <div
      className="bg-white p-4 rounded-md shadow-md cursor-pointer px-3"
      onClick={handleAddExerciseClick}
    >
      <h3 className="text-xl font-semibold text-gray-800">Add New Exercise</h3>
      <p className="text-gray-500">Click to add a new exercise</p>
    </div>
  );
};

export default AddExerciseCard;
