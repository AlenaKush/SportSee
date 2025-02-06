import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";


function DisplayRadarChart({ data }) {
  return (
    <div className="radar-chart-container">
      <ResponsiveContainer width='100%' height={200}>
        <RadarChart data={data} >
          <PolarGrid stroke="#fff" radialLines={false} />
          <PolarAngleAxis dataKey="subject" tick={{ fill: "#fff", fontSize: 12 }} />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

DisplayRadarChart.propTypes = {
  data: PropTypes.array.isRequired
};

export default DisplayRadarChart;
