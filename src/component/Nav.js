import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = () => {
  return (
    <>
      <StyledNav />
      <div className="navWrap">
        <div className="navbar">
          <div className="logo">
            <span className="title">
              <Link to="home" className="homeMenu">
                MY COSME
              </Link>
            </span>
          </div>
          <div className="middleMenu">
            <span className="leftMenu">
              <a className="detailMenu" href="/">
                제품 보기
              </a>
            </span>
          </div>
          <div>
            <span className="rightMenu">
              <a className="detailMenu" href="/cart">
                Cart
              </a>
            </span>
            <span className="rightMenu">
              <a className="detailMenu" href="/login">
                Login
              </a>
            </span>
          </div>
        </div>
      </div>
      <StyledNav />
    </>
  );
};

const StyledNav = styled.div`
  /* display: flex;
  z-index: 999;
  text-decoration: none;

  .navWrap {
    width: 100vw;
    justify-content: space-between;
  }
  .homeMenu {
    font-weight: bold;
    font-size: 2em;
    color: white;
    text-decoration: none;
  }
  .homeMenu:hover {
    color: white;
    text-decoration: none;
  }

  .navbar {
    display: flex;
    width: 100vw;
    padding: 18px;
    text-transform: uppercase;
  }
  .middleMenu {
    display: flex;
  }
  .leftMenu {
    display: flex;
  }
  .title {
    margin-right: 30px;
  }
  .navMenu {
    margin-right: 30px;
  }
  .loginMenu {
    display: flex;

    margin-left: 80%;
  } */
`;
