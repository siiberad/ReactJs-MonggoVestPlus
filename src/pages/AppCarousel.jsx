import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselCaption
  } from 'reactstrap';
import '../assets/css/bannerstyle.css';

const items = [
  {
    src: 'https://previews.dropbox.com/p/thumb/AAUmMCCe_OzZKDlXoDYIY7lzZgFLiIsO_8CnIXZagCraIVkv1oU6jJi_xd_JiAZnWXi2eUQKD_5HYNvEM8vAZAu-4v1odVKv1-CiD7kCcYISc486aLNpxY4hS2SiMaCi9aNkb21JnGkDWLMmK_hjwMRxbVMazNwkaQ9Yc16GCdxETFLha8jqeyVMx2ckE5oQXAGaLPQ6cl30hFPtVAdI7tH0v8ehHmLgKmrEhb9PxHaXiy7LcjGSr5YhWFx_6AJ6EWc/p.jpeg?size_mode=5',
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