import React, { Component } from 'react';
import {
  Button,
  FormGroup,
  Form,
  Label,
  Input, Container
} from "reactstrap";
import axios from "axios";
import "../assets/css/formstyle.css";

export default class AppProfileEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "userFullName": "",
      "userEmail": "",
      "userBirthDate": "",
      "idCardType": "",
      "idCardNumber": "",
      "userAddress": "",
      "userProvince": "",
      "userContact": "",
      "userIncomeSource": "",
      "userIncome": "",
    };

    this.state = {
      province: [],
      users: [],
      errors: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChangeProvince(selectedOption) {
    this.setState({ selectedOption });
  }

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    console.log(name, value);
    let data = {};
    data[name] = value;

    this.setState(data);
  }

  getUserProvince() {
    axios.get('https://mgvplus.herokuapp.com/province')
      .then(response => {
        this.setState({ province: response.data })
        console.log('data province', response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  getUserDetails() {
    axios.get('https://mgvplus.herokuapp.com/user/{userId}')
      .then(response => {
        this.setState({ users: response.data })
        console.log('data user', response.data)
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
    e.preventDefault();
    axios
      .put(`http://mgvplus.herokuapp.com/user/{userId}`, {
        userFullName: this.state.userFullName,
        userEmail: this.state.userEmail,
        userBirthDate: this.state.userBirthDate,
        idCardType: this.state.idCardType,
        idCardNumber: this.state.idCardNumber,
        userAddress: this.state.userAddress,
        userProvince: this.state.userProvince,
        userContact: this.state.userContact,
        userIncomeSource: this.state.userIncomeSource,
        userIncome: this.state.userIncome,
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 201) {
          alert("Akun Anda telah berhasil dibuat");
        } else {
          alert("some error ocurred", response.status);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { province } = this.state;
    return (
      <div>
        <Container className="margin-form">
          <Form onSubmit={this.submit}>
            <FormGroup>
              <Label>Nama Lengkap: </Label>
              <Input
                type="text"
                disabled="true"
                name="userFullName"
                value={this.state.userFullName}
                placeholder="Nama lengkap Anda"
                onChange={this.handleChange}
              />{
                this.state.users.map(users =>
                  <div key={users.userId}> {users.userFullName} </div>
                )}
            </FormGroup>
            <FormGroup>
              <Label>Email: </Label>
              <Input
                type="text"
                disabled="true"
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
                type="number"
                className="no-spinners"
                name="idCardNumber"
                value={this.state.idCardNumber}
                placeholder="357xxxxxxxxxxxx"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Alamat (sesuai KTP): </Label>
              <Input
                type="text"
                name="userAddress"
                value={this.state.userAddress}
                placeholder="Nama Jalan, Kelurahan, Kecamatan, Kota/Kabupaten, Kodepos"
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
                type="select"
                name="userIncome"
                id="userIncome"
                value={this.state.userIncome}
                onChange={this.handleChange}
                required="required"
              >
                <option>Di Bawah Rp 5.000.000</option>
                <option>Rp 5.000.000 — Rp 9.999.999</option>
                <option>Rp 10.000.000 — Rp 19.999.999</option>
                <option>Rp 20.000.000 — Rp 29.999.999</option>
                <option>Rp 30.000.000 — Rp 39.999.999</option>
                <option>Rp 40.000.000 — Rp 49.999.999</option>
                <option>Rp 50.000.000 — Ke Atas </option>

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
