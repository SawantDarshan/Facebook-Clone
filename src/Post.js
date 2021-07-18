import React from "react";
import "./post.css";
import { Avatar } from "@material-ui/core";
import { ThumbUp } from "@material-ui/icons";
import { ChatBubble } from "@material-ui/icons";
import { NearMe } from "@material-ui/icons";
import { AccountCircle } from "@material-ui/icons";
import { ExpandMoreOutlined } from "@material-ui/icons";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={profilePic} className="post_avatar"></Avatar>
        <div className="post_topInfo">
          <h3>{username}</h3>
          <p>timestamp...</p>
        </div>
      </div>
      <div className="post_bottom">
        <p>{message}</p>
      </div>
      <div className="post_image">
        <img src={image} alt={username} />
      </div>
      <div className="post_options">
        <div className="post_option">
          <ThumbUp></ThumbUp>
          <p>Like</p>
        </div>
        <div className="post_option">
          <ChatBubble></ChatBubble>
          <p>Comment</p>
        </div>
        <div className="post_option">
          <NearMe></NearMe>
          <p>Share</p>
        </div>
        <div className="post_option">
          <AccountCircle></AccountCircle>
          <ExpandMoreOutlined></ExpandMoreOutlined>
        </div>
      </div>
    </div>
  );
}

export default Post;
