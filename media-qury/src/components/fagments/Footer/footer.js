import React from "react";
import "./footer.css";

export default function footer() {
  return (
    <footer className="footer">
      <div className="main-content">
        <div className="left box">
          <h2>About us</h2>
          <div className="content">
            <p>
              อันดับ 10 แง่คิดในการทำงานจากนิยายฤทธิ์มีดสั้น
              บทความนี้เล่านิยายกำลังภายในที่โด่งดังที่สุดเรื่องหนึ่งของโกวเล้ง
              “ฤทธิ์มีดสั้น” ที่จอมยุทธแต่ละคนมีสโลแกนประจำตัวคล้าย personal
              branding และมีการจัดอันดับในตำราอาวุธ เหมือนการจัด ranking
              ไม่น่าแปลกใจที่มีผู้อ่านบทความนี้จำนวนมาก
              เพราะเป็นเรื่องของนิยายกำลังภายในที่คนส่วนใหญ่รู้จักดี
              แต่เขียนให้เข้ากับยุคสมัยใหม่ครับ
            </p>
            <div className="social">
              <a className="sociala" href="#">
                <span className="fab fa-facebook-f"></span>
              </a>
              <a className="sociala" href="#">
                <span className="fab fa-twitter"></span>
              </a>
              <a className="sociala" href="#">
                <span className="fab fa-instagram"></span>
              </a>
              <a className="sociala" href="#">
                <span className="fab fa-youtube"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="center box">
          <h2>Address</h2>
          <div className="content">
            <div className="place">
              <span className="fas fa-map-marker-alt"></span>
              <span className="text">
                อันดับ 10 แง่คิดในการทำงานจากนิยายฤทธิ์มีดสั้น
              </span>
            </div>
            <div className="phone">
              <span className="fas fa-phone-alt"></span>
              <span className="text">093-3613813</span>
            </div>

            <div className="email">
              <span className="fas fa-envelope"></span>
              <span className="text">Thechoicestory_official@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="right box">
          <h2>Contact us</h2>
        </div>
      </div>
      <div className="bottom">
        <center>
          <span className="credit">
            Created By <a href="#">The Choice official</a> |{" "}
          </span>
          <span className="far fa-copyright"></span>
          <span> 2020 All rights reserved.</span>
        </center>
      </div>
    </footer>
  );
}
