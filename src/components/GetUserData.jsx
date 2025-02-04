import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserData } from "../api/api";
import PropTypes from "prop-types";


function DataDisplay({requestedData}) {
    const { id } = useParams();
    const [userData, setUserData] = useState('');
  
    useEffect(() => {
        const fetchUserData = async () => {
          const data = await getUserData(id); 
          const fieldKeys = requestedData.split(".");
          let value = data.data;
          for (const key of fieldKeys) {
            value = value[key]; 
          }
    
          setUserData(value);
        };
        
        fetchUserData();
    }, [id, requestedData]);

  return userData;
}

export default DataDisplay;


DataDisplay.propTypes = {
    requestedData: PropTypes.string.isRequired,
};