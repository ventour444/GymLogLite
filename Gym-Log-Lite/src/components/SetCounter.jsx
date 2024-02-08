import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const SetCounter = ({ initialValue, onIncrement, onDecrement, onAddSet }) => {
  const [count, setCount] = useState(initialValue);
  const [weight, setWeight] = useState(0);

  const increment = () => {
    setCount(count + 1);
    onIncrement();
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      onDecrement();
    }
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleAddSet = () => {
    const newSet = { reps: count, weight: weight };
    onAddSet(newSet);
  };

  return (
    <div className="border rounded p-4 mb-4">
      <div className="flex items-center justify-center">
        <button onClick={decrement} className="p-4 bg-gray-200 w-50 h-50 mr-2 rounded flex items-center justify-center">
          <FaMinus />
        </button>
        <span className="text-2xl font-semibold text-black">{count} reps</span>
        <button onClick={increment} className="p-4 bg-gray-200 w-50 h-50 ml-2 rounded flex items-center justify-center">
          <FaPlus />
        </button>
      </div>
      <div className="mt-4">
        <label className="block mb-1 font-semibold text-black">Weight (kg)</label>
        <input type="number" value={weight} onChange={handleWeightChange} className="w-full p-2 border rounded" />
      </div>
      <div className="mt-4">
        <button onClick={handleAddSet} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Add Set</button>
      </div>
    </div>
  );
};

export default SetCounter;