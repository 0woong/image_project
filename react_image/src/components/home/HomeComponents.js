import React from "react";
import Masonry from "react-masonry-css";
import "./masonry.css";

function HomeComponents({ membership }) {
  const items = membership.map((item) => {
    return (
      <img key={item.id} src={item.img} style={{ width: "100%" }} alt="" />
    );
  });

  return (
    <Masonry
      breakpointCols={4}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items}
    </Masonry>
  );
}

export default HomeComponents;
