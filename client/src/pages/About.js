import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Aboutus from "../components/Aboutus"
import AboutNav from "../components/AboutNav"
// import API from "../utils/API";

class About extends Component {
  render() {
    return (
      <div>
        <AboutNav />
        <Container>
          <Aboutus></Aboutus>
        </Container>
      </div>


    );
  }
}

export default About;
