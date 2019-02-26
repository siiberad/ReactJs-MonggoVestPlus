import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselCaption
  } from 'reactstrap';
import '../assets/css/bannerstyle.css';

const items = [
  {
    src: 'https://res.cloudinary.com/siiberad/image/upload/v1550222805/Image.jpg',
    altText: 'Semua Orang Bisa Berternak',
    caption: 'Kelola keuangan anda dengan instrumen investasi yang terjangkau dan rendah resiko'
  }
];

class AppCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
    }
    
  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className="bg-img" src={item.src} alt={item.altText} />
          <CarouselCaption className="carousel-caption" captionText={item.caption} captionHeader={item.altText} />
        </CarouselItem>
      );
    });

    return (
        <Carousel className="bg-banner"
          activeIndex={activeIndex}
          
        > 
          {slides}
        </Carousel>
      );
    }
  }


export default AppCarousel;