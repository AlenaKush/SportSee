import PropTypes from "prop-types";
import "../styles/App.scss";

const CustomTooltip = ({ payload = [], unit = "", type = "default" }) => {
  if (!payload.length) return null;

  return (
    <div className={type}>
      {payload.map((entry, index) => {
        const displayUnit = unit || (entry.dataKey === "kilogram" ? "kg" : "Kcal");

        return (
          <p key={index} className="tooltip-text">
            {entry.value} {displayUnit}
          </p>
        );
      })}
    </div>
  );
};

CustomTooltip.propTypes = {
  payload: PropTypes.array,
  unit: PropTypes.string,
  type: PropTypes.string,
};

export default CustomTooltip;
