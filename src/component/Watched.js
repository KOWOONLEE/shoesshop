import { useParams } from "react-router-dom";
import styled from "styled-components";

function Watched() {
  const { id } = useParams();

  return (
    <StyledWatched>
      <div className="watchedWrap">
        <div className="watchedTitle">
          <h4>최근 본 상품</h4>
        </div>
        <div className="watchedDetail"></div>
      </div>
    </StyledWatched>
  );
}
export default Watched;

const StyledWatched = styled.div`
  border: 1px solid grey;
  position: fixed;
  width: 15vw;
  height: 40vh;
  bottom: 0;
  right: 0;
  margin: 10px;

  .watchedTitle {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
`;
