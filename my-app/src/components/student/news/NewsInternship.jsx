import React from "react";
import SideBar from "../../common/sidebar/SideBar";
import "./news.css";
import NewsCard from "./NewsCard";
import NewsPagination from "./NewsPagination";

const NewsIntership = () => {
  return (
    <SideBar>
      <div className="news-1">
        <div className="first-one">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
          aspernatur quas commodi repellat dolor veritatis, voluptatibus
          quibusdam nisi voluptates nihil at quaerat illum dignissimos, ad
          facere voluptate tempore enim impedit.
        </div>
        <div className="second-one">
          <div className="small-news">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            libero laboriosam nesciunt fugiat tempore a harum consectetur aut
            nobis accusantium? Assumenda cum deleniti nobis? Porro possimus iste
            eligendi aperiam corporis?
          </div>
          <div className="small-news">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            officiis modi repudiandae et unde officia, facilis nobis maiores
            assumenda qui inventore, quo dignissimos quis deleniti voluptate
            velit ratione sunt asperiores.
          </div>
          <div className="small-news">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            non similique sunt recusandae, a iste voluptas veniam inventore
            dolor sequi veritatis architecto, perspiciatis repudiandae illum sit
            voluptatibus vero odio numquam.
          </div>
        </div>
      </div>
      <div className="news-2">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <NewsPagination />
    </SideBar>
  );
};

export default NewsIntership;
