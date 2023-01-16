import { Link } from "react-router-dom";
import styled from "styled-components";
export const Nav2 = () => {
  return (
    <>
      <StyledNav2>
        <div className="navWrap">
          <div className="navbar">
            <div className="logo">
              <span className="title">
                <Link to="/" className="homeMenu">
                  MY COSME
                </Link>
              </span>
            </div>
            <div className="middleMenu">
              <span className="leftMenu">
                <a className="detailMenu" href="/cosmetics">
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
            </div>
          </div>
        </div>
      </StyledNav2>
    </>
  );
};

const StyledNav2 = styled.div`
  .navWrap {
    position: fixed;
    width: 100vw;
    height: 10vh;
    top: 0;
    z-index: 999;
    /* background-color: white; */
  }
  .homeMenu {
    font-weight: bold;
    font-size: 2em;
    color: black;
    text-decoration: none;
  }
  .homeMenu:hover {
    color: black;
    text-decoration: none;
  }

  .navbar {
    display: flex;
    width: 95%;
    padding: 18px;
    text-transform: uppercase;
    list-style-type: none;
  }
  .title {
    margin-right: 30px;
  }
  .navMenu {
    margin-right: 30px;
  }

  .loiginMenu {
    position: relative;
    justify-content: right;
    right: 10px;
  }
  .detailMenu {
    color: black;
    text-decoration: none;
    margin-bottom: 20px;
    line-height: 3em;
  }
  .detailMenu:hover {
    color: black;
    text-decoration: underline;
  }
`;
