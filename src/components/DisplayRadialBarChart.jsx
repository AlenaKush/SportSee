import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts";
import PropTypes from "prop-types";


function DisplayRadialBarChart({ score }) {
  const data = [
    { name: "Score", value: score * 100, fill: "#FF0101" } 
  ];

  return (
    <div className="radial-bar-chart">
      <h3 className="radial-bar-chart_title">Score</h3>
      <ResponsiveContainer className='radial-bar-chart_box' width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="90%" barSize={10} data={data} >
          <svg className="white-cecrle" width="100%" height="100%">
            <circle cx="50%" cy="50%" r="32%" fill="white" />
          </svg>
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar dataKey="value" background={{ fill: "#fbfbfb" }} cornerRadius={50} />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="score-text">
        <p className="score-value">{score * 100}%</p>
        <p className="score-label">de votre objectif</p>
      </div>
    </div>
  );
}

DisplayRadialBarChart.propTypes = {
  score: PropTypes.number.isRequired,
};

export default DisplayRadialBarChart;
