import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";
import DashBoardTitle from "./DashBoardTitle";
import SmallStatsCard from "./SmallStatsCard";
import BigStatsCard from "./BigStatsCard";
import { smallStatsCardData, bigStatsCardData } from "../data";

const DashBoardOverview = () => {

  const [smallStats, setSmallStats] = useState([]);
  const [bigStats, setBigStats] = useState([]);

  useEffect(() => {
    setSmallStats(smallStatsCardData);
    setBigStats(bigStatsCardData);
  }, [])

  return (
    smallStats.length > 0 && bigStats.length > 0 ? 
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <DashBoardTitle title="DASHBOARD" className="text-lg-left mb-3" />
        </Row>

        <Row>
          {smallStats.map((stats, idx) => (
            <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
              <SmallStatsCard
                id={`small-stats-${idx}`}
                variation="1"
                chartData={stats.datasets}
                chartLabels={stats.chartLabels}
                label={stats.label}
                value={stats.value}
                percentage={stats.percentage}
                increase={stats.increase}
                decrease={stats.decrease}
              />
            </Col>
          ))}
        </Row>

        <Row>
            {bigStats.map(stats => {
              return (
                <Col key={stats.title} lg="6" md="12" sm="12" className="mb-4">
                  <BigStatsCard {...stats}/>
                </Col>
              )
            })}
        </Row>
      </Container> 
    : null
  );
}

DashBoardOverview.propTypes = {
  smallStats: PropTypes.array
};

export default DashBoardOverview;
