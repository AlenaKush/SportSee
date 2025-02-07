import { getUserPerformance } from "../api/api";

const FetchPerformanceData = async (id) => {
  const response = await getUserPerformance(id);

  if (response.data) {
    const kindMapping = {
      1: "Cardio",
      2: "Énergie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    };

    // Transform data for chart
    const formattedData = response.data.data.map((item) => ({
      subject: kindMapping[item.kind], // Replace numbers with French labels
      value: item.value,
    }));

    return [...formattedData].reverse();
  } else {
    console.error("failed to load performance data");
  }
};

export default FetchPerformanceData;
