import { useState } from "react";
import axios from "axios";

function ShoesContainer({ shoes, setShoes }) {
  const getshoesData = () => {
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((result) => {
        const copy = [...shoes, ...result.data];
        setShoes(copy);
        console.log(shoes);
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

      <button onClick={getshoesData}>더보기</button>
    </div>
  );
}

export default ShoesContainer;
