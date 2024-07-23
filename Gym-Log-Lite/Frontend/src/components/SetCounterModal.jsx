import React, { useState } from 'react';

const SetCounterModal = ({ isOpen, onClose, onSave }) => {
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleSave = () => {
    const newSet = { reps, weight };
    onSave(newSet);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add Set</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Reps:</label>
          <input
            type="number"
            value={reps}
            onChange={(e) => setReps(Number(e.target.value))}
            className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Weight:</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="py-2 px-4 bg-gray-500 text-white rounded-md shadow-sm mr-2">
            Cancel
          </button>
          <button onClick={handleSave} className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-sm">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetCounterModal;
