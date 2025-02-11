import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";
import PropTypes from "prop-types";


const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-text">{payload[0].value} kg</p>
        <p className="tooltip-text">{payload[1].value} Kcal</p>
      </div>
    );
  }
  return null;
};

function DisplayBarChart({ data }) {
  return (
    <div className="bar-chart">
      <div className="chart-header">
        <h3 className="chart-title">Activité quotidienne</h3>
        <Legend className="custom-legend"
          verticalAlign="top"
          align="right"
          iconSize={8}
          payload={[
            { value: "Poids (kg)", id: "kg", color: "#282D30" },
            { value: "Calories brûlées (kCal)", id: "cal", color: "#E60000" }
          ]}
        />
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" stroke="#9B9EAC" tickLine={false} />
          <YAxis yAxisId="kg" orientation="right" stroke="#9B9EAC" tickLine={false} axisLine={false} tick={{ fill: "#9B9EAC" }} />
          <YAxis yAxisId="cal" orientation="left" stroke="#9B9EAC" tickLine={false} hide />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(196, 196, 196, 0.5)" }} />
          
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


CustomTooltip.propTypes = {
  active: PropTypes.bool, 
  payload: PropTypes.array, 
};

export default DisplayBarChart;
