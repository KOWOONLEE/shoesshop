import { useState } from "react";
import ShoesData from "./shoesData";

function ShoesContainer() {
  const [shoes, setShoes] = useState(ShoesData);
  return (
    <div>
      <div className="row">
        {shoes.map((item) => (
          <div key={item.id} value={item.id} className="col-md-4">
            <img className="contentImg" src={item.imgUrl}></img>
            <h4>{item.title}</h4>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoesContainer;
