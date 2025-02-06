import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";


function DisplayLineChart({ data }) {
  return (
    <div className="line-chart-container">
      <h3 className="chart-title">Durée moyenne des sessions</h3>
      <ResponsiveContainer width={260} height={200}>
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="#fff" tick={{ fill: "#fff" }} />
          <YAxis hide domain={["dataMin", "dataMax"]} />
          <Tooltip />
          <Line type="monotone" dataKey="sessionLength" stroke="#FF0101" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

DisplayLineChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DisplayLineChart;
