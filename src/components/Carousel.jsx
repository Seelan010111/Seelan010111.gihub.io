import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';


export default class ControlledCarousel extends Component {
    constructor(props, context) {
      super(props, context);

      this.handleSelect = this.handleSelect.bind(this);

      this.state = {
        index: 0,
        direction: null,
      };
    }

    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }

    render() {
      const { index, direction } = this.state;

      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={'/assets/tech-stack1.png'}
              alt="Second slide"
              height="400"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={'/assets/tech-stack2.png'}
              alt="Second slide"
              height="400"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={'/assets/tech-stack3.png'}
              alt="Second slide"
              height="400"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={'/assets/tech-stack4.png'}
              alt="Second slide"
              height="400"
              fluid
            />
          </Carousel.Item>
        </Carousel>
      );
    }
  }