import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ShoesContainer from "../component/shoesContainer";
import { useNavigate, Link } from "react-router-dom";

function Main({ shoes, setShoes }) {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">MY COSME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/cart">CART</Nav.Link>
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
        <ShoesContainer shoes={shoes} setShoes={setShoes} />
      </div>
    </>
  );
}
export default Main;
