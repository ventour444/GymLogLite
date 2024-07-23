import React from 'react';

const SetCounter = ({ sets }) => {
  return (
    <div className="my-4">
      <h2 className="text-xl font-semibold mb-4">Sets</h2>
      {sets.map((set, index) => (
        <div key={index} className="mb-2 p-2 bg-gray-100 rounded-md">
          <div>Reps: {set.reps}</div>
          <div>Weight: {set.weight}</div>
        </div>
      ))}
    </div>
  );
};

export default SetCounter;
