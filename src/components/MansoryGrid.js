import React from "react";
import Card from "./Card";
import Masonry from "react-masonry-css";
import "./Mansory.css";

import config from "../Config";

export default function MansoryGrid({ isLoading, data }) {
  if (!isLoading && data) {
    return (
      <div className="flex justify-center">
        <Masonry
          breakpointCols={config.mansory_columns}
          className="my-masonry-grid max-w-6xl"
          columnClassName="my-masonry-grid_column"
        >
          {data.results.map(({ id, text, images, score }) => {
            return (
              <Card
                key={text}
                id={id}
                images={images}
                text={text}
                score={score}
              />
            );
          })}
        </Masonry>
      </div>
    );
  } else return <></>;
}
