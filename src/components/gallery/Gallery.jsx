import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImages } from "../../redux/imageSlice";
import { AiFillHeart } from "react-icons/ai";
import "./Gallery.scss";
import { like, dislike } from "../../redux/favouritesSlice";

const Gallery = () => {
  const dispatch = useDispatch();
  const { images, loading, error } = useSelector((state) => state.images);
  const favouriteList = useSelector((state) => state.favourites);

  useEffect(() => {
    dispatch(getImages());
  }, [  ]);

  const addToFavourites = (item) => dispatch(like(item));
  const removeFromFavourites = (item) => dispatch(dislike(item.id));

  return (
    <div className="gallery-container">
      {loading && <p>Loading...!</p>}
      {error && <p>error...!</p>}

      {images.photos &&
        images.photos.map((item) => {
          const isLiked = favouriteList.find((favItem) => favItem.id === item.id);
          return (
            <div className="gallery-item" key={item.id}>
              <img src={item.src.original} alt="" />
              {isLiked ? (
                <AiFillHeart
                  className="gallery-icon"
                  size={35}
                  color="red"
                  onClick={() => removeFromFavourites(item)}
                />
              ) : (
                <AiFillHeart
                  className="gallery-icon"
                  size={35}
                  color="white"
                  onClick={() => addToFavourites(item)}
                />
              )
              }
            </div>
          );
        })}
    </div>
  );
};

export default Gallery;
