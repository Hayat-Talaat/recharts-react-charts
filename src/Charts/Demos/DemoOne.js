import React from "react";

import SimpleLineChart from "./LineChart/SimpleLineChart";
import VerticalLineChart from "./LineChart/VerticalLineChart";

import StackedAreaChart from "./AreaChart/StackedAreaChart";
import SynchronizedAreaChart from "./AreaChart/SynchronizedAreaChart";

import SimpleBarChart from "./BarChart/SimpleBarChart";
import StackedBarChart from "./BarChart/StackedBarChart";

import SameDataComposedChart from "./ComposedChart/SameDataComposedChart";
import SimpleRadialBarChart from "./ComposedChart/SimpleRadialBarChart";
import { Row, Col } from "react-bootstrap";

const Charts = () => {
  return (
    <>
      <Row>
        <Col xs={12}>
          <h2 className="text-center pb-5">LineChart</h2>
        </Col>
        <Col>
          <SimpleLineChart />
        </Col>
        <Col>
          <VerticalLineChart />
        </Col>
      </Row>

      <hr />
      <Row className="mt-5">
        <Col xs={12}>
          <h2 className="text-center pb-5">BarChart</h2>
        </Col>
        <Col>
          <StackedAreaChart />
        </Col>
        <Col>
          <SynchronizedAreaChart />
        </Col>
      </Row>

      <hr />

      <Row className="mt-5">
        <Col xs={12}>
          <h2 className="text-center pb-5">BarChart</h2>
        </Col>
        <Col>
          <SimpleBarChart />
        </Col>
        <Col>
          <StackedBarChart />
        </Col>
      </Row>
      <hr />

      <Row className="mt-5">
        <Col xs={12}>
          <h2 className="text-center pb-5">ComposedChart</h2>
        </Col>
        <Col>
          <SameDataComposedChart />
        </Col>
        <Col>
          <SimpleRadialBarChart />
        </Col>
      </Row>
    </>
  );
};

export default Charts;
