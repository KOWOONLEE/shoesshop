import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  //store안에 있는 모든 state의미
  //const user = useSelector((state)=> {return state.shopUser})
  //이렇게도 가능
  //더 줄이기 가능
  //const user = useSelector((state)=> state.shopUser)
  //모든 걸 넣지 말기

  const user = useSelector((state) => {
    return state;
  });

  return (
    <>
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
              <td>{item.i}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
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
