import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts";
import PropTypes from "prop-types";

/**
 * Component to display user's score as a radial bar chart
 */
function RadialBarChartComponent({ score }) {
  // Data for the chart
  const data = [
    { name: "Score", value: score * 100, fill: "#FF0000" } // Convert to percentage
  ];

  return (
    <div className="radial-bar-chart-container">
      <h3 className="chart-title">Score</h3>
      <ResponsiveContainer width={260} height={260}>
        <RadialBarChart 
          cx="50%" 
          cy="50%" 
          innerRadius="70%" 
          outerRadius="90%" 
          barSize={10} 
          data={data} 
          startAngle={90} 
          endAngle={90 + (score * 360)}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar background dataKey="value" cornerRadius={50} />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="score-text">
        <p className="score-value">{score * 100}%</p>
        <p className="score-label">de votre objectif</p>
      </div>
    </div>
  );
}

// PropTypes validation
RadialBarChartComponent.propTypes = {
  score: PropTypes.number.isRequired,
};

export default RadialBarChartComponent;
