import React, { useState } from "react";
import "./search.css";
export default function Search() {
  return (
    <div className="search">
      <form action="#">
        <input
          type="search"
          className="search-data"
          placeholder="ค้นหา"
        ></input>
        <button className="fas fa-search" onClick="#"></button>
      </form>
      <div className="item-search">
        <ul className="item-text">
          <li>กำลังภายใน</li>
          <li>ไซไฟ</li>
          <li>สยองขวัญ</li>
          <li>แฟนตาซี</li>
          <li>ปริศนา</li>
          <li>โรแมนติก</li>
        </ul>
      </div>
      <p className="searcht">ค้นหา Choice Novel, Choice Toon, และชื่อนักเขียน ได้จาก "กล่องค้นหา" ด้านบน</p>
    </div>
  );
}
