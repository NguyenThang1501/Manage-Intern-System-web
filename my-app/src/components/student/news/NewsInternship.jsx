import React from "react";
import SideBar from "../../common/sidebar/SideBar";
import "./news.css";
import NewsPagination from "./NewsPagination";
import NewsBox from "../../teacher/manageNews/newsbox/NewsBox";
import Container from "react-bootstrap/esm/Container";

const NewsIntership = () => {
  return (
    <SideBar>
      <Container>
        <div className="news-2">
          <NewsBox />
          <NewsBox />
        </div>
        <NewsPagination />
      </Container>
    </SideBar>
  );
};

export default NewsIntership;
