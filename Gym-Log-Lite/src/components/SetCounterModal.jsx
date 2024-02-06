// SetCounterModal.js
import React, { useState } from 'react';
import SetCounter from './SetCounter';

const SetCounterModal = ({ isOpen, onClose, onIncrement, onDecrement }) => {
  const [newSetCount, setNewSetCount] = useState(0);

  const handleIncrement = () => {
    setNewSetCount(newSetCount + 1);
    onIncrement();
  };

  const handleDecrement = () => {
    if (newSetCount > 0) {
      setNewSetCount(newSetCount - 1);
      onDecrement();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Add Set</h2>
            <SetCounter
              initialValue={newSetCount}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
            <div className="mt-4">
              <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SetCounterModal;
