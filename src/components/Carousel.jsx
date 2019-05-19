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
              src={process.env.PUBLIC_URL + '/assets/me.png'}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Me</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + '/assets/me.png'}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Again</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }