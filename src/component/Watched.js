import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Watched({ cosmetic }) {
  const [lookItems, setLookItems] = useState(null);
  const [myLook, setMyLook] = useState("");

  let saveItem = JSON.parse(localStorage.getItem("watched"));
  //여기서 saveItem 은 배열임
  //saveItem배열에서 특정값 찾기
  useEffect(() => {
    if (saveItem === "null") {
      localStorage.setItem("watched", JSON.stringify([])); // 문자열로 전환하여 저장.
    }
    setMyLook(localStorage.getItem("watched"));
  }, [myLook]);
  // saveItem===cosmetic.id일때 그 데이터를 가져와야함.
  // 그런데 지금 cosmetic에 담기는게 사이드렌더링처럼 3개씩 가져옴. 그럼 데이터를 전부 가져와서 비교를 한번 해줘야할 것 같은데

  return (
    <StyledWatched>
      <div className="watchedWrap">
        <div className="watchedTitle">
          <h4>최근 본 상품</h4>
        </div>
        {myLook !== null
          ? saveItem.map((item) => {
              return (
                <div key={item.id} className="watchedDetail">
                  <p className="watchedTitle">{item.content}</p>
                  <img
                    className="watchedImg"
                    src={item.imgUrl}
                    alt="watchedImg"
                  />
                </div>
              );
            })
          : null}
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
  background-color: white;
  overflow: auto;

  .watchedTitle {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .watchedTitle {
    text-align: center;
  }
  .watchedImg {
    width: 100%;
    height: 100px;
  }
`;
