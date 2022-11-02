import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ShoesContainer from "../component/shoesContainer";
import { useNavigate, Link } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">신발한짝</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("./detail");
              }}
            >
              상세페이지
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main_bg"></div>
      <div className="container">
        <ShoesContainer />
      </div>
    </>
  );
}
export default Main;
