import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getUserData} from '../api/api.js';
import DataDisplay from "./DataDisplay.jsx";
import proteinIcon from '../assets/protein-icon.svg';
import fatIcon from '../assets/fat-icon.svg';
import carbsIcon from '../assets/carbs-icon.svg';
import caloriesIcon from '../assets/calories-icon.svg';



function DashBoard() {
    const { id } = useParams();
    const [userName, setUserName] = useState('');
  
    useEffect(() => {
        const fetchUserData = async () => {
          const userData = await getUserData(id); // Fetch user data using id
          setUserName(userData.data.userInfos.firstName); // Set user's first name in state
        };
        
        fetchUserData(); // Call the function when component mounts
    }, [id]); // Re-run effect when id changes

  
    return (
        <div>
            <h2>Bonjour {userName}</h2>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

            <DataDisplay 
                requestedData="calorieCount" 
                unit="kcal"     
                dataName="Calories"
                url={caloriesIcon}
            />
            <DataDisplay 
                requestedData="proteinCount" 
                unit="g"     
                dataName="Proteines"
                url={proteinIcon}
            />
            <DataDisplay 
                requestedData="carbohydrateCount" 
                unit="g"     
                dataName="Glucides"
                url={carbsIcon}
            />
            <DataDisplay 
                requestedData="lipidCount" 
                unit="g"     
                dataName="Lipides"
                url={fatIcon}
            />
        </div>
  );
}

export default DashBoard;

