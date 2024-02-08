import React from 'react';

const ExerciseSetList = ({ sets }) => {
  return (
    <div className="max-w-lg mx-auto">
      <div className="exercise-set-list-container mb-4">
        <h2 className="text-lg font-semibold mb-2">Sets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
          {sets.slice().reverse().map((set) => (
            <div key={set.id} className="bg-gray-200 rounded-md p-4">
              <p className="text-sm text-black">
                <strong>Set {set.id}:</strong> {set.reps} reps | Weight: {set.weight} | Time: {new Date(set.time).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseSetList;
