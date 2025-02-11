import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

// Кастомный Tooltip, который отображает только количество минут
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#fff",
          color: "#000",
          padding: "5px 10px",
          fontSize: "8px",
        }}
      >
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

function DisplayLineChart({ data }) {
  return (
    <div className="line-chart">
      <h3 className="line-chart_title">Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height={190}>
        <LineChart data={data}>
          <XAxis 
            dataKey="day" 
            stroke="#fff" 
            axisLine={false} 
            interval={0} 
            tickLine={false} 
            tick={{ fill: "rgba(255, 255, 255, 0.5)", fontSize: 12 }} 
          />
          <YAxis hide domain={["dataMin", "dataMax"]} />
          <Tooltip content={<CustomTooltip />} cursor={false}/>
          <Line 
            type="monotone" 
            dataKey="sessionLength" 
            stroke="#fff" 
            strokeWidth={2} 
            strokeOpacity={0.5} 
            dot={false} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

DisplayLineChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DisplayLineChart;
