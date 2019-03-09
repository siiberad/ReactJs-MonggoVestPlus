import React from 'react';
import "../assets/css/Trx.css"
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container } from 'reactstrap';
import axios from 'axios';
import Select from 'react-select';
import options from "./BankName";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import "../assets/css/animate.css"
import "../assets/scss/AppMain.scss"



class AppTrx extends React.Component {
  constructor(props) {
    super(props);

    this.onLot = this.onLot.bind(this);
    // this.hitungLot = this.hitungLot.bind(this);
    this.onRek = this.onRek.bind(this);
    this.onBankName = this.onBankName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChecked = this.handleChecked.bind(this);


    this.state = {
      productModel: '',
      lotTaken: '',
      hitung: this.props.lotTaken * 500000,
      noRekening: '',
      bankModel: '',
      selectedOption: '',
      check: false
    }
  }

  onLot(lotTaken) {
    this.setState({
      lotTaken: this.props.lotTaken
    });
  }
  onRek(noRekening) {
    this.setState({
      noRekening: noRekening.target.value
    });
  }
  onBankName(selectedOption) {
    this.setState({ selectedOption });
  }

  handleChecked = () => {
    this.setState({
      check: !this.state.check,
    });
    Swal.fire({
      title: 'Persetujuan',
      html:
        'Dengan ini anda setuju dengan ' +
        '<a href="http://localhost:3000/syarat">Syarat dan Ketentuan</a> ' +
        'yang berlaku.',
      animation: false,
      customClass: 'animated bounceInUp',
    })
  }

  componentDidMount() {
    axios.get(`https://mgvplus.herokuapp.com/products/${this.props.productId}`).then(response => {
      const productName = response.data.productName;
      const productPrice = response.data.productPrice;
      this.setState({ productName, productPrice });
    });

    const token = localStorage.getItem('JWT_TOKEN')
    const tokenParts = token.split('.');
    const encodedPayload = tokenParts[1];
    const rawPayload = atob(encodedPayload);
    const user = JSON.parse(rawPayload);
    const userId = user.userId

    axios.get(`https://mgvplus.herokuapp.com/user/${userId}`, { headers: { "Authorization": token } }).then(res => {
      const userEmail = res.data.userEmail;
      this.setState({ userEmail });
    }
    );
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
    axios.post(`https://mgvplus.herokuapp.com/users/${userId}/transactions?productModel=${this.props.productId}&bankModel=${bankModel}`,
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
    }
    );

    Swal.fire({
      title: 'Invoice dan Agreement',
      text: 'Invoice dan Agreement telah dikirim ke ' + this.state.userEmail,
      animation: false,
      customClass: 'animated bounceInDown'
    }).then(function () {
      window.location = "/allproduct"; //will redirect to your blog page (an ex: blog.html)
    }, 5000); //will call the function after 2 secs.

  }

  canBeSubmitted() {
    const { check, noRekening } = this.state;
    return check === true && noRekening.length > 0;
  }

  render() {
    const isEnabled = this.canBeSubmitted();
    const { selectedOption, hitung } = this.state;
    // if (!isLoggedIn()) {
    //   return <AppLoginRegistState checkAuth={()=>{window.location = '/profile/edit'}} modalLogin={true}/>
    //   // <Redirect to='/target' />
    // }
    // if (completedProfile !== true) {
    //     return  window.location = `/profile/edit`
    // }
    return (
      <div>
        <Container className="margin-form">
          <Form onSubmit={this.onSubmit}>

            <FormGroup row>
              <Label sm={2}>Nama Produk</Label>
              <Col sm={10}>
                <Input
                  disabled={true}
                  type='text'
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
                  disabled={true}
                  type='text'
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
                  type='text'
                  className="form-control"
                  value={this.props.lotTaken}
                  onChange={this.onLot}
                >
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Harga yang Dibayar</Label>
              <Col sm={10}>
                <Input
                  disabled={true}
                  type='text'
                  className="form-control"
                  value={this.state.hitung}
                  onChange={this.onLot}
                >
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Nama Bank</Label>
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
                  className="form-control no-spinners"
                  value={this.state.noRekening}
                  onChange={this.onRek}
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
                <Col sm={10}>
                  <Button outline type="submit" disabled={!isEnabled} size="lg" color="primary" >

                    Submit
                </Button>
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