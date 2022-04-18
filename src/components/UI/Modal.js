import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import React, { Fragment } from 'react'
import reactDom from "react-dom";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
const ModalOveraly = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays')
const Modal = (props) => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}></Backdrop>,portalElement)}
        {reactDom.createPortal(<ModalOveraly>{props.children}</ModalOveraly>, portalElement)}
    </Fragment>
};

export default Modal;
