import React from 'react';

const ExerciseSetList = ({ sets }) => {
  return (
    <div className="exercise-set-list-container mb-4">
      <h2 className="text-lg font-semibold mb-2">Sets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sets.slice().reverse().map((set, index) => (
          <div key={set.id} className="bg-gray-200 rounded-md p-4">
            <p className="text-sm text-black">
              <strong>Set {sets.length - index}:</strong> {set.reps} reps | Weight: {set.weight} | Time: {new Date(set.time).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseSetList;
