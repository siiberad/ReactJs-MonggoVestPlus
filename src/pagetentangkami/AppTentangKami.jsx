import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';
import '../assets/scss/_tentangkamistyle.scss';

const AppTentangKami = (props) => {
  return (
    <div className="div-tentangkami">
      <h1>Tentang Kami</h1>
    {/* <Container className="container-header-tentang">
    <hr/>
    <Row className = "row-card">
    <Col sm="2" className="box-tentang">
      <Card className="cardbox">
        <CardImg className="bg-card" src="https://cdn-images-1.medium.com/max/1200/1*y03gw83Wj4BYk_sD75gNEA.png" alt="Card image cap" />
          <CardTitle>Teddy</CardTitle>
      </Card>
      </Col>
      <Col sm="2" className="box-tentang">
      <Card className="cardbox">
        <CardImg className="bg-card" src="https://cdn-images-1.medium.com/max/1200/1*y03gw83Wj4BYk_sD75gNEA.png" alt="Card image cap" />
          <CardTitle>Reza</CardTitle>
      </Card>
      </Col>
      <Col sm="2" className="box-tentang">
      <Card className="cardbox">
        <CardImg className="bg-card" src="https://cdn-images-1.medium.com/max/1200/1*y03gw83Wj4BYk_sD75gNEA.png" alt="Card image cap" />
          <CardTitle>Dinda</CardTitle>
      </Card>
      </Col>
      <Col sm="2" className="box-tentang">
      <Card className="cardbox">
        <CardImg className="bg-card" src="https://cdn-images-1.medium.com/max/1200/1*y03gw83Wj4BYk_sD75gNEA.png" alt="Card image cap" />
          <CardTitle>Dita</CardTitle>
      </Card>
      </Col>
      <Col sm="2" className="box-tentang">
      <Card className="cardbox">
        <CardImg className="bg-card" src="https://cdn-images-1.medium.com/max/1200/1*y03gw83Wj4BYk_sD75gNEA.png" alt="Card image cap" />
          <CardTitle>Satria</CardTitle>
      </Card>
      </Col>
      </Row>
      </Container> */}
      <Container className="text-detail">
      <hr></hr>
        <p>
          Indonesia adalah negara yang mempunyai keberagaman yang luar biasa. Diversitas penduduk yang terbesar di seluruh penjuru, membuat kita seakan lupa betapa besarnya negara ini. 
          Satu hal yang menarik bahwa persebaran penduduk di perkotaan dan pedesaan hampir serupa. Hal ini menandakan bahwa klasifikasi tempat tinggal masyarakat bukan menjadi hal yang utama. 
          Jika kita berbicara tentang peternakan, pada hakikatnya swasembada lah yang kita harapkan. Perbandingan permintaan dan penawaran daging yang bernilai 1:3 (BPS, 2017), membuat pemerintah 
          harus berlomba mencari daging sapi yang murah ke negeri-negeri tetangga. Memang ego dan preferensi sektor perkotaan maupun pedesaan, sedari dulu hanya membuat masalah baru yang berlarut saja. 
          Seakan saling menyalahkan tanpa menggali solusi dari potensi yang ada.
        </p>
        <p>
          Seringkali permasalahan yang ditemui oleh setiap peternak adalah tingginya production cost. Oleh karena masalah biaya, peternak sering melupakan sektor peternakan dan tidak memahami potensinya. 
          Tindakan harus diambil, sebuah platform yang menghubungkan peternak dan penyedia modal adalah solusi yang kami tawarkan.
        </p>
        <p>
          Monggovest hadir sebagai medium kolaborasi untuk satu visi yang sama. Kami percaya bahwa kesempatan untuk berkontribusi kepada bangsa adalah milik semua orang. Kami bertekad untuk memberi kesepatan 
          yang sama kepada setiap individu. Dengan satu tujuan, eskalasi produksi peternakan.
        </p>
      </Container>
      </div>
  );
};

export default AppTentangKami;