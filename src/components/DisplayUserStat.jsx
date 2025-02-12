import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import FetchUserData from "../utils/FetchUserData.js";



function DisplayUserStat({id, field, unit, label, icon}) {
    const [data, setData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const value = await FetchUserData(id, field);
            setData(value);
        };
        fetchData();
    }, [id, field]);

    return (
        <div className="stat-unit">
            <img src={icon} alt={`${label} icon`} className="stat-icon" />
            <div className="stat-text">
                <p>{data}{unit}</p>
                <span className="stat-text_label">{label}</span>
            </div>    
        </div>
    );
}

export default DisplayUserStat;

DisplayUserStat.propTypes = {
    id: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    unit: PropTypes.string,                    
    label: PropTypes.string,     
    icon: PropTypes.string,          
    
};