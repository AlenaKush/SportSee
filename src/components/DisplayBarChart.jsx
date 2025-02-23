import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";
import PropTypes from "prop-types";
import CustomTooltip from "../utils/CastomTooltip.jsx";

function DisplayBarChart({ data }) {
  
  const minWeight = Math.min( ...data.map(session => session.kilogram)) - 1;
  const maxWeight = Math.max( ...data.map(session => session.kilogram)) + 2;

  return (
    <div className="bar-chart">
      <div className="bar-chart_header">
        <h3 className="bar-chart_header_title">Activité quotidienne</h3>
        <Legend className="bar-chart_custom-legend"
          verticalAlign="top"
          align="right"
          iconSize={8}
          payload={[
            { value: "Poids (kg)", id: "kg", color: "#282D30" },
            { value: "Calories brûlées (kCal)", id: "cal", color: "#E60000" }
          ]}
        />
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data} >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" stroke="#9B9EAC" tickLine={false} />
          <YAxis yAxisId="kg" domain={[minWeight, maxWeight]} orientation="right" stroke="#9B9EAC" tickLine={false} axisLine={false} tick={{ fill: "#9B9EAC" }} />
          <YAxis yAxisId="cal" orientation="left" stroke="#9B9EAC" tickLine={false} hide />
          <Tooltip content={<CustomTooltip type="bar-chart-tooltip" />} cursor={{ fill: "rgba(196, 196, 196, 0.5)" }} />
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
