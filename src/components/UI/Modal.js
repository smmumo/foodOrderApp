import { Fragment } from 'react';
import classes from './Modal.module.css';

const Backdrops = props => {
  return <div className={classes.backdrop}></div>
}
const ModalOverLay = props => {
 return <div className={classes.modal}>
     <div className={classes.content}>{props.children}</div>
 </div>
}

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return <Fragment>
    {ReactDOM.createPortal(<Backdrops/>,portalElement)}
    {ReactDOM.createPortal( <ModalOverLay>{props.children}</ModalOverLay>,portalElement)}     
     
  </Fragment>
}
export default Modal;