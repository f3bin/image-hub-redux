import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImages } from "../../redux/imageSlice";
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import './Gallery.scss'
import { like  } from "../../redux/favouritesSlice";

const Gallery = () => {
  const dispatch = useDispatch();
  const { images, loading, error } = useSelector((state) => state.images);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);


  const addToFavourites = item => dispatch(like(item));

  return (
  
      <div className="gallery-container">
        {loading && <p>...Loading!</p>}
        {error && <p>...error..!</p>}
        {images.photos &&
          images.photos.map((item) => (
            <div className="gallery-item">
              <img src={item.src.portrait} alt="" />
             <AiOutlineHeart size={40} onClick={()=>addToFavourites(item)}  className="gallery-icon" />
            </div>
          ))}
      </div>
   
  );
};

export default Gallery;
