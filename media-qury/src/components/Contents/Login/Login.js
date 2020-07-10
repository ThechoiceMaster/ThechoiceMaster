import React from "react";
import Modal from "react-modal";
import './login.css'



export default function Login(props) {

  

  
  return (
    <div>
      <Modal
        isOpen={props.modalIsOpen}
        style={props.customStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={false}
        onRequestClose={()=>props.setIsOpen(false)}
      >
          <div className="hbd">
              <div >
        <button onClick={props.closeModal} className="close" >X</button></div>
        <div className="text"> เข้าสู่ระบบ</div>
        <form className="form" action="#">
        <div className="field">
            <span className="fas fa-user"></span>
          <input className="modal" type="email" placeholder="Email" required/>
        </div>
        <div className="field">
            <span className="fas fa-lock"></span>
          <input className="modal" type="password" placeholder="password" required/>
        </div>
        <div className="forgot-pass"><a href="#">กู้คืนรหัสผ่าน ?</a></div>
        <button className="bin">ยืนยัน</button> <div className="sign-up-link">ไม่ได้เป็นสมาชิก ?<a onClick={props.openModal2}>สมัครสมาชิก</a></div>
        </form>
        </div>
      </Modal>
    </div>
  );
}
