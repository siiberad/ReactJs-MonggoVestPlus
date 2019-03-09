import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Input
} from "reactstrap";
import axios from 'axios';

import {
  Link
} from "react-router-dom";

class ModalProductInvestasi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      amountValue: 5000,
      // jumlahTotalLot: ''
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAmountChange = value => {
        this.setState({ amountValue: value})
    }
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChange(event) {
    var value = event.target.value;
    this.setState({ ...this.state, value });
  }

  totalHarga

  componentDidMount() {
    // let productId = this.state.productId;
    // const { match: { params } } = this.props;
    let id = localStorage.getItem('product_id');
    // console.log(productId)
    axios.get(`https://mgvplus.herokuapp.com/products/${id}`).then(response => {
      const jumlahTotalLot = response.data.jumlahTotalLot;
      console.log('ini jumlahlot', response.data.jumlahTotalLot)
      this.setState({jumlahTotalLot});
      console.log('ini jumlahlot', jumlahTotalLot)
  });
}

  render() {
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );
    let { amountValue, yearsValue, jumlahTotalLot} = this.state; 
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>
          Lakukan Investasi
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} close={closeBtn}>
            Lakukan Investasi
          </ModalHeader>
          <ModalBody>
            Masukkan Jumlah Lot <br />
            <Row>
              <Col sm={3}>
                <Input
                  id="lotInputBox"
                  type="number"
                  placeholder="0"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  0
                </Input>
              </Col>
              <Col sm={9}>
                <Input
                  type="range"
                  min="0"
                  max= {jumlahTotalLot}
                  value={this.state.value}
                  step="1"
                  class="slider"
                  id="myRange"
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
            {/* <SliderProductLot/> */}
            Harga per lot : Rp. 500.000,00 <br />
            Total Harga : <br />
          </ModalBody>
          <ModalFooter>
            <Button  onClick={this.toggle}>
            <Link to="/transaction">
              Lanjutkan
            </Link>
            </Button>{" "}
            <Button  onClick={this.toggle}>
              Nanti saja
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalProductInvestasi;