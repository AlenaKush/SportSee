import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../api/data.js";

const BASE_URL = "http://localhost:3000";
const userDataFake = import.meta.env.VITE_TEST === 'true';

const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    return await response.json();
  } catch (error) {
    console.error(`API Error: Failed to fetch data from ${endpoint}`, error);
    return { error: "Data not found", data: null };
  }
};

const getData = async (userId, endpoint, mockData) => {
  if (userDataFake) {
    const user = mockData.find(user => user.userId === Number(userId) || user.id === Number(userId));

    if (user) {
      return { data: user };
    } else {
      console.error(`Error: Data not found for user ID ${userId} in mock data.`);
      return { error: "Data not found", data: null };
    }
  }

  const response = await fetchData(endpoint);

  if (!response || !response.data) {
    console.error(`Error: Data not found for user ID ${userId}`);
    return { error: "Data not found", data: null };
  }

  return response;
};

export const getUserData = (userId) => getData(userId, `/user/${userId}`, USER_MAIN_DATA);
export const getUserActivity = (userId) => getData(userId, `/user/${userId}/activity`, USER_ACTIVITY);
export const getUserAverageSessions = (userId) => getData(userId, `/user/${userId}/average-sessions`, USER_AVERAGE_SESSIONS);
export const getUserPerformance = (userId) => getData(userId, `/user/${userId}/performance`, USER_PERFORMANCE);
