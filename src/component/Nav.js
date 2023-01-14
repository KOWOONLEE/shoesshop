import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
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
    </>
  );
};
