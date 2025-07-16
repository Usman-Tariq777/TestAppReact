import React from "react";
import { Pie, Bar, PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale
);

function Reports({ users }) {
  const total = users.length || 1;

  const femaleCount = users.filter((u) => u.gender === "Female").length;
  const under25Count = users.filter((u) => parseInt(u.age) < 25).length;
  const over15MaleCount = users.filter(
    (u) => u.gender === "Male" && parseInt(u.age) > 15
  ).length;

  const pieData = {
    labels: ["Female", "Others"],
    datasets: [
      {
        data: [femaleCount, total - femaleCount],
        backgroundColor: ["#f06292", "#ccc"],
      },
    ],
  };

  const barData = {
    labels: ["Age < 25", "Others"],
    datasets: [
      {
        label: "% Under 25",
        data: [under25Count, total - under25Count],
        backgroundColor: ["#42a5f5", "#ccc"],
      },
    ],
  };

  const polarData = {
    labels: ["Male > 15", "Others"],
    datasets: [
      {
        data: [over15MaleCount, total - over15MaleCount],
        backgroundColor: ["#66bb6a", "#ccc"],
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: "#222",
          font: { weight: "bold" },
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#222" },
        grid: { color: "rgba(0,0,0,0.1)" },
      },
      y: {
        ticks: { color: "#222" },
        grid: { color: "rgba(0,0,0,0.1)" },
      },
    },
  };

  const pieOptions = {
    plugins: {
      legend: {
        labels: {
          color: "#222",
          font: { weight: "bold" },
        },
      },
    },
  };

  return (
    <div className="data">
      <h2>User Reports</h2>
      <div
        style={{
          display: "flex",
          gap: "24px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "250px" }}>
          <h4>% Female</h4>
          <Pie data={pieData} options={pieOptions} />
        </div>
        <div style={{ width: "250px" }}>
          <h4>% Age &lt; 25</h4>
          <Bar data={barData} options={chartOptions} />
        </div>
        <div style={{ width: "250px" }}>
          <h4>% Male &gt; 15</h4>
          <PolarArea data={polarData} options={pieOptions} />
        </div>
      </div>
    </div>
  );
}

export default Reports;
