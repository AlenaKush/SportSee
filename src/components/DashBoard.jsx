import proteinIcon from "../assets/protein-icon.svg";
import fatIcon from "../assets/fat-icon.svg";
import carbsIcon from "../assets/carbs-icon.svg";
import caloriesIcon from "../assets/calories-icon.svg";
import FetchUserData from "../utils/FetchUserData.js";
import FetchPerformanceData from "../utils/FetchPerformanceData.js";
import FetchAverageSessionsData from "../utils/FetchAverageSessionsData.js";
import FetchActivityData from "../utils/FetchActivityData.js";
import DisplayUserStat from "./DisplayUserStat.jsx";
import DisplayRadialBarChart from "./DisplayRadialBarChart.jsx";
import DisplayRadarChart from "./DisplayRadarChart.jsx";
import DisplayLineChart from "./DisplayLineChart.jsx";
import DisplayBarChart from "./DisplayBarChart.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Dashboard() {
  const { id } = useParams();
  const [activityData, setActivityData] = useState([]);
  const [sessionData, setSessions] = useState([]);
  const [performanceData, setPerformanceData] = useState([]);
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState("");

  useEffect(() => {
    const fetchActivity = async () => {
      const response = await FetchActivityData(id);
      setActivityData(response);
    };
    const fetchSessions  = async () => {
      const response = await FetchAverageSessionsData(id);
      setSessions(response);
    };
    const fetchPerformance = async () => {
      const response = await FetchPerformanceData(id);
      setPerformanceData(response);
    };
    const fetchName = async () => {
      const response = await FetchUserData(id, "userInfos.firstName");
      setUserName(response);
    }; 
    const fetchScore = async () => {
        const response = await FetchUserData(id, "todayScore");
        setScore(response);
    };
  
      
    fetchName();
    fetchActivity();
    fetchSessions();
    fetchPerformance();
    fetchScore();
  }, [id]);

  return (
    <div>
      <h2>
        Bonjour {userName}
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

      <DisplayBarChart data={activityData} />

      <DisplayLineChart data={sessionData} />

      <DisplayRadialBarChart score={Number(score)} />

      <DisplayRadarChart data={performanceData} />

      <DisplayUserStat
        id={id}
        field="keyData.calorieCount"
        unit="kcal"
        label="Calories"
        icon={caloriesIcon}
      />
      <DisplayUserStat
        id={id}
        field="keyData.proteinCount"
        unit="g"
        label="Proteines"
        icon={proteinIcon}
      />
      <DisplayUserStat
        id={id}
        field="keyData.carbohydrateCount"
        unit="g"
        label="Glucides"
        icon={carbsIcon}
      />
      <DisplayUserStat
        id={id}
        field="keyData.lipidCount"
        unit="g"
        label="Lipides"
        icon={fatIcon}
      />
    </div>
  );
}

export default Dashboard;
