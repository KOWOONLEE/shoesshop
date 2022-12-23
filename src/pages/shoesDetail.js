import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import {Context1} from './../App.js'

function ShoesDetail({ shoes }) {

  const {stock}= useContext(Context1)

  const [event, setEvent] = useState(true);
  const [menuTab, setMenuTab] = useState(0);
  const { id } = useParams();

  const originId = shoes.find((shoe) => shoe.id == id);

  useEffect(() => {
    const eventPopup = setTimeout(() => {
      setEvent(false);
      return () => {
        clearTimeout(eventPopup);
      };
    }, 10000);
  }, []);

  return (
    <>
      <div className="container">
        {event ? <StyledAlert>10초 이내 구매 시 할인</StyledAlert> : ""}
        <div className="row">
          {stock}
          <div className="col-md-6">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
            />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{originId.title}</h4>
            <p>{originId.content}</p>
            <p>{originId.price}</p>
            <button className="btn btn-danger">주문하기</button>
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
    setTimeout(() => {setFade("end")}, 100);
    return () => {setFade("")};
  }, [menuTab]);

  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][menuTab]}
    </div>
  );
}

export default ShoesDetail;

const StyledAlert = styled.div`
  background-color: yellow;
  text-align: center;
`;
