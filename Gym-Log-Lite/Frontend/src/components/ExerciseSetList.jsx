import React, { useState } from 'react';

const ExerciseSetList = ({ sets }) => {
  const [setList, setSetList] = useState(sets);

  const addSet = () => {
    const newSet = {
      id: Math.floor(Math.random() * 1000),
      reps: 0,
      weight: 0,
    };
    setSetList([...setList, newSet]);
  };

  const updateSet = (id, updatedSet) => {
    const updatedSetList = setList.map(set => (set.id === id ? updatedSet : set));
    setSetList(updatedSetList);
  };

  return (
    <div className="my-4">
      <h2 className="text-xl font-semibold mb-4">Sets</h2>
      {setList.map(set => (
        <div key={set.id} className="mb-2 p-2 bg-gray-100 rounded-md">
          <div>Reps: {set.reps}</div>
          <div>Weight: {set.weight}</div>
          {/* Update functionality can be added here */}
        </div>
      ))}
      <button onClick={addSet} className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-md shadow-sm">
        Add Set
      </button>
    </div>
  );
};

export default ExerciseSetList;
