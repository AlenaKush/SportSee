import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserData } from "../api/api";
import PropTypes from "prop-types";


function FetchUserData({ field }) {
    const { id } = useParams();
    const [data, setData] = useState('');
  
    useEffect(() => {
        const fetchData = async () => {
          const response = await getUserData(id); 
          const fieldKeys = field.split(".");
          let value = response.data;
          for (const key of fieldKeys) {
            value = value[key]; 
          }
    
          setData(value);
        };
        
        fetchData();
    }, [id, field]);

  return data;
}

export default FetchUserData;


FetchUserData.propTypes = {
    field: PropTypes.string.isRequired,
};