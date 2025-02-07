import { getUserData } from "../api/api";

const FetchUserData = async (id, field) => {
  const response = await getUserData(id);

  if (response.data) {
    const fieldKeys = field.split(".");
    let value = response.data;

    for (const key of fieldKeys) {
      value = value[key];
    }
    
    if (field === "todayScore" && value === undefined) {
      value = response.data.score;
    }

    return value;
  } else {
    console.error(`Failed to load data for user ID ${id}`);
    return null;
  }
};

export default FetchUserData;