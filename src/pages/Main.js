import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import CosContainer from "../component/CosContainer";
import { useNavigate, Link } from "react-router-dom";
import "./Main.scss";
import Footer from "../component/Footer";
import { Nav } from "../component/Nav";

function Main({ cosmetic, setCosmetic }) {
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
        <Nav />
        <div className="middlePage">
          <div className="middleTitle">GIFT SET</div>
          <div className="middleMain">신제품 보기</div>
        </div>
      </div>
      {/* <div className="main_bg"></div> */}
      {/* <div className="container">
          <ShoesContainer shoes={shoes} setShoes={setShoes} />
        </div> */}

      <Footer />
    </>
  );
}
export default Main;
