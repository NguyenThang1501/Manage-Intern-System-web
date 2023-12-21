import Pagination from "react-bootstrap/Pagination";
import React from "react";

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const NewsPagination = () => {
  return (
    <div>
      <Pagination className="n-pagination">{items}</Pagination>
      <br />
    </div>
  );
};

export default NewsPagination;
