import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserPerformance } from "../api/api";
import RadarChartDisplay from "./RadarChartDisplay";

function FretchPerformanceData() {
  const { id } = useParams();
  const [performanceData, setPerformanceData] = useState([]);

  useEffect(() => {
    const fetchPerformance = async () => {
      const response = await getUserPerformance(id);

      if (response.data) {
        // Mapping activity types to French
        const kindMapping = {
          1: "Cardio",
          2: "Énergie",
          3: "Endurance",
          4: "Force",
          5: "Vitesse",
          6: "Intensité"
        };

        // Transform data for chart
        const formattedData = response.data.data.map(item => ({
          subject: kindMapping[item.kind], // Replace numbers with French labels
          value: item.value
        }));

        setPerformanceData([...formattedData].reverse());
      } else {
        console.error("failed to load performance data");
      }
    };

    fetchPerformance();
  }, [id]);

  return <RadarChartDisplay data={performanceData} />;
}

export default FretchPerformanceData;
