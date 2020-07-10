import React,{ useState } from 'react'
import Modal from "react-modal";
import { Visibility, VisibilityOff } from "@material-ui/icons";
export default function Register(props) {

const [showPass, setShowPass] = useState(false);

  const handleClickShowPassword = () => {
    setTimeout(() => {
        setShowPass(false);
    }, 3000);  
    setShowPass(true);
  };

  
    return (
        <div>
            <Modal
        isOpen={props.modalIsOpen2}
        style={props.customStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={false}
        onRequestClose={()=>props.setIsOpen2(false)}
      >
          <div className="hbd">
              <div >
        <button onClick={props.closeModal2} className="close" >X</button></div>
        <div className="text"> สมัครสมาชิก</div>
        <form className="form" action="#">
        <div className="field">
            <span className="fas fa-user"></span>
          <input className="modal" type="email" placeholder="Email" required/>
        </div>
        <div className="field">
            <span className="fas fa-lock"></span>
          <input className="modal" type={showPass ? "text" : "password"}  placeholder="password" required/>
          <span className="eye" onClick={handleClickShowPassword}>{showPass ? <Visibility /> : <VisibilityOff />}</span>
        </div>
        <div className="forgot-pass">กดปุ่ม "ยืนยัน" เป็นการยอมรับ<a href="#">ข้อตกลงในการใช้งาน</a></div>
        <button className="bin">ยืนยัน</button> <div className="sign-up-link">มีบัญชีแล้ว ?<a onClick={props.openModal3}>เข้าสู่ระบบ</a></div>
        </form>
        </div>
      </Modal>
        </div>
    )
}
