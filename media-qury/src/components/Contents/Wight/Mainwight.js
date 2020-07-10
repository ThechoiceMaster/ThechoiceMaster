import React from "react";
import "./Wight.css";
import { withRouter } from "react-router-dom";
import Modal from "react-modal";

//WightModal

 const MainWight  = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#131419",
    },
  };


  const [modalIsOpen4, setIsOpen4] = React.useState(false);

  const openModal4 = () => {
    setIsOpen4(true);
  };
  const closeModal4 = () => {
    setIsOpen4(false);
  };
  return (
    <div className="grid-container">
      <div className="grid-item1">
        <p className="paragraph">ผลงาน</p>
      </div>
      <div className="grid-item2">
        <button className="buttonmenu" autoFocus >Choice Navel</button>
        <button className="buttonmenu">Choice Toon</button>
      </div>
      <div className="grid-item3">
      <button onClick={openModal4} className="icon1"><span className="fas fa-plus"></span></button>
        <button className="icon2"><span className="far fa-question-circle"></span></button>
        <button onClick={openModal4} className="buttonmain2"><span className="fas fa-plus"></span> สร้าง</button>
        <button className="buttonmain3"><span className="far fa-question-circle"></span> วิธีการอัพโหลด</button>
      </div>
      <Modal
        isOpen={modalIsOpen4}
        style={customStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={false}
        onRequestClose={()=>setIsOpen4(false)}
      >
           <div className="hbd1">
           <div>
        <button onClick={closeModal4} className="close2" >X</button></div>
        <div className="text2"> เลือกประเภท</div>
        <div className="divrow">
        <div className="boxbro"><span className="fas fa-language"></span><p>Choice Novel</p></div>
        <div className="boxbro"><span className="far fa-image"></span><p>Choice Toon</p></div>
        </div>
           </div>
      </Modal>
    </div>
  );
}

export default withRouter(MainWight)