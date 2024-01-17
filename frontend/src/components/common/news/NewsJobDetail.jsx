import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import CustomButton from "../button/CustomButton";
import "./newDetail.css";
import commonAPI from "../../../api/commonApi";
import ApplyButton from "./applyButton";
import UploadCV from "../uploadCV/UploadCV";

const NewsJobDetail = ({ NewsID }) => {
  const [newsDetail, setNewsDetail] = useState([]);
  const [addShow, setAddShow] = useState(false);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        let response = await commonAPI.getNewsDetail(NewsID);
        console.log(response);
        setNewsDetail(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNewsDetail();
  }, []);

  return (
    <div>
      <Container>
        <Col md={{ span: 6, offset: 3 }}>
          <div className="wrap-news-detail">
            <div className="title-bs-news">
              <h4>{newsDetail.position}</h4>
              <div className="time-position-bs">
                Hạn nộp hồ sơ: {newsDetail.end_time}
              </div>
              <ApplyButton className="button-bs-news-2" />
            </div>
            <div className="content-bs-news">
              <h5>Chi tiết tin tuyển dụng</h5>
              <div className="describe-job-bs">
                <h6>Mô tả công việc</h6>
                <p>{newsDetail.describe}</p>
              </div>

              <div className="describe-job-bs">
                <h6>Yêu cầu ứng viên</h6>
                <p>{newsDetail.require}</p>
              </div>

              <div className="describe-job-bs">
                <h6>Quyền lợi</h6>
                <p>{newsDetail.profit}</p>
              </div>

              <div className="describe-job-bs">
                <h6>Địa điểm làm việc</h6>
                <p>{newsDetail.address}</p>
                <h6>Thời gian làm việc</h6>
                <p>{newsDetail.daily_time}</p>
                <h6>Cách ứng tuyển</h6>
                <p>
                  {
                    "Ứng viên nộp hồ sơ trực tuyến bằng cách bấm Ứng tuyển ngay dưới đây."
                  }
                </p>
              </div>
            </div>
            <div>
              <ApplyButton onClick={() => setAddShow(true)} />
              <UploadCV
                id={NewsID}
                show={addShow}
                onHide={() => setAddShow(false)}
              />
            </div>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default NewsJobDetail;
