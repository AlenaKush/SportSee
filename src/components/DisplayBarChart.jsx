import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";
import PropTypes from "prop-types";


function DisplayBarChart({ data }) {
  return (
    <div className="bar-chart">
      <h3 className="chart-title">Activité quotidienne</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" stroke="#9B9EAC" tickLine={false} />
          <YAxis yAxisId="kg" orientation="right" stroke="#9B9EAC" tickLine={false} />
          <YAxis yAxisId="cal" orientation="left" stroke="#9B9EAC" tickLine={false} hide />
          <Tooltip />
          <Legend verticalAlign="top" align="right" iconType="circle" />
          <Bar yAxisId="kg" dataKey="kilogram" fill="#282D30" barSize={7} radius={[3, 3, 0, 0]} />
          <Bar yAxisId="cal" dataKey="calories" fill="#E60000" barSize={7} radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

DisplayBarChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DisplayBarChart;
