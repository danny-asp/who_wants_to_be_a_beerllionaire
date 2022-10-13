import React from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <React.Fragment>
      {props.currentStep !== 16 && <div className={classes.backdrop} onClick={props.onClose}></div>}
      {props.currentStep === 16 && <div className={classes.backdrop} onClick={props.onNewGame}></div>}
    </React.Fragment>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} currentStep={props.currentStep} onNewGame={props.onNewGame} />,
        portalElement
      )}
      {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </React.Fragment>
  );
};

export default Modal;
