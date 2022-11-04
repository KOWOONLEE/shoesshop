import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function ShoesDetail({ shoes }) {
  const [event, setEvent] = useState(true);
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
    </>
  );
}

export default ShoesDetail;

const StyledAlert = styled.div`
  background-color: yellow;
  text-align: center;
`;
