import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Fetch competition details
export const fetchCompetitionDetails = async (slug = 'feedants-classical-dance') => {
  const response = await api.get(`/competitions/${slug}`);
  return response.data;
};

// Fetch user status
export const fetchUserStatus = async (slug, userId) => {
  const response = await api.get(`/competitions/${slug}/user-status?userId=${userId}`);
  return response.data;
};

// Register user for competition (Atomic spot reservation)
export const registerForCompetition = async (slug, userId) => {
  const response = await api.post(`/competitions/${slug}/register`, { userId });
  return response.data;
};

// Upload video submission
export const submitPerformance = async (slug, submissionData) => {
  const response = await api.post(`/competitions/${slug}/submit`, submissionData);
  return response.data;
};

// Fetch reviews
export const fetchCompetitionReviews = async (slug = 'feedants-classical-dance') => {
  const response = await api.get(`/competitions/${slug}/reviews`);
  return response.data;
};

export default api;
