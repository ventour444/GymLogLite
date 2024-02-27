const mockExerciseData = {
  "users": [
    {
      "id": 1,
      "username": "Austin",
      "password": "12345",
      "email": "austin_ventour@hotmail.co.uk",
      "exercises": [
        {
          "id": 1,
          "title": "Deadlift",
          "description": "A weightlifting exercise in which a loaded barbell or bar is lifted off the ground to the level of the hips, then lowered to the ground.",
          "sets": [
            { "id": 1, "reps": 8, "weight": 135, "time": "2024-02-03T08:30:00Z" },
            { "id": 2, "reps": 8, "weight": 185, "time": "2024-02-03T09:00:00Z" },
            { "id": 3, "reps": 6, "weight": 225, "time": "2024-02-03T09:30:00Z" },
            { "id": 4, "reps": 6, "weight": 245, "time": "2024-02-03T10:00:00Z" },
            { "id": 5, "reps": 6, "weight": 265, "time": "2024-02-03T10:30:00Z" }
          ]
        },
        {
          "id": 2,
          "title": "Chest Press",
          "description": "A strength training exercise that works the pectoralis major muscle.",
          "sets": [
            { "id": 1, "reps": 10, "weight": 135, "time": "2024-02-03T08:45:00Z" },
            { "id": 2, "reps": 10, "weight": 155, "time": "2024-02-03T09:15:00Z" },
            { "id": 3, "reps": 8, "weight": 175, "time": "2024-02-03T09:45:00Z" },
            { "id": 4, "reps": 8, "weight": 185, "time": "2024-02-03T10:15:00Z" },
            { "id": 5, "reps": 8, "weight": 205, "time": "2024-02-03T10:45:00Z" }
          ]
        },
        {
          "id": 3,
          "title": "Squat",
          "description": "A lower body exercise that targets the quadriceps, hamstrings, and glutes.",
          "sets": [
            { "id": 1, "reps": 8, "weight": 185, "time": "2024-02-03T09:00:00Z" },
            { "id": 2, "reps": 8, "weight": 225, "time": "2024-02-03T09:30:00Z" },
            { "id": 3, "reps": 6, "weight": 275, "time": "2024-02-03T10:00:00Z" },
            { "id": 4, "reps": 6, "weight": 295, "time": "2024-02-03T10:30:00Z" },
            { "id": 5, "reps": 6, "weight": 315, "time": "2024-02-03T11:00:00Z" }
          ]
        },
        {
          "id": 4,
          "title": "Overhead Press",
          "description": "A weight training exercise that targets the deltoids, triceps, and serratus anterior muscles.",
          "sets": [
            { "id": 1, "reps": 8, "weight": 95, "time": "2024-02-03T09:15:00Z" },
            { "id": 2, "reps": 8, "weight": 115, "time": "2024-02-03T09:45:00Z" },
            { "id": 3, "reps": 6, "weight": 135, "time": "2024-02-03T10:15:00Z" },
            { "id": 4, "reps": 6, "weight": 155, "time": "2024-02-03T10:45:00Z" },
            { "id": 5, "reps": 6, "weight": 175, "time": "2024-02-03T11:15:00Z" }
          ]
        },
        {
          "id": 5,
          "title": "Incline Press",
          "description": "A variation of the bench press that targets the upper chest muscles.",
          "sets": [
            { "id": 1, "reps": 10, "weight": 115, "time": "2024-02-03T09:30:00Z" },
            { "id": 2, "reps": 10, "weight": 135, "time": "2024-02-03T10:00:00Z" },
            { "id": 3, "reps": 8, "weight": 155, "time": "2024-02-03T10:30:00Z" },
            { "id": 4, "reps": 8, "weight": 175, "time": "2024-02-03T11:00:00Z" },
            { "id": 5, "reps": 8, "weight": 195, "time": "2024-02-03T11:30:00Z" }
          ]
        }
      ]
    },
    {
      "id": 2,
      "username": "Emily",
      "password": "12345",
      "email": "emily@hotmail.co.uk",
      "exercises": [
        {
          "id": 6,
          "title": "Running",
          "description": "Cardio exercise involving running outdoors or on a treadmill.",
          "sets": [
            { "id": 1, "distance": 2, "time": "2024-02-03T08:00:00Z" },
            { "id": 2, "distance": 3, "time": "2024-02-03T09:00:00Z" },
            { "id": 3, "distance": 2.5, "time": "2024-02-03T10:00:00Z" }
          ]
        },
        {
          "id": 7,
          "title": "Yoga",
          "description": "A series of poses and stretches to improve flexibility and relax the mind.",
          "sets": [
            { "id": 1, "duration": 30, "time": "2024-02-03T08:30:00Z" },
            { "id": 2, "duration": 45, "time": "2024-02-03T09:30:00Z" }
          ]
        }
      ]
    }
  ]
}

export default mockExerciseData;