const BASE_URL = "http://localhost:3000";
const userDataFake = import.meta.env.VITE_TEST === 'true';


// General function for fetching data from the API
const fetchData = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`);
 
  return await response.json();
};

// Getting user data
export const getUserData = (userId) => {
  if (userDataFake) {
    return {"data":{"id":12,"userInfos":{"firstName":"Nico","lastName":"Dovineau","age":31},"todayScore":0.12,"keyData":{"calorieCount":1930,"proteinCount":155,"carbohydrateCount":290,"lipidCount":50}}}
  }
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
