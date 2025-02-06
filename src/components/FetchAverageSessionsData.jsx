import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserAverageSessions } from "../api/api";

function FetchAverageSessionsData() {
  const { id } = useParams();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions  = async () => {
      const response = await getUserAverageSessions(id);

      if (response.data) {
        const dayMapping = ["L", "M", "M", "J", "V", "S", "D"];
        
        const formattedData = response.data.sessions.map((item, index) => ({
          day: dayMapping[index], 
          sessionLength: item.sessionLength,
        }));

        setSessions(formattedData);
      } else {
        console.error("failed to load average sessions data");
      }
    };

    fetchSessions ();
  }, [id]);

  return sessions;
}

export default FetchAverageSessionsData;
