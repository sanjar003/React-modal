import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};
const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
  
};
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalHandler = () => {
    setTimeout(() => {
      setIsOpen((prev) => !prev);
    }, 100);
  };

  return (
    <>
      <div className="container" style={BUTTON_WRAPPER_STYLES}>
        <button className="button" onClick={modalHandler}>Open Modal</button>
        {isOpen && <Modal onClose={modalHandler}>очистить</Modal>}

      </div>
      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </>
  );
};
export default App;
