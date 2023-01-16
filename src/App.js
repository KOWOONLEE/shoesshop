import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Router, Routes, Route, Outlet } from "react-router-dom";
import Main from "./pages/Main";
import CosDetail from "./pages/CosDetail";
import cosData from "./component/CosData";
import Cart from "./pages/Cart";
import { Cosmetics } from "./pages/Cosmetics";

export const Context1 = createContext();

function App() {
  //이미 watched 항목이 있으면 setItem 하지 말아라

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
    if (localStorage.getItem("watched") == null) {
      localStorage.setItem("watched", JSON.stringify([]));
    } else if (localStorage.getItem("watched") != null) {
      console.log("초기화 방지");
    }
  }, []);

  const [cosmetic, setCosmetic] = useState(cosData);
  const [stock, setStock] = useState([10, 11, 12]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main cosmetic={cosmetic} setCosmetic={setCosmetic} />}
        />
        <Route
          path="/cosmetics"
          element={<Cosmetics cosmetic={cosmetic} setCosmetic={setCosmetic} />}
        />
        <Route path="*" element={<div>없는 페이지입니다.</div>} />

        {/* <Route path="/detail" element={<ShoesDetail shoes={shoes} />} /> */}
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ stock }}>
              <CosDetail cosmetic={cosmetic} />
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
