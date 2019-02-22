import React from 'react';
import { ListGroup, ListGroupItem, Container, Row, Col } from 'reactstrap';
import '../assets/css/bantuanstyle.css';

const AppBantuan = (props) => {
  return (
      <Container className="text-bantuan">
      <h2 className="text-header-container">
          Ini adalah page bantuan
      </h2>
        <hr></hr>
        <ListGroup>
            <ListGroupItem>
                <h4>Bantuan 1 :</h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nesciunt odio aspernatur autem et aliquam ullam asperiores accusantium qui, unde maiores ea! Tempora commodi autem iste odit dolorem ut deserunt.
                </p>
            </ListGroupItem>
            <ListGroupItem>
                <h4>Bantuan 2 :</h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nesciunt odio aspernatur autem et aliquam ullam asperiores accusantium qui, unde maiores ea! Tempora commodi autem iste odit dolorem ut deserunt.
                </p>
            </ListGroupItem>
            <ListGroupItem>
                <h4>Bantuan 3 :</h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nesciunt odio aspernatur autem et aliquam ullam asperiores accusantium qui, unde maiores ea! Tempora commodi autem iste odit dolorem ut deserunt.
                </p>
            </ListGroupItem>
            <ListGroupItem>
                <h4>Bantuan 4 :</h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nesciunt odio aspernatur autem et aliquam ullam asperiores accusantium qui, unde maiores ea! Tempora commodi autem iste odit dolorem ut deserunt.
                </p>
            </ListGroupItem>
        </ListGroup>
      </Container>
    );
  }

export default AppBantuan;