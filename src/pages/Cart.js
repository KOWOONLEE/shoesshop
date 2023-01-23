import { useState } from "react";
import styled from "styled-components";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeUser, changeAge, changeCount } from "./../store";
import { Nav2 } from "../component/Nav2";

function Cart() {
  const [userId, setUserId] = useState("");

  //store안에 있는 모든 state의미
  //const user = useSelector((state)=> {return state.shopUser})
  //이렇게도 가능
  //더 줄이기 가능
  //const user = useSelector((state)=> state.shopUser)
  //모든 걸 넣지 말기

  const user = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  // const cartId = user.shopCart.find((cart) => cart.id == userId);
  const changeButton = () => {
    setUserId(user.shopCart.id);
  };

  return (
    <StyledCart>
      <Nav2 />
      <div className="cartWrap">
        {/* {user.shopUser.name}의 장바구니 나이 : {user.shopUser.age}
        <button
          onClick={() => {
            dispatch(changeAge());
          }}
        >
          +
        </button> */}
        <div className="shoppingBag">
          <span>쇼핑백</span>
        </div>
        <div className="cartTable">
          <Table>
            <thead>
              <tr>
                <th>상품 번호</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
              </tr>
            </thead>
            <tbody>
              {user.shopCart.map((item, i) => (
                <tr value={item.id} key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.count}</td>
                  <td>
                    <button
                      className="addButton"
                      onClick={() => {
                        // dispatch(changeCount(i));
                        dispatch(changeCount(user.shopCart[i].id));
                        //상품 아이디를 payload로 전송해라
                      }}
                    >
                      +
                    </button>
                  </td>
                </tr>
              ))}
              {/* <tr>
            <td>1</td>
            <td>{user.shopCart[0].name}</td>
            <td>{user.shopCart[0].count}</td>
            <td>안녕</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{user.shopCart[1].name}</td>
            <td>{user.shopCart[1].count}</td>
            <td>안녕</td>
          </tr> */}
            </tbody>
          </Table>
        </div>
      </div>
    </StyledCart>
  );
}

export default Cart;

const StyledCart = styled.div`
  .cartWrap {
    display: inline;
    position: relative;
    top: 10vh;
  }
  .shoppingBag {
    width: 90%;
    margin: 30px auto;
    font-size: 1.2em;
    font-weight: bold;
  }
  .cartTable {
    width: 90%;
    text-align: center;
    margin: 30px auto;
  }
  .addButton {
    width: 30px;
    background-color: pink;
    border: none;
  }
`;
