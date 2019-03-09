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
import AppTrx from "./AppTrx";

class ModalProductInvestasi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      jumlahTotalLot: '',
      lotTaken: '0',
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAmountChange = lotTaken => {
        this.setState({ 
          lotTaken: lotTaken})
    }
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChange(event) {
    var lotTaken = event.target.value;
    this.setState({ ...this.state, lotTaken });
  }

  componentDidMount() {
    axios.get(`https://mgvplus.herokuapp.com/products/${this.props.productId}`).then(response => {
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
    let { jumlahTotalLot, lotTaken} = this.state; 
    let totalBayar = (lotTaken * 500000).toLocaleString('id');
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
                  value={this.state.lotTaken}
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
                  value={this.state.lotTaken}
                  step="1"
                  class="slider"
                  id="myRange"
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
            {/* <SliderProductLot/> */}
            <a> Harga per lot : Rp. 500.000,00 </a><br/>
            <a> Total Harga : Rp {totalBayar} </a><br/>
          </ModalBody>
          <ModalFooter>
            <Button  onClick={this.toggle}>
            <Link to={{ pathname: `/transaction/${this.props.productId}`,state: { lotTaken: this.state.lotTaken}}}>
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