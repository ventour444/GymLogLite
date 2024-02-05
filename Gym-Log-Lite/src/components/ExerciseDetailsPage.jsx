import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ExerciseDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const exerciseDetails = {
    id,
    title: `Exercise ${id}`,
    description: `Details of Exercise ${id}`,
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>{exerciseDetails.title}</h1>
      <p>{exerciseDetails.description}</p>
      <div className='mt-14'><button onClick={handleBackToDashboard}>Back to Dashboard</button></div>
    </div>
  );
};

export default ExerciseDetailsPage;
