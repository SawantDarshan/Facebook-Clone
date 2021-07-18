import React from 'react';
import "./story.css";
import { Avatar } from "@material-ui/core";


function Story({img, profileSrc, title}) {
    return (
        <div className="story" style={{backgroundImage: `url(${profileSrc})`}}>
            <Avatar src={profileSrc} className="story-avatar
            "></Avatar>
            <h4>{title}</h4>
        </div>
    )
}

export default Story
