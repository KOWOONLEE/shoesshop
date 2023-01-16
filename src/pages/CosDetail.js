import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { Context1 } from "../App";
import { addItem } from "../store";

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
  console.log(originId.id);

  useEffect(() => {
    let saveItem = localStorage.getItem("watched");
    saveItem = JSON.parse(saveItem);
    saveItem.push(originId.id);
    //중복제거하려면 set 자료형 사용
    saveItem = new Set(saveItem);
    // 다시 배열로 만들어줌
    saveItem = Array.from(saveItem);
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
      <div className="container">
        {event ? <StyledAlert>10초 이내 구매 시 할인</StyledAlert> : ""}
        <div className="row">
          {stock}
          <div className="col-md-6">
            <img
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

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setMenuTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setMenuTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setMenuTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
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
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][menuTab]}
    </div>
  );
}

export default CosDetail;

const StyledAlert = styled.div`
  background-color: yellow;
  text-align: center;
`;
