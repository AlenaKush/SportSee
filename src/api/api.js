const BASE_URL = "http://localhost:3000";

// General function for fetching data from the API
const fetchData = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }
  return await response.json();
};

// Getting user data
export const getUserData = (userId) => {
  return fetchData(`/user/${userId}`);
};

// Getting user activity
export const getUserActivity = (userId) => {
  return fetchData(`/user/${userId}/activity`);
};

// Getting average activity
export const getUserAverageSessions = (userId) => {
  return fetchData(`/user/${userId}/average-sessions`);
};

// Getting performance
export const getUserPerformance = (userId) => {
  return fetchData(`/user/${userId}/performance`);
};
