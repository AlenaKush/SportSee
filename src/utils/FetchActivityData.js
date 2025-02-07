import { getUserActivity } from "../api/api";

const FetchActivityData = async ( id ) => {
  const response = await getUserActivity(id);
  
  if (response.data) {
    const formattedData = response.data.sessions.map((item, index) => ({
      day: index + 1,
      kilogram: item.kilogram,
      calories: item.calories,
    }));

    return formattedData;
  } else {
    console.error("Failed to load activity data");
  }
};

export default FetchActivityData;
