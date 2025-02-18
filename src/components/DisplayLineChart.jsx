import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import { handleMouseMove, handleMouseLeave } from "../utils/HandleMouse.js";
import CustomTooltip from "../utils/CastomTooltip.jsx";

function DisplayLineChart({ data }) {
  return (
    <div className="line-chart" style={{ background: "rgba(255, 0, 0, 1)" }}>
      <h3 className="line-chart_title">Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height="70%">
        <LineChart
          data={data}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <XAxis
            dataKey="day"
            stroke="#fff"
            axisLine={false}
            interval={0}
            tickLine={false}
            tick={{ fill: "rgba(255, 255, 255, 0.5)", fontSize: 12 }}
          />
          <YAxis hide domain={["dataMin", "dataMax"]} />
          <Tooltip content={<CustomTooltip unit="min" type="line-chart-tooltip" />} cursor={false} />
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
