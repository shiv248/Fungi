import React, { useState, useEffect } from "react";
import './postCard.css';
import { FaRegHeart, FaHeart, FaRegCommentAlt, FaShare } from "react-icons/fa";

const PostCard = (prop) => {
  console.log(prop.title);
  console.log(prop.thumbnailUrl);
 const [data, setData] = React.useState({
     "albumId": 1,
     "id": 1,
     "title": prop.title,
     "url": prop.url,
     "thumbnailUrl": prop.thumbnailUrl
   });
   const [comments, setComments] = React.useState({}); 

 return (
   <div className="card">
     <div className="cardTop">
       <div className="gameTitle">
          <h5>Wave: The Game</h5>
        </div>
        <div className="cardImage">
        <a href={data.thumbnailUrl}>
            <img src={data.url} alt="" />
          </a>
        </div>
      </div>
        <div className="card-body">
        <section className="one">
          <h2>{data.title}</h2>
        </section>
        <section className="two">
          <p>
            King Clown
          </p>
          </section>
          <section className="three">
          {/*<FaHeart />*/}
            <div className="iconTop">
              <FaRegHeart />
            </div>
            <div className="numberBot">
              23
            </div>
          </section>
          <section className="four">
          <div className="iconTop">
            <FaRegCommentAlt />
          </div>
          <div className="numberBot">
            23
          </div>
          </section>
          <section className="five">
          <div className="iconTop">
            <FaShare />
          </div>
          </section>
        </div>
      </div>
 );
};

export default PostCard;

/*
https://www.w3schools.com/howto/img_avatar.png
https://www.w3schools.com/w3images/avatar2.png
https://www.w3schools.com/w3images/avatar6.png
https://www.w3schools.com/w3images/avatar5.png
https://www.w3schools.com/howto/img_avatar2.png
*/
