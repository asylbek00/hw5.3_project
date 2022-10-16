import React from "react";
import "./Card.css";

function Card(props) {
  // console.log(props);
  const bgStyle = {
    backgroundColor: props.bgcolor,
  };
  return (
    <div className="Card">
      <div className="bg_color" style={bgStyle}></div>
      <figure>
        <img className="user_img" src={props.profilePic} alt="" />
      </figure>
      <div className="title">
        <h4 className="author">
          <div className="user_name">{props.userName}</div>
          <div className="user_id">{props.number}</div>
        </h4>
        <p className="about">About</p>
        <div className="user_info">{props.userInfo}</div>
        <div className="sos_set">
          <div>
            <div>
              <a href={props.insta}>
                <img
                  className="icon"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuYCN12mOqGJMQAx5tvy6MDx_0A0017yAfkw&usqp=CAU"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href={props.youtube}>
                <img
                  className="icon"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6X5CzQGZdlBlq50AhBj_9keyUAijZ4a3TrQ&usqp=CAU"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
