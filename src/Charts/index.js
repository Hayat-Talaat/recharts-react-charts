import React from 'react';
import Demo from './Demos/DemoOne'
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";

const Charts  = () => {
    return (
      <>
        <div>
          <Container className="pt-5 pb-5">
            <Demo />
          </Container>
        </div>
      </>
    );
}
 
export default Charts;