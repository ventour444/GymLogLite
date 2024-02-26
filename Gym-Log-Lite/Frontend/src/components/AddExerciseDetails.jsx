import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddExerciseDetails = ({ addExercise }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleAddExercise = () => {
    if (title.trim() === '' ) {
      alert('Please include a workout.');
      return;
    }

    const newExercise = {
      id: Math.floor(Math.random() * 1000),
      title,
      description,
    };

    addExercise(newExercise);
    navigate('/dashboard');
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-black">Add Exercise Details</h1>
      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-sm font-medium text-gray-600">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 bg-slate-200 text-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="text-sm font-medium text-gray-600 bg">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 bg-slate-200 text-black"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleAddExercise}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Add Exercise
          </button>
          <button
            type="button"
            onClick={handleBackToDashboard}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Back to Dashboard
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExerciseDetails;
