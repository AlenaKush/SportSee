import FetchUserData from './FetchUserData.jsx';
import FetchPerformanceData from './FetchPerformanceData.jsx'
import FetchAverageSessionsData from './FetchAverageSessionsData.jsx';
import proteinIcon from '../assets/protein-icon.svg';
import fatIcon from '../assets/fat-icon.svg';
import carbsIcon from '../assets/carbs-icon.svg';
import caloriesIcon from '../assets/calories-icon.svg';
import DisplayUserStat from "./DisplayUserStat.jsx";
import DisplayRadialBarChart from './DisplayRadialBarChart.jsx';
import DisplayRadarChart from './DisplayRadarChart.jsx';
import DisplayLineChart from './DisplayLineChart.jsx';


function Dashboard() {
    const score = FetchUserData({ field: "todayScore" }) || FetchUserData({ field: "score" });
    const performanceData = FetchPerformanceData();
    const sessionData = FetchAverageSessionsData();
    return (
        <div>
            <h2>Bonjour <FetchUserData field="userInfos.firstName" /></h2>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            
            <DisplayLineChart data={sessionData} />
            
            <DisplayRadialBarChart score={Number(score)} />

            <DisplayRadarChart data={performanceData}/>

            <DisplayUserStat 
                field="keyData.calorieCount" 
                unit="kcal"     
                label="Calories"
                icon={caloriesIcon}
            />
            <DisplayUserStat
                field="keyData.proteinCount" 
                unit="g"     
                label="Proteines"
                icon={proteinIcon}
            />
            <DisplayUserStat
                field="keyData.carbohydrateCount" 
                unit="g"     
                label="Glucides"
                icon={carbsIcon}
            />
            <DisplayUserStat
                field="keyData.lipidCount" 
                unit="g"     
                label="Lipides"
                icon={fatIcon}
            />
        </div>
  );
}

export default Dashboard;

