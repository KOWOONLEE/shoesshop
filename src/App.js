import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import ShoesContainer from "./component/shoesContainer";

function App() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">신발한짝</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* 이미지 map 돌려서 넣기 */}
      <div className="main_bg"></div>
      <div className="container">
        <div className="row">
          <ShoesContainer></ShoesContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
