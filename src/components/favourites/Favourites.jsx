import React, { startTransition } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Favourites.scss";
import { dislike } from "../../redux/favouritesSlice";

const Favourites = () => {
  const dispatch = useDispatch();
  const favouriteList = useSelector((state) => state.favourites);
  const removeFromLikes = (id) => dispatch(dislike(id));
  

  return (
    <div className="favourites-container">
      {favouriteList &&favouriteList.map((item) => (
        <div className="favourites-item">
          
          <img src={item.src.portrait} alt="" />
          <Link
            className="remove-link links"
            onClick={() => removeFromLikes(item.id)}
          >
            Remove From Likes
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Favourites;
