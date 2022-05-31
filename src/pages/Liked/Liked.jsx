import React from "react";
import { useData } from "../../context";
import { SideBar, VerticalCard } from "../../components";
import { useDocumentTitle } from "../../hooks";

export const Liked = () => {
  const {
    dataState: { liked },
  } = useData();
  useDocumentTitle();

  return (
    <div className="main-display">
      <SideBar />
      <div className="main">
        <h4 className="text-center">Liked Videos ({liked.length})</h4>
        <div className="vertical-card-wrapper">
          {liked?.map((video) => (
            <VerticalCard key={video._id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};
