import PropTypes from "prop-types";
import "../styles/App.scss";

const CustomTooltip = ({ active, payload, unit = "", type = "default" }) => {
  if (active && payload && payload.length) {
    return (
      <div className={`${type}`}>
        {payload.map((item, index) => (
          <p key={index} className="tooltip-text">
            {item.value} {unit}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  unit: PropTypes.string,
  type: PropTypes.string,
};

export default CustomTooltip;
