import { getUserAverageSessions } from "../api/api";

const FetchAverageSessionsData = async (id) => {
  const response = await getUserAverageSessions(id);

  if (response.data) {
    const dayMapping = {
      1: "L",
      2: "M",
      3: "M",
      4: "J",
      5: "V",
      6: "S",
      7: "D",
    };

    const formattedData = response.data.sessions.map((item) => ({
      day: dayMapping[item.day],
      sessionLength: item.sessionLength,
    }));

    return formattedData;
  } else {
    console.error("failed to load average sessions data");
  }
};

export default FetchAverageSessionsData;
