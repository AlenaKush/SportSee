import PropTypes from "prop-types";
import FetchUserData from "./FetchUserData.jsx";



function UserStatDisplay({field, unit, label, icon}) {
  
    return (
        <div className="stat-container">
            <img src={icon} alt={`${label} icon`} className="stat-icon" />
            <div className="stat-text">
                <p>
                    <FetchUserData field={field} />{unit}
                </p>
                <p>{label}</p>
            </div>    
        </div>
    );
}

export default UserStatDisplay;

UserStatDisplay.propTypes = {
    field: PropTypes.string.isRequired,
    unit: PropTypes.string,                    
    label: PropTypes.string,     
    icon: PropTypes.string,          
    
};