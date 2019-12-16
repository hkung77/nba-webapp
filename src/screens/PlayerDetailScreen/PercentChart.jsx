import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Chart from "chart.js";

import "./percentChart.css";

const propTypes = {
  stats: PropTypes.object
};

const PercentChart = ({ stats }) => {
  const percentStats = ["FG3", "FG", "FT"];

  const getTitle = stat => {
    switch (stat) {
      case "FG3":
        return "3 Point";
      case "FG":
        return "Field Goals";
      case "FT":
        return "Free Throws";
      default:
        return "";
    }
  };

  useEffect(() => {
    if (Object.keys(stats).length > 0) {
      percentStats.forEach(stat => {
        const ctx = document.getElementById(stat);

        new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: [`${stat}A`, `${stat}M`],
            datasets: [
              {
                data: [stats[`${stat}A`], stats[`${stat}M`]],
                backgroundColor: ["#4287f5", "#42f542"]
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: getTitle(stat)
            }
          }
        });
      });
    }
  }, [stats, percentStats]);

  return percentStats.map(stat => (
    <div key={stat} className="w-25 position-relative align-items-center">
      <canvas id={stat} width="20" height="20" />
      <div className="position-absolute percentNumberPosition">
        <p className="percentNumber">
          {parseFloat(stats[`${stat}_PCT`] * 100).toFixed(2)}%
        </p>
      </div>
    </div>
  ));
};

PercentChart.propTypes = propTypes;
PercentChart.defaultProps = {
  stats: {}
};
export default PercentChart;
