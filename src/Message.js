import React from "react";
import "./message.css";
import { Avatar } from "@material-ui/core";
import { Videocam } from "@material-ui/icons";
import { PhotoLibrary } from "@material-ui/icons";
import { InsertEmoticon } from "@material-ui/icons";
import { useState } from "react";



function Message() {
    const [input, setinput] = useState('');
    const [imageUrl, setimageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar></Avatar>
        <form>
          <input
            type="text"
            name=""
            id=""
            placeholder={"What's on you'r mind"}
            value={input}
            onChange={e => setinput(e.target.value)}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder={"Image URL (Optional)"}
            value={imageUrl}
            onChange={e => setimageUrl(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <Videocam style={{ color: "red" }}></Videocam>
          <h3>Live Video</h3>
        </div>
        <div className="messageSender_option">
          <PhotoLibrary style={{ color: "green" }}></PhotoLibrary>
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender_option">
          <InsertEmoticon style={{ color: "yellow" }}></InsertEmoticon>
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default Message;
