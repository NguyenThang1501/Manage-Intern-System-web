import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/esm/Modal";
function AlertRun(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="p-0">
          <Alert variant="success">
            <Alert.Heading>Thông báo</Alert.Heading>
            <p>Hệ thống đã thực hiện phân công thực tập cho sinh viên</p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button
                onClick={() => {
                  props.onHide();
                }}
                variant="outline-success"
              >
                Đóng
              </Button>
            </div>
          </Alert>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AlertRun;
