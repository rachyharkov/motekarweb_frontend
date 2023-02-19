import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "animate.css";

class VisualizeStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepSelected: this.props.stepSelected,
      insideBool: false,
    };
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.stepSelected !== this.props.stepSelected) {
      setTimeout(() => {
        this.setState({ stepSelected: this.props.stepSelected });
      }, 1000);
    }
  }


  componentWillUnmount() {
    console.log('Component Unmounted')
  }

  render() {
    let renderedStep = null;
    if (this.state.stepSelected == 1) {
      renderedStep = <div className="working-process-detail-visualization animate__animated animate__zoomIn" key={this.state.stepSelected}>
              <img
                className="animate__animated animate__bounceIn rectangle-14"
                src="src/assets/images/rectangle-14.svg"
                alt="rectangle 14"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-16"
                src="src/assets/images/rectangle-16.svg"
                alt="rectangle 16"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-16"
                src="src/assets/images/rectangle-16.svg"
                alt="rectangle 16"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-16"
                src="src/assets/images/rectangle-16.svg"
                alt="rectangle 16"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-16"
                src="src/assets/images/rectangle-16.svg"
                alt="rectangle 16"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-21"
                src="src/assets/images/rectangle-21.svg"
                alt="rectangle 21"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-15"
                src="src/assets/images/rectangle-15.svg"
                alt="rectangle 15"
              />
            </div>
    }
    if (this.state.stepSelected == 2) {
      renderedStep = <div className="working-process-detail-visualization animate__animated animate__zoomIn" key={this.state.stepSelected}>
              <img
                className="animate__animated animate__bounceIn rectangle-14"
                src="src/assets/images/rectangle-14.svg"
                alt="rectangle 14"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-16"
                src="src/assets/images/rectangle-16.svg"
                alt="rectangle 16"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-16"
                src="src/assets/images/rectangle-16.svg"
                alt="rectangle 16"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-16"
                src="src/assets/images/rectangle-16.svg"
                alt="rectangle 16"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-16"
                src="src/assets/images/rectangle-16.svg"
                alt="rectangle 16"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-21"
                src="src/assets/images/rectangle-21.svg"
                alt="rectangle 21"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-15"
                src="src/assets/images/rectangle-15.svg"
                alt="rectangle 15"
              />
            </div>
    }
    if (this.state.stepSelected == 3) {
      renderedStep = <div className="working-process-detail-visualization animate__animated animate__zoomIn" key={this.state.stepSelected}>
              <img
                className="animate__animated animate__bounceIn rectangle-14"
                src="src/assets/images/rectangle-14.svg"
                alt="rectangle 14"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-16"
                src="src/assets/images/rectangle-16.svg"
                alt="rectangle 16"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-16"
                src="src/assets/images/rectangle-16.svg"
                alt="rectangle 16"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-16"
                src="src/assets/images/rectangle-16.svg"
                alt="rectangle 16"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-16"
                src="src/assets/images/rectangle-16.svg"
                alt="rectangle 16"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-21"
                src="src/assets/images/rectangle-21.svg"
                alt="rectangle 21"
              />
              <img
                className="animate__animated animate__bounceIn rectangle-15"
                src="src/assets/images/rectangle-15.svg"
                alt="rectangle 15"
              />
            </div>
    }
    
    return renderedStep
  }
}

export default VisualizeStep;
