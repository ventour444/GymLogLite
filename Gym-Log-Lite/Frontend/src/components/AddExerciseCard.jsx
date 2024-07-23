import React, { useState } from 'react';
import AddExerciseModal from './AddExerciseModal'; // Import the modal component

const AddExerciseCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddExerciseClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveExercise = async (newExercise) => {
    try {
      handleCloseModal();
    } catch (error) {
      console.error('Error saving exercise:', error);
    }
  };

  return (
    <div>
      <div
        className="bg-white p-4 rounded-md shadow-md cursor-pointer px-3"
        onClick={handleAddExerciseClick}
      >
        <h3 className="text-xl font-semibold text-gray-800">Add New Exercise</h3>
        <p className="text-gray-500">Click to add a new exercise</p>
      </div>

      {isModalOpen && (
        <AddExerciseModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSaveExercise}
        />
      )}
    </div>
  );
};

export default AddExerciseCard;
