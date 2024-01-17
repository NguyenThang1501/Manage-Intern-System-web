import React, { useState, useEffect } from "react";
import SideBar3 from "../common/sidebar/SideBar3";
import NewsJobDetail from "../common/news/NewsJobDetail";
import { useLocation } from "react-router-dom";
import businessApi from "../../api/businessAPI";
import { useUser } from "../../context/UserContext";
import CustomButton from "../common/button/CustomButton";
import Col from "react-bootstrap/esm/Col";
import axios from "axios";

const BusinessNewsDetail = () => {
  const location = useLocation();
  const { userInfo } = useUser();
  const newsID = location.state ? location.state.idNews : null;
  const [listStudent, setListStudent] = useState([]);
  const [test, setTest] = useState("");

  useEffect(() => {
    const fetchAllCV = async () => {
      console.log(newsID);
      try {
        let response = await businessApi.getCV(userInfo.accessToken, newsID);
        console.log(response);
        let data = response;
        setListStudent(data);
      } catch (error) {
        console.log("Failed ", error);
      }
    };
    fetchAllCV();
  }, [userInfo]);

  const openPdfInNewTab = (pdfUrl) => {
    const newTab = window.open();
    newTab.document.write(
      '<html><body><embed width="100%" height="100%" src="' +
        pdfUrl +
        '" type="application/pdf"></embed></body></html>'
    );
  };
  const [pdfUrl, setPdfUrl] = useState(null);
  const handleViewCV = async (item) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/business/getCV/${item}`,
        {
          headers: {
            token: `Bearer ${userInfo.accessToken}`, // Thêm token vào header
            "Content-Type": "application/pdf", // Đặt Content-Type tùy thuộc vào yêu cầu của API
          },
          responseType: "blob", // Đặt kiểu dữ liệu trả về là blob để xử lý file PDF
        }
      );

      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      window.open(url, "_blank");
    } catch (error) {
      console.error("Failed ", error);
    }
  };

  return (
    <div className="wrap-content">
      <SideBar3 />
      <Col sm={8} className="infor-company">
        <NewsJobDetail NewsID={newsID} />
      </Col>
      <div className="td-company sv-ap">
        <div className="title-cp">Sinh viên đã ứng tuyển</div>
        <div className="td-newsbox">
          {listStudent.map((item, index) => (
            <div key={index} className="box-mana-news">
              <CustomButton
                buttonText={item}
                onClick={() => handleViewCV(item)}
              />
            </div>
          ))}
        </div>
        <p className="p-2">
          *Đây là danh sách mã sinh viên. Bấm vào để xem CV chi tiết
        </p>
      </div>
    </div>
  );
};

export default BusinessNewsDetail;
