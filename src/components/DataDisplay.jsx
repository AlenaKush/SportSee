import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserData } from "../api/api.js";
import PropTypes from "prop-types";



function DataDisplay({requestedData, unit, dataName, url}) {
    const { id } = useParams();
    const [userData, setUserData] = useState('');
  
    useEffect(() => {
        const fetchUserData = async () => {
          const data = await getUserData(id); 
          setUserData(data.data.keyData[requestedData]);
        };
        
        fetchUserData();
    }, [id, requestedData]);
    
    return (
        <div className="data-container">
            <img src={url} alt={`${dataName} icon`} className="data-icon" />
            <div className="data-text">
                <p>{userData}{unit}</p>
                <p>{dataName}</p>
            </div>    
        </div>
    );
}

export default DataDisplay;

DataDisplay.propTypes = {
    requestedData: PropTypes.string.isRequired,
    unit: PropTypes.string,                    
    dataName: PropTypes.string,     
    url: PropTypes.string,          
    
};