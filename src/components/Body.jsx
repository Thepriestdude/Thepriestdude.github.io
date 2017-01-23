import React, {Component} from 'react'
import {Col, Row} from 'react-bootstrap'

import './components.css'
import cv from '../media/cv.pdf'

export default class Body extends Component {

  render() {
    return(
      <div className="container body-container">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="info">
              I'm the guy with a burning passion for software development, and
              to develop the future. Beyond the software projects I had during
              my education I have constantly been looking for new challenges to
              develop myself, both personally and intellectually. I love to
              solve problems with a group, and I'm usually the guy that comes
              with all the awesome (sometimes crazy) ideas how to solve them,
              while at the same time having an amazing eye for details, all to
              finally create a product that everyone can be proud of.
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            <div className="info">
              <a href="https://github.com/Thepriestdude" className="black" target="_blank">
                <i className="fa fa-github" aria-hidden="true"/> &nbsp; &nbsp;
              </a>
              <a href="https://www.linkedin.com/in/oskarselberg" className="black" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true"/>
              </a> &nbsp;&nbsp;&nbsp;Follow me
            </div>
          </Col>

          <Col xs={12} sm={6} md={6} lg={6}>
            <div className="info">
              <a href={cv} className="black" download="Oskar_Selberg.pdf" target="_blank">
                <i className="fa fa-file-text-o bigger" aria-hidden="true"/>
              </a> &nbsp; &nbsp;Download my CV
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
