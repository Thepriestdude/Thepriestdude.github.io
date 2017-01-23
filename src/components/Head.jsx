import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'
import Pic from '../media/pic.png'
import {init} from 'ityped'

import './components.css'


export default class Head extends Component {
  /*constructor(props) {
    super(props)
  }*/

  componentDidMount(){
    init('#element',{
    strings: ['an Engineer', 'an Entrepreneur', 'a Leader','Oskar Selberg'],
    //optional
    typeSpeed:  100, //default
    //optional
    backSpeed:  70, //default
    //optional
    startDelay: 500, //default
    //optional
    backDelay:  500, //default
    //optional
    loop:       false, //default
    //optional
    showCursor: true, //default
    //optional
    cursorChar: "_", //default
    // optional callback called (if `loop` is false) once the
    // last string was typed
    onFinished: function(){},
  })
  }

  render() {
    return(
      <div className="container-fluid head">
        <Row className="profile">
          {/* this contains the profile pic for >=  tablets */}
          <Col xs={12} sm={12} md={12} lg={12}>
            <img src={Pic} className="img-circle img-responsive img-size" alt="logo"></img>
          </Col>
        </Row>
        <Row className="type-area">
          <Col xs={12} sm={12} md={12} lg={12}>
            I am<br/><span id="element"></span>
          </Col>
        </Row>

      </div>
    )
  }
}
