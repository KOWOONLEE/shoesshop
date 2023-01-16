import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CosContainer({ cosmetic, setCosmetic }) {
  const [count, setCount] = useState(2);
  console.log(cosmetic);

  const navigate = useNavigate();

  const getshoesData = () => {
    //로딩중 띄우기
    axios
      // .get(`https://codingapple1.github.io/shop/data${count}.json`)
      .get(
        `https://raw.githubusercontent.com/KOWOONLEE/shoesshop/main/public/data/item${count}.json`
      )
      .then((result) => {
        console.log(result.data);
        //목표는 array 안에 데이터 추가하는 것 [{},{},{},{},{},{}] 이런식으로 (concat을 써도 됨)
        //아래와 같이 복사본 만들기
        const copy = [...cosmetic, ...result.data];
        setCosmetic(copy);
        setCount(count + 1);

        //로딩중 숨기기
      })
      .catch(() => {
        if (count >= 4) {
          alert("상품이 더이상 없습니다.");
        }
        console.log("통신 실패");
        //로딩중 숨기기 (실패해도 로딩중 숨겨야함)
      });

    // Promise.all([axios.get('/url1'), axios.get('url2')])
    // .then(()=>{
    //   결과
    // })
    //원래 서버와 문자만 주고받을 수 있음, 따옴표 쳐 놓으면 array, object도 주고받기 가능 일명 json 데이터
    //fetch 사용시에는 json을 array, object 변환해주는 과정 필요 axios는 필요 없음.
    //  fetch('url')
    //  .then((result)=>result.json())
    //  .then(data=>{})
  };

  //버튼 누른 횟수 저장해서 data3,4 이런식으로 데이터 변경되어 더보기 클릭시 데이터 추가 만들기
  //버튼 세번 누르면 더 이상 상품 없다고 안내문 띄우기
  //버튼 누른 직후엔 로딩중 띄우기

  return (
    <StyledContainer>
      <div>
        <div className="row">
          {cosmetic.map((item) => (
            <div
              onClick={() => {
                navigate(`/detail/${item.id}`);
              }}
              key={item.id}
              value={item.id}
              className="col-md-4"
            >
              <img
                className="contentImg"
                alt="shoesImg"
                // src={`https://codingapple1.github.io/shop/shoes${
                //   item.id + 1
                // }.jpg`}
                src={item.imgUrl}
              />
              <h4 className="cosName">{item.content}</h4>
              <p className="cosPrice">{item.price}</p>
            </div>
          ))}
        </div>

        <button className="moreButton" onClick={getshoesData}>
          more...
        </button>
      </div>
    </StyledContainer>
  );
}

export default CosContainer;

const StyledContainer = styled.div`
  text-align: center;

  .moreButton {
    width: 65px;
    background-color: white;
    border: 1px solid gray;
  }
  .cosName {
    font-size: 1em;
    font-weight: bold;
    margin-top: 10px;
  }
  .cosPrice {
    font-size: 0.9em;
  }
`;
