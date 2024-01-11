import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import CustomButton from "../button/CustomButton";
import "./newDetail.css";
import commonAPI from "../../../api/commonApi";
import ApplyButton from "./applyButton";


const NewsJobDetail = ({ NewsID }) => {
  const [newsDetail, setNewsDetail] = useState([]);

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

  const news = {
    TenViTri: "Thực tập sinh Reactjs/Nodejs",
    Han: "15/01/2024",
    MoTa: "Tham gia đào tạo bài bản về lập trình ReactJS/NodeJS Đảm nhiệm vị trí lập trình viên, tham gia vào các dự án về lĩnh vực ngân hàng- tài chính, tài chính công, phần mềm doanh nghiệp,... Hỗ trợ các thành viên trong nhóm hoàn thành công việc trong dự án Công việc sẽ được trao đổi cụ thể hơn trong quá trình phỏng vấn.",
    YeuCau: "La sinh viên năm 3,4. Biết SQL. Đọc hiểu tiếng Anh",
    QuyenLoi:
      "• Được định hướng chuyên môn sớm, được đào tạo kỹ năng, nghiệp vụ bởi các kỹ sư, chuyên gia giàu kinh nghiệm và thực hành trực tiếp trong các dự án lớn, ra trường có thể làm được việc ngay;• Được trải nghiệm môi trường văn hóa FPT trẻ trung, năng động, hiện đại và văn hóa doanh nghiệp giàu bản sắc;• Được xem xét hỗ trợ lương sau một thời gian thực tập;• Được ưu tiên tuyển dụng khi ra trường.",
    DiaDiem: "- Hà Nội: Tòa Landmark 72, Keangnam Phạm Hùng, Nam Từ Liêm",
    ThoiGianLam: "Thứ 2 - Thứ 6 (từ 08:30 đến 17:30)",
    CachUngTuyen:
      "Ứng viên nộp hồ sơ trực tuyến bằng cách bấm Ứng tuyển ngay dưới đây.",
  };

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
              {/* <button className="button-bs-news">Ứng tuyển ngay</button> */}
              <ApplyButton />
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
                <p>{news.ThoiGianLam}</p>
                <h6>Cách ứng tuyển</h6>
                <p>
                  {
                    "Ứng viên nộp hồ sơ trực tuyến bằng cách bấm Ứng tuyển ngay dưới đây."
                  }
                </p>
              </div>
            </div>
            <div>
              {/* <button className="button-bs-news-2">Ứng tuyển ngay</button> */}
              <ApplyButton />
            </div>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default NewsJobDetail;
