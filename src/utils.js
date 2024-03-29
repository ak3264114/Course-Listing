import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const getAllCourses = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/courses`);
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};
