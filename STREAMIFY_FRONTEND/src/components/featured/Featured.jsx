import React from "react";
import "./featured.scss";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";

const Featured = ({type}) => {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type=="movie" ? "Movies" : "Series" }</span>
            <select name="genre" id="genre">
                <option>Genre</option>
                <option value="action">Action</option>
    <option value="comedy">Comedy</option>
    <option value="drama">Drama</option>
    <option value="thriller">Thriller</option>
    <option value="sci-fi">Science Fiction</option>
    <option value="fantasy">Fantasy</option>
    <option value="romance">Romance</option>
    <option value="horror">Horror</option>
    <option value="mystery">Mystery</option>
            </select>
            
            </div>
        )
        }
      <img src="../public/img2.jpg" />
      <div className="info">
        <img src="../public/movie1.jpg" />
        <span className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
          est saepe! Explicabo molestiae fugit nesciunt sit, exercitationem
          eligendi qui numquam quidem. Quo ducimus itaque veritatis porro
          cupiditate optio nobis consectetur.
        </span>
        <div className="buttons">
            <button className="play">
                <PlayArrow />
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlined />
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
