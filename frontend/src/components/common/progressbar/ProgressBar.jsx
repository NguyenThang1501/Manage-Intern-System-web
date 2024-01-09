import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

import "./progressbar.css";

const ProgressBar = (props) => {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 50);
    }
  }, [filled, isRunning]);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-0">
        <div>
          <div className="progressbar">
            <div
              style={{
                height: "100%",
                width: `${filled}%`,
                backgroundColor: "#FCD980",
                transition: "width 0.5s",
              }}
            ></div>
            <span className="progressPercent">{filled}%</span>
          </div>
          <button
            className="run-progress"
            onClick={() => {
              setIsRunning(true);
            }}
          >
            Run
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProgressBar;
