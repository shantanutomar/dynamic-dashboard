import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody } from "shards-react";
import Chart from "../utils/chart";

const BigStatsCard = props => {
  const canvasRef = React.createRef();

  useEffect(() => {
    initDashBoardOverview();
  })

  const initDashBoardOverview = () => {
    const chartOptions = {
      ...{
        responsive: true,
        legend: {
          position: "top"
        },
        elements: {
          line: {
            tension: 0.3
          },
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: false,
              ticks: {
                callback(tick, index) {
                  return `${tick < 10 ? '0'+tick : tick}`;
                }
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                suggestedMax: 45,
                callback(tick) {
                  if (tick === 0) {
                    return tick;
                  }
                  return `$${tick}`;
                }
              }
            }
          ]
        },
        hover: {
          mode: "nearest",
          intersect: false
        },
        tooltips: {
          custom: false,
          mode: "nearest",
          intersect: false
        }
      },
      ...props.chartOptions
    };

    const DashBoardOverview = new Chart(canvasRef.current, {
      type: "LineWithLine",
      data: props.chartData,
      options: chartOptions
    });

    const buoMeta = DashBoardOverview.getDatasetMeta(0);
    buoMeta.data[0]._model.radius = 0;
    buoMeta.data[
      props.chartData.datasets[0].data.length - 1
    ]._model.radius = 0;

    DashBoardOverview.render();
  }
  
  const { title } = props;
  
  return (
    <Card small>
      <CardHeader className="border-bottom">
        <h6 className="m-0">{title}</h6>
      </CardHeader>
      <CardBody className="pt-0">
        <canvas
          height="120"
          ref={canvasRef}
        />
      </CardBody>
    </Card>
  );
}

BigStatsCard.propTypes = {
  title: PropTypes.string,
  chartData: PropTypes.object,
  chartOptions: PropTypes.object
};

export default BigStatsCard;
