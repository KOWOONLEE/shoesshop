import { useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeUser, changeAge, changeCount } from "./../store";

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

  const changeButton = () => {
    setUserId(user.shopCart.id);
    if (userId === user.shopCart.id) {
      dispatch(changeCount());
    }
  };

  return (
    <>
      {user.shopUser.name}의 장바구니 나이 : {user.shopUser.age}
      <button
        onClick={() => {
          dispatch(changeAge());
        }}
      >
        +
      </button>
      <Table>
        <thead>
          <tr>
            <th>번호</th>
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
                  onClick={() => {
                    changeButton();
                    // dispatch(changeCount());
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
    </>
  );
}

export default Cart;
