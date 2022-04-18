import React from "react";
import "./show-options.css";
import { useData, useAuth } from "../../context";
import {
  addToLiked,
  removeFromLiked,
  removeFromWatchLater,
  addToWatchLater,
} from "../../services";
import { useState } from "react";

export const ShowOptions = ({ video }) => {
  const {
    dataState: { liked, watchLater },
    dataDispatch,
  } = useData();
  const [isHidden, setIsHidden] = useState(true);
  const { isAuthenticated } = useAuth();
  const isLikedVideo = liked.some((likedVideo) => likedVideo._id === video._id);
  const inWatchLater = watchLater.some(
    (watchlaterVideo) => watchlaterVideo._id === video._id
  );

  return (
    <>
      <i
        className="bx bx-dots-vertical-rounded ml-auto"
        onClick={() => setIsHidden(!isHidden)}
      ></i>
      {!isHidden && (
        <ul className="show-list">
          <li className="show-items">
            {isLikedVideo ? (
              <i
                class="bx bxs-like"
                onClick={() => removeFromLiked(video._id, dataDispatch)}
              ></i>
            ) : (
              <i
                className="bx bx-like"
                onClick={() => {
                  isAuthenticated
                    ? addToLiked(video, dataDispatch)
                    : alert("login first");
                }}
              ></i>
            )}
          </li>
          <li className="show-items">
            {inWatchLater ? (
              <i
                class="bx bxs-time-five"
                onClick={() => removeFromWatchLater(video._id, dataDispatch)}
              ></i>
            ) : (
              <i
                className="bx bx-time-five"
                onClick={() => {
                  isAuthenticated
                    ? addToWatchLater(video, dataDispatch)
                    : alert("login first");
                }}
              ></i>
            )}
          </li>
          <li className="show-items">
            <i className="bx bx-list-plus"></i>
          </li>
        </ul>
      )}
    </>
  );
};
