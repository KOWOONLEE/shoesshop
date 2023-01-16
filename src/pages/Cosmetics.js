import styled from "styled-components";
import CosContainer from "../component/CosContainer";
import { Nav2 } from "../component/Nav2";

export const Cosmetics = ({ cosmetic, setCosmetic }) => {
  return (
    <StyledCosme>
      <Nav2 />
      {/* <div className="cosmeWrap">필터</div> */}
      <div className="cosmeContainer">
        <CosContainer cosmetic={cosmetic} setCosmetic={setCosmetic} />
      </div>
    </StyledCosme>
  );
};
const StyledCosme = styled.div`
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
  /* .cosmeWrap {
    position: absolute;
    top: 12%;
    width: 100%;
    height: 20vh;
    background-image: url("../img/main-leaf.jpg");
    background-size: cover;
    background-position: center;
    background-color: gray;
  } */
  .cosmeContainer {
    position: absolute;
    top: 10%;
  }
`;
