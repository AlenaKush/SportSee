import PropTypes from "prop-types";
import "../styles/App.scss";

const CustomTooltip = ({ payload = [], unit = "", type = "default" }) => (
  <div className={type}>
    {payload.map(({ value }, index) => (
      <p key={index} className="tooltip-text">
        {value} {unit}
      </p>
    ))}
  </div>
);

CustomTooltip.propTypes = {
  payload: PropTypes.array,
  unit: PropTypes.string,
  type: PropTypes.string,
};

export default CustomTooltip;
