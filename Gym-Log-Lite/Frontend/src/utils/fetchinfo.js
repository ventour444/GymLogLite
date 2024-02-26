import axios from 'axios';

export const fetchUsers = async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:4000/users`);
        return response.data;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};

// export const fetchUserById = async (userId) => {
//     try {
//         const response = await axios.get(`http://127.0.0.1:4000/users/${userId}`);
//         return response.data;
//     } catch (error) {
//         console.log(error.message);
//         throw error;
//     }
// };

// export const fetchExerciseById = async (exerciseId) => {
//     try {
//         const response = await axios.get(`http://127.0.0.1:4000/exercises/${exerciseId}`);
//         return response.data;
//     } catch (error) {
//         console.log(error.message);
//         throw error;
//     }
// };
