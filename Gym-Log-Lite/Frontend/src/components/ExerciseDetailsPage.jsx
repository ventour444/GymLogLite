import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchExerciseDetails, addSetToExercise } from '../utils/fetchinfo';
import SetCounter from './SetCounter';
import SetCounterModal from './SetCounterModal';

const ExerciseDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [exercise, setExercise] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const exerciseDetails = await fetchExerciseDetails(id);
        setExercise(exerciseDetails);
      } catch (error) {
        console.error('Error fetching exercise details:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleAddSet = () => {
    setIsModalOpen(true);
  };

  const handleSaveSet = async (newSet) => {
    try {
      const token = localStorage.getItem('token');
      const addedSet = await addSetToExercise(id, newSet, token);
      setExercise({
        ...exercise,
        sets: [...exercise.sets, addedSet],
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding set to exercise:', error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleGoBack = () => {
    navigate('/dashboard');
  };

  if (!exercise) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-black">{exercise.title}</h1>
      <p className="text-gray-600 mb-4">{exercise.description}</p>
      <button onClick={handleAddSet} className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-md shadow-sm">
        Add Set
      </button>
      {exercise.sets && <SetCounter sets={exercise.sets} />}
      <SetCounterModal isOpen={isModalOpen} onSave={handleSaveSet} onClose={handleCloseModal} />
      <div className="flex justify-center mt-8">
        <button
          onClick={handleGoBack}
          className="py-2 px-6 bg-green-500 text-white text-xl rounded-full shadow-lg"
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ExerciseDetailsPage;
