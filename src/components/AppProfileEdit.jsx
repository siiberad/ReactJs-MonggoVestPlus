import React, { Component } from 'react';
import {
  Button,
  FormGroup,
  Form,
  Label,
  Input, Container
} from "reactstrap";
import axios from "axios";
import store from "store";
import "../assets/css/formstyle.css";
import AppLoginRegistState from './AppLoginRegistState';
import isLoggedIn from '../helpers/loggedIn';

axios.defaults.baseURL = 'https://mgvplus.herokuapp.com'
// axios.defaults.baseURL = 'http://localhost:8080'

export default class AppProfileEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "userId": '',
      "userFullName": '',
      "userEmail": '',
      "userPassword": '',
      "userBirthDate": '',
      "idCardType": '',
      "idCardNumber": '',
      "userAddress": '',
      "userProvince": '',
      "userContact": '',
      "userIncomeSource": '',
      "userIncome": '',
      "confirmationToken": '',
      "transactionModels": [],
      "password": '',
      "username": '',
      "authorities": '',
      "enabled": ''
    };

    this.state = {
      province: [],
      errors: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    // console.log(name, value);
    let data = {};
    data[name] = value;

    this.setState(data);
  }

  getUserProvince() {
    axios.get('/province')
      .then(response => {
        this.setState({ province: response.data })
        // console.log('data province', response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  getUserDetails() {
    let token = localStorage.getItem('JWT_TOKEN')
    let userId = localStorage.getItem('USER_ID')
    axios.get(`/user/${userId}`, { headers: { "Authorization": token } })
      .then(response => {
        this.setState(response.data)
        // console.log('data user', response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getUserProvince();
    this.getUserDetails();
  }

  submit(e) {
    let userId = localStorage.getItem('USER_ID')
    let token = localStorage.getItem('JWT_TOKEN')
    e.preventDefault();
    axios
      .put(`/user/${userId}`, {
        userId: this.state.userId,
        confirmationToken: this.state.confirmationToken,
        userFullName: this.state.userFullName,
        userEmail: this.state.userEmail,
        userPassword: this.state.userPassword,
        userBirthDate: this.state.userBirthDate,
        idCardType: this.state.idCardType,
        idCardNumber: this.state.idCardNumber,
        userAddress: this.state.userAddress,
        userProvince: this.state.userProvince,
        userContact: this.state.userContact,
        userIncomeSource: this.state.userIncomeSource,
        userIncome: this.state.userIncome,
        transactionModels: this.state.transactionModels,
        password: this.state.userPassword,
        username: this.state.userEmail,
        authorities: this.state.authorities,
        enabled: this.state.enabled
      }, { headers: { "Authorization": token } })
      .then(function (response) {
        // console.log(response);
        if (response.status === 200) {
          alert("Profil Anda telah berhasil disimpan");
          store.set('completedProfile', true);
          console.log('Profil sudah tersimpan', store.get('completedProfile'))
          this.props.history.push('/');
        } else {
          alert("some error ocurred", response.status);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    if (!isLoggedIn()) {
      return <AppLoginRegistState checkAuth={()=>{window.location.reload()}} modalLogin={true}/>
      // <Redirect to='/target' />
    }
    const { province, users } = this.state;
    return (
      <div>
        <Container className="margin-form">
          <h2 align='center'>Ubah Profil</h2>
          <Form onSubmit={this.submit}>
            <FormGroup>
              <Label>Nama Lengkap: </Label>
              <Input
                type="text"
                disabled={true}
                name="userFullName"
                value={this.state.userFullName}
                placeholder="Nama lengkap Anda"
                onChange={this.handleChange}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Email: </Label>
              <Input
                type="text"
                disabled={true}
                name="userEmail"
                value={this.state.userEmail}
                placeholder="Alamat email Anda"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Tanggal Lahir: </Label>
              <Input
                type="date"
                required="required"
                name="userBirthDate"
                value={this.state.userBirthDate}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Jenis Identitas:</Label>
              <Input
                type="select"
                name="idCardType"
                id="idCardType"
                value={this.state.idCardType}
                onChange={this.handleChange}
                required="required"
              >
                <option value="KTP">KTP</option>
                <option value="SIM">SIM</option>
                <option value="Paspor">Paspor</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Nomor Identitas: </Label>
              <Input
                type="text"
                name="idCardNumber"
                value={this.state.idCardNumber}
                placeholder="Masukkan Nomor KTP/SIM/Paspor"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Alamat (sesuai Kartu Identitas): </Label>
              <Input
                type="text"
                name="userAddress"
                value={this.state.userAddress}
                placeholder="Masukkan Alamat Sesuai Kartu Identitas Anda"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Provinsi:</Label>
              <Input
                type="select"
                name="userProvince"
                id="userProvince"
                value={this.state.userProvince}
                onChange={this.handleChange}
                required="required"
                placeholder="Pilih Provinsi dimana Anda tinggal"
              >
                {
                  this.state.province.map(province =>
                    <option key={province.provinceId}> {province.provinceName} </option>
                  )}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Telepon: </Label>
              <Input
                type="number"
                className="no-spinners"
                name="userContact"
                value={this.state.userContact}
                placeholder="081 123 123 123"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Sumber Penghasilan:</Label>
              <Input
                type="select"
                name="userIncomeSource"
                id="userIncomeSource"
                value={this.state.userIncomeSource}
                onChange={this.handleChange}
                required="required"
              >
                <option value="Gaji">Gaji</option>
                <option value="Hasil Usaha">Hasil Usaha</option>
                <option value="Tabungan">Tabungan</option>
                <option value="Warisan">Warisan</option>
                <option value="Lainnya">Lainnya</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Jumlah Penghasilan per Bulan:</Label>
              <Input
                type="number"
                step="500000" min="0" lang="id"
                name="userIncome"
                id="userIncome"
                value={this.state.userIncome}
                onChange={this.handleChange}
                required="required"
              >
              </Input>
            </FormGroup>

            <div align="center">
              <Button
                color="submit"
                className="btn btn-primary"
                value="Submit"
              >
                SIMPAN
                    </Button>{" "}
            </div>
          </Form>
        </Container>
      </div>
    );
  }
}
