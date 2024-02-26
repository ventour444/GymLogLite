import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ExerciseSetList from './ExerciseSetList';
import SetCounterModal from './SetCounterModal';

const ExerciseDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [exerciseDetails, setExerciseDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/data/exercises.json');
        const data = await response.json();
        const exercise = findExerciseById(data.users, id);
        setExerciseDetails(exercise);
      } catch (error) {
        console.error('Error fetching exercise details:', error);
      }
    };

    fetchData();
  }, [id]);

  const findExerciseById = (users, id) => {
    for (const user of users) {
      const exercise = user.exercises.find((exercise) => exercise.id.toString() === id);
      if (exercise) {
        return {
          ...exercise,
          username: user.username,
        };
      }
    }
    return null;
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddSet = (newSet) => {

    const updatedExerciseDetails = { ...exerciseDetails };
    updatedExerciseDetails.sets.push(newSet);

    setExerciseDetails(updatedExerciseDetails);

    setIsModalOpen(false);
  };

  if (!exerciseDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className='max-w-md p-8'>
      <h1>{exerciseDetails.title}</h1>
      <p>{exerciseDetails.description}</p>
      <ExerciseSetList sets={exerciseDetails.sets} />
      <button onClick={handleOpenModal} className="bg-blue-500 text-white font-bold py-2 px-4 rounded ">Add Set</button>
      <p>Username: {exerciseDetails.username}</p>
      <div className='mt-14'>
        <button onClick={handleBackToDashboard}>Back to Dashboard</button>
      </div>
      <SetCounterModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddSet={handleAddSet}
      />
    </div>
  );
};

export default ExerciseDetailsPage;
