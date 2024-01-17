import React, { useRef, useState } from "react";
import "./upload.css";
import axios from "axios";
import { MdOutlineUploadFile } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import studentApi from "../../../api/studentApi";
import { useUser } from "../../../context/UserContext";
import { MdDone } from "react-icons/md";

const UploadCV = (props, { id }) => {
  const inputRef = useRef();

  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("select");
  const { userInfo } = useUser();

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  const clearFileInput = () => {
    inputRef.current.value = "";
    setSelectedFile(null);
    setProgress(0);
    setUploadStatus("select");
  };

  const handleUpload = async () => {
    if (uploadStatus === "done") {
      clearFileInput();
      return;
    }

    try {
      console.log(props);
      setUploadStatus("uploading");

      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await axios.post(
        `http://localhost:8000/apply-job/${props.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            token: `Bearer ${userInfo.accessToken}`,
          },
        },

        {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 1000) / progressEvent.total
            );
            setProgress(percentCompleted);
          },
        }
      );

      setUploadStatus("done");
      console.log(response);
    } catch (error) {
      setUploadStatus("select");
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-0 container w-auto mt-3 mb-3">
        <div className="wrap-upload">
          <input
            ref={inputRef}
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <div>
            <h5>Tải CV của bạn lên đây</h5>
          </div>

          {/* Button to trigger the file input dialog */}
          {!selectedFile && (
            <button className="file-btn" onClick={onChooseFile}>
              <MdOutlineUploadFile /> Upload File
            </button>
          )}

          {selectedFile && (
            <>
              <div className="file-card">
                <FaRegFileAlt />
                <div className="file-info">
                  <div style={{ flex: 1 }}>
                    <h6>{selectedFile?.name}</h6>

                    <div className="progress-bg">
                      <div
                        className="progress"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {uploadStatus === "select" ? (
                    <button onClick={clearFileInput}>
                      <IoClose />
                    </button>
                  ) : (
                    <div className="check-circle">
                      {uploadStatus === "uploading" ? (
                        `${progress}%`
                      ) : uploadStatus === "done" ? (
                        <span style={{ fontSize: "20px" }}>
                          <MdDone />
                        </span>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
              <button className="upload-btn" onClick={() => handleUpload()}>
                {uploadStatus === "select" || uploadStatus === "uploading"
                  ? "Upload"
                  : "Done"}
              </button>
            </>
          )}
        </div>
        <div>
          <p>
            *Lưu ý: Bạn chỉ được nộp CV một lần duy nhất,
            <br />
            hãy xem xét kỹ trước khi nộp
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default UploadCV;
