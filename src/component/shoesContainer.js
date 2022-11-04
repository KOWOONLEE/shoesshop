import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";

function ShoesContainer({ shoes }) {
  const [addShoes, setAddShoes] = useState([]);
  const getshoesData = () => {
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((result) => {
        setAddShoes(result.data);
        // const copy = [...shoes, ...result.data]
        // setShoes(copy)
      })
      .catch(() => {
        console.log("통신 실패");
      });
  };

  return (
    <div>
      <div className="row">
        {shoes.map((item) => (
          <div key={item.id} value={item.id} className="col-md-4">
            <img
              className="contentImg"
              src={`https://codingapple1.github.io/shop/shoes${
                item.id + 1
              }.jpg`}
            />
            <h4>{item.title}</h4>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <div className="row">
        {addShoes.map((item) => (
          <div key={item.id} value={item.id} className="col-md-4">
            <img
              className="contentImg"
              src={`https://codingapple1.github.io/shop/shoes${
                item.id + 1
              }.jpg`}
            />
            <h4>{item.title}</h4>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <button onClick={getshoesData}>버튼</button>
    </div>
  );
}

export default ShoesContainer;
