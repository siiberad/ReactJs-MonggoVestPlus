import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselCaption
  } from 'reactstrap';
import '../assets/scss/_bannerstyle.scss';

const items = [
  {
    src: 'https://res.cloudinary.com/monggovestplus/image/upload/v1551761938/Image.jpg',
    altText: <h1>Semua Orang Bisa Berternak</h1>,
    caption: <text className="text-banner caption">Kelola keuangan anda dengan instrumen investasi yang terjangkau dan rendah resiko</text>
  }
];

class AppBanner extends Component {
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


export default AppBanner;