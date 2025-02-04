import PerformanceData from './PerformanceData.jsx'
import proteinIcon from '../assets/protein-icon.svg';
import fatIcon from '../assets/fat-icon.svg';
import carbsIcon from '../assets/carbs-icon.svg';
import caloriesIcon from '../assets/calories-icon.svg';
import UserStatDisplay from "./UserStatDisplay.jsx";
import FetchUserData from './FetchUserData.jsx';



function Dashboard() {
    return (
        <div>
            <h2>Bonjour <FetchUserData field="userInfos.firstName" /></h2>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

            <PerformanceData />

            <UserStatDisplay 
                field="keyData.calorieCount" 
                unit="kcal"     
                label="Calories"
                icon={caloriesIcon}
            />
            <UserStatDisplay
                field="keyData.proteinCount" 
                unit="g"     
                label="Proteines"
                icon={proteinIcon}
            />
            <UserStatDisplay
                field="keyData.carbohydrateCount" 
                unit="g"     
                label="Glucides"
                icon={carbsIcon}
            />
            <UserStatDisplay
                field="keyData.lipidCount" 
                unit="g"     
                label="Lipides"
                icon={fatIcon}
            />
        </div>
  );
}

export default Dashboard;

