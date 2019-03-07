import React from 'react';
import "../assets/css/Trx.css"
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Container} from'reactstrap';
import axios from 'axios';
import Select from 'react-select';
import options from "./BankName";
import loggedIn from "../helpers/loggedIn"
import { Redirect } from 'react-router-dom';

class AppTrx extends React.Component {
  constructor(props) {
    super(props);
    this.onLot = this.onLot.bind(this);
    this.onRek = this.onRek.bind(this);
    this.onBankName = this.onBankName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    

    this.state = {
        userId: '',
        productModel: '',
        lotTaken:'',
        noRekening: '',
        bankModel: '',
        selectedOption: null,
        check: false
    }
}

onLot(lotTaken) {
  this.setState({
    lotTaken: lotTaken.target.value
    });
}
onRek(noRekening) {
    this.setState({
      noRekening: noRekening.target.value
      });
}
onBankName (selectedOption) {
  this.setState({ selectedOption });
}

handleChecked = () => {
  this.setState({
      check: !this.state.check,
  });
}

componentDidMount() {
  axios.get(`https://mgvplus.herokuapp.com/products/3`).then(response => {
      const productName = response.data.productName;
      const productPrice = response.data.productPrice;
      this.setState({productName, productPrice});
  });
}

onSubmit(e) {
    const token = localStorage.getItem('JWT_TOKEN')
    const tokenParts = token.split('.');
    const encodedPayload = tokenParts[1];
    const rawPayload = atob(encodedPayload);
    const user = JSON.parse(rawPayload);    
    const userId = user.userId
    
    
    let bankModel = parseInt(this.state.selectedOption.value, 10)
  
    e.preventDefault();
    axios.post(`https://mgvplus.herokuapp.com/users/${userId}/transactions?productModel=3&bankModel=${bankModel}`, 
    {
    lotTaken: parseInt(this.state.lotTaken, 10),
    noRekening: this.state.noRekening 
    }, 
    { headers: { "Authorization": token } })
      .then(res => console.log(res.data));
      this.setState({
        noRekening: '',
        selectedOption: null,
        lotTaken: '',
        check: false,
      });
}

canBeSubmitted() {
  const {check, noRekening} = this.state;
  return check === true && noRekening.length > 0 ;
}

render() {
    // if (!loggedIn()) {
    // return <Redirect to="/" />
    // }
    const isEnabled = this.canBeSubmitted();
    const { selectedOption } = this.state;
    return (
      <div>
        <Container className="margin-form">
            <Form onSubmit={this.onSubmit}>

              <FormGroup row>
                <Label sm={2}>Nama Produk</Label>
                <Col sm={10}>
                <Input
                    disabled="true"
                    type= 'text'
                    className="form-control"
                    placeholder={this.state.productName}
                    >
                </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm={2}>Harga Produk</Label>
                <Col sm={10}>
                <Input
                    disabled="true"
                    type= 'text'
                    className="form-control"
                    placeholder={this.state.productPrice}
                    >
                </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm={2}>Lot Diambil</Label>
                <Col sm={10}>
                <Input
                    // disabled="true"
                    type= 'text'
                    className="form-control"
                    value={this.state.lotTaken}
                    onChange={this.onLot}
                    >
                </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm={2}>Bank Name</Label>
                <Col sm={10}>
                <Select
                    value={selectedOption}
                    onChange={this.onBankName}
                    options={options}
                    placeholder="Pilih Bank Anda ... "
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm={2}>Nomor Rekening</Label>
                <Col sm={10}>
                  <Input
                    placeholder="Masukkan Nomor Rekening Anda ..."
                    className="form-control"
                    value={this.state.noRekening}
                    onChange={this.onRek}
                    className="no-spinners"
                    type="number"
                    >
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup check row>
                <Label check sm={4}>
                <Col sm={10}>
                <Input
                    type="checkbox"
                    checked={this.state.check}
                    onChange={this.handleChecked}
                    />{' '}
                    Check me out
                </Col>
                </Label>
              </FormGroup>

              <FormGroup check row>
                <Label check sm={4}>
                <Col sm={20}>
                <Button type="submit" disabled={!isEnabled}>Submit</Button>
                </Col>
                </Label>
              </FormGroup>

            </Form>
        </Container>
      </div>
    );
  }
}
export default AppTrx;