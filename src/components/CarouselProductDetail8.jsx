import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import axios from 'axios';





class CarouselProductDetail8 extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0,
      items : []
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    
  }
  componentDidMount() {
    let { productId }  = this.props.makanan;
    // // let productId = this.state.productId;
    axios.get(`https://mgvplus.herokuapp.com/products/${productId}`)
    // axios.get(`https://mgvplus.herokuapp.com/products/8`)
    .then(response => {
      const img1 = response.data.productImage1;
        const img2 = response.data.productImage2;
        const img3 = response.data.productImage3;
        const items = [
          {
            src: `${img1}`,
            altText: '',
            caption: ''
          },
          {
            src: `${img2}`,
            altText: '',
            caption: ''
          },
          {
            src: `${img3}`,
            altText: '',
            caption: ''
          }
        ];
      
      this.setState({items});
  });
}

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    
    const { activeIndex, items } = this.state;
    

    const slides = items.map((item) => {
      return (
        <CarouselItem className="items"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={this.state.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}
export default CarouselProductDetail8;