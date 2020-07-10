import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/fagments/Footer/footer";
import Navbar from "./components/fagments/Navbar/Navbar";
import Cord from "./components/Contents/Corditem/Cord";
import Login from "./components/Contents/Login/Login";
import Search from "./components/Contents/Search/Search";
import Register from "./components/Contents/Login/Register";
import MainWight from './components/Contents/Wight/Mainwight'
import MiniStory from './components/Contents/Wight/Ministory'

export default function App() {
  
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

  //Login
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  //Register
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const openModal2 = () => {
    setIsOpen2(true);
    setIsOpen(false);
  };
  const closeModal2 = () => {
    setIsOpen2(false);
  };
  const openModal3 = () => {
    setIsOpen(true);
    setIsOpen2(false);
  };
  
  return (
    <div>
      <Router>
        <Navbar openModal={openModal} />
        <Login modalIsOpen={modalIsOpen} closeModal={closeModal} customStyles={customStyles} openModal2={openModal2} setIsOpen={setIsOpen}/>
        <Register modalIsOpen2={modalIsOpen2} closeModal2={closeModal2} customStyles={customStyles} openModal3={openModal3} setIsOpen2={setIsOpen2}/>
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route path="/mainwight" component={MainWight} />
          <Route path="/" component={Cord} />
        </Switch>
        <MiniStory/>
        <Footer />
      </Router>
    </div>
  );
}
