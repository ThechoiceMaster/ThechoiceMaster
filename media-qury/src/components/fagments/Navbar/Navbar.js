import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a className="logoa" href="/">
          The Choice
        </a>
      </div>
      <label for="btn" className="icon">
        <span className="fa fa-bars"></span>
      </label>
      <input className="inc" type="checkbox" id="btn"></input>
      <ul className="ulbig">
        <div className="ulul">
          {/* menubar */}
          <li className="navulli">
            <label for="btn-1" className="show">
              คู่มือการใช้งาน +
            </label>
            <a href="#">คู่มือการใช้งาน</a>
            <input className="inc" type="checkbox" id="btn-1"></input>
            <ul className="navulul">
              <li>
                {/* menubarย่อย */}
                <a href="#">เว็บไซต์</a>
              </li>
              <li>
                <a href="#">ผลงาน</a>
              </li>
              <li>
                <a href="#">รายได้</a>
              </li>
            </ul>
          </li>
          <li className="navulli">
            <label for="btn-2" className="show">
              หมวดหมู่ +
            </label>
            <a href="#">หมวดหมู่</a>
            <input className="inc" type="checkbox" id="btn-2"></input>
            <ul>
              <li>
                <label for="btn-3" className="show">
                  Choice Novel +
                </label>
                <a href="#">
                  Choice Novel <span className="fa fa-plus"></span>
                </a>
                <input className="inc" type="checkbox" id="btn-3"></input>
                <ul>
                  <li>
                    <a href="#">ดราม่า</a>
                  </li>
                  <li>
                    <a href="#">สยองขวัญ</a>
                  </li>
                  <li>
                    <a href="#">แฟนตาซี</a>
                  </li>
                  <li>
                    <a href="#">กำลังภายใน</a>
                  </li>
                  <li>
                    <a href="#">ปริศนา</a>
                  </li>
                  <li>
                    <a href="#">โรแมนติก</a>
                  </li>
                </ul>
              </li>

              <li>
                <label for="btn-4" className="show">
                  Choice Toon +
                </label>
                <a href="#">
                  Choice Toon <span className="fa fa-plus"></span>
                </a>
                <input className="inc" type="checkbox" id="btn-4"></input>
                <ul>
                  <li>
                    <a href="#">ดราม่า</a>
                  </li>
                  <li>
                    <a href="#">สยองขวัญ</a>
                  </li>
                  <li>
                    <a href="#">แฟนตาซี</a>
                  </li>
                  <li>
                    <a href="#">กำลังภายใน</a>
                  </li>
                  <li>
                    <a href="#">ปริศนา</a>
                  </li>
                  <li>
                    <a href="#">โรแมนติก</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="navulli">
            <a href="/search">ค้นหา</a>
          </li>
          <li className="navulli">
            <a href="/mainwight">สำหรับนักเขียน</a>
          </li>
        </div>
        <div className="ulin">
          <li>
            <a href="#" onClick={props.openModal}><span className="fas fa-sign-in-alt"></span>
              เข้าสู่ระบบ
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default withRouter(Navbar);
