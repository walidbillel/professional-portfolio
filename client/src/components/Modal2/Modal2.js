
import React from "react";

import "./Modal2.css";

const Modal2 = ({ handleClose2, show2, children }) => {
    const showHideClassName2 =  show2 ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName2}>
        <section className="modal-main2">
          {children}
          <br></br>
          <button className="btn btn-danger modal-btn" onClick={handleClose2}>close</button>
        </section>
      </div>
    );
  };

  export default Modal2;

