import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { Context1 } from "../App";
import { addItem } from "../store";
import { Nav2 } from "../component/Nav2";

function CosDetail({ cosmetic }) {
  const { stock } = useContext(Context1);
  const navigate = useNavigate();

  const user = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const [event, setEvent] = useState(true);
  const [menuTab, setMenuTab] = useState(0);
  const [thisItem, setThisItem] = useState([]);
  const { id } = useParams();

  const originId = cosmetic.find((cos) => cos.id == id);

  useEffect(() => {
    let saveItem = localStorage.getItem("watched");
    saveItem = JSON.parse(saveItem);
    saveItem.push(originId);
    saveItem = [...new Set(saveItem.map(JSON.stringify))].map(JSON.parse); //중복 제거
    saveItem = Array.from(saveItem); //다시 배열로 만들어줌
    localStorage.setItem("watched", JSON.stringify(saveItem));
  }, []);

  useEffect(() => {
    const eventPopup = setTimeout(() => {
      setEvent(false);
      return () => {
        clearTimeout(eventPopup);
      };
    }, 10000);
  }, []);

  const addCart = () => {
    navigate("/cart");
    dispatch(
      addItem({
        id: originId.id,
        name: originId.title,
        count: 1,
      })
    );
  };

  return (
    <>
      <StyledDetail>
        <Nav2 />
        <div className="container">
          {event ? (
            <div className="saleAlert">
              10초 이내 구매 시 할인 (이 메세지는 10초 후 사라집니다)
            </div>
          ) : (
            ""
          )}
          <div className="detailWrap">
            <div className="row">
              {/* {stock} */}
              <div className="col-md-6">
                <img
                  className="detailImg"
                  alt="shoesImg"
                  // src={`https://codingapple1.github.io/shop/shoes${
                  //   originId.id + 1
                  // }.jpg`}
                  src={originId.imgUrl}
                  width="100%"
                />
              </div>
              <div className="col-md-6 mt-4">
                <h4 className="pt-5">{originId.title}</h4>
                <p>{originId.content}</p>
                <p>{originId.price}</p>
                <button className="btn btn-danger" onClick={addCart}>
                  주문하기
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="detailNavtap">
          <Nav variant="tabs" defaultActiveKey="link0">
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setMenuTab(0);
                }}
                eventKey="link0"
              >
                제품세부정보
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setMenuTab(1);
                }}
                eventKey="link1"
              >
                배송 & 반품
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setMenuTab(2);
                }}
                eventKey="link2"
              >
                온라인 혜택
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        {/* {
        menuTab == 0 ?<div>내용0</div> : null
      }
      {
        menuTab == 1 ?<div>내용1</div> : null
      }
      {
        menuTab == 2 ?<div>내용2</div> : null
      } */}
        <TabContent menuTab={menuTab} />
      </StyledDetail>
    </>
  );
}

function TabContent({ menuTab }) {
  const [fade, setFade] = useState("");

  // useEffect 사용하여 탭이 변경될때마다 코드 실행 (end를 뗐다가 붙였다가)되도록 만듬
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [menuTab]);

  return (
    <StyledTap>
      <div className={`start ${fade}`}>
        {
          [
            <div>제품세부정보</div>,
            <div>배송 & 반품</div>,
            <div>온라인 혜택</div>,
          ][menuTab]
        }
      </div>
    </StyledTap>
  );
}

export default CosDetail;

const StyledDetail = styled.div`
  .saleAlert {
    height: 30px;
    background-color: black;
    text-align: center;
    vertical-align: center;
    color: white;
  }
  .row {
    margin-top: 10vh;
    align-items: center;
  }
  .detailWrap {
    align-items: center;
  }
  .detailImg {
    width: 40vw;
  }
  .btn-danger {
    background-color: white;
    color: black;
    border: 1px solid gray;
    border-radius: 0;
    margin-top: 20px;
  }
  .detailNavtap {
    width: 90vw;
    text-align: center;
    margin: 30px auto;
  }
`;
const StyledTap = styled.div`
  width: 90vw;
  /* text-align: center; */
  margin: 30px auto;
`;
