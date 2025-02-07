import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts";
import PropTypes from "prop-types";


function DisplayRadialBarChart({ score }) {
  const data = [
    { name: "Score", value: score * 100, fill: "#FF0101" } 
  ];

  return (
    <div className="radial-bar-chart-container">
      <h3 className="chart-title">Score</h3>
      <ResponsiveContainer width={260} height={260}>
        <RadialBarChart innerRadius="70%" outerRadius="90%" barSize={10} data={data} >
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
DisplayRadialBarChart.propTypes = {
  score: PropTypes.number.isRequired,
};

export default DisplayRadialBarChart;
