import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ShoesContainer from "../component/shoesContainer";
import { useNavigate, Link } from "react-router-dom";
import "./Main.scss";
import Footer from "../component/Footer";

function Main({ shoes, setShoes }) {
  const navigate = useNavigate();

  return (
    <>
      {/* <Navbar className={styles.navWrap}>
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
      </Navbar> */}
      <div className="mainWrap">
        <div className="navWrap">
          <ul className="navbar">
            <li className="title">
              <Link to="home" className="homeMenu">
                MY COSME
              </Link>
            </li>
            <li className="navMenu">
              <a className="detailMenu" href="/">
                제품 보기
              </a>
            </li>
            <li className="navMenu">
              <a className="detailMenu" href="/cart">
                Cart
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="main_bg"></div> */}
        {/* <div className="container">
          <ShoesContainer shoes={shoes} setShoes={setShoes} />
        </div> */}
        <div className="middlePage">
          <div className="middleMain">신제품 보기</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Main;
