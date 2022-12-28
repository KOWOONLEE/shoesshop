import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Router, Routes, Route, Outlet } from "react-router-dom";
import Main from "./pages/Main";
import ShoesDetail from "./pages/shoesDetail";
import ShoesData from "./component/shoesData";
import Cart from "./pages/Cart";

export const Context1 = createContext();

function App() {
  useEffect(() => {
    localStorage.getItem("watched", JSON.stringify([]));
  }, []);

  const [shoes, setShoes] = useState(ShoesData);
  const [stock, setStock] = useState([10, 11, 12]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main shoes={shoes} setShoes={setShoes} />} />
        <Route path="*" element={<div>없는 페이지입니다.</div>} />
        {/* <Route path="/detail" element={<ShoesDetail shoes={shoes} />} /> */}
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ stock }}>
              <ShoesDetail shoes={shoes} />
            </Context1.Provider>
          }
        />

        {/* nested Routes */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치임</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양말 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>} />
        </Route>
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function About() {
  return (
    <div>
      <h4> 회사정보임</h4>
      {/* nestd routes의 element 보여주는 곳은 <Outlet></Outlet> */}
      <Outlet></Outlet>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4> 오늘의 이벤트 </h4>
      <Outlet></Outlet>
    </div>
  );
}
