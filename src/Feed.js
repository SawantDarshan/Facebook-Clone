import React from "react";
import "./feed.css";
import StoryReel from "./StoryReel";
import Message from "./Message";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      {/* story reel */}
      <StoryReel></StoryReel>
      {/* message sende */}
      <Message></Message>
      <Post
        profilePic="https://scontent.fbom15-1.fna.fbcdn.net/v/t1.6435-9/122805912_891159081288212_6367329806160913602_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=UUePWK2UU5MAX8Yh9gf&_nc_ht=scontent.fbom15-1.fna&oh=79bda85851fbbc833a26beb8a4c47498&oe=60F40961"
        image="https://scontent.fbom15-1.fna.fbcdn.net/v/t1.6435-9/165754532_987002591703860_2932548940454169359_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=Ry-kN4fphIwAX8B2EBr&tn=210otzqq83p-sTsR&_nc_ht=scontent.fbom15-1.fna&oh=d352a0a41cf3ac2b5bef6cad554b7b9c&oe=60F4AF81"
        username="Khurram shaikh"
        timestamp="this is timestamp"
        message="sadsadsadasdsadsad"
      ></Post>
      <Post
        profilePic="https://scontent.fbom15-1.fna.fbcdn.net/v/t31.18172-8/19620247_126707777927557_6213838646938879866_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=0uHFTrkbfmcAX-v5EKX&_nc_ht=scontent.fbom15-1.fna&oh=73f9164d8c18d84d1ffba286d96aa939&oe=60F5A25E"
        image="https://scontent.fbom15-1.fna.fbcdn.net/v/t1.6435-9/215226576_1262973370796939_9203317469223666722_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=730e14&_nc_ohc=7wVdRBCXlWAAX99RA_N&_nc_ht=scontent.fbom15-1.fna&oh=6212e52bdf0686f8ced08bb70108e116&oe=60F47994"
        username="Ajitesh Shukla"
        timestamp="this is timestamp"
        message="sadsadsadasdsadsad"
      ></Post>
      <Post
        profilePic="https://scontent.fbom15-1.fna.fbcdn.net/v/t1.18169-9/14054034_103985780053566_7420644786615717110_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=tlvwrnCa0kQAX8_Wb9v&_nc_ht=scontent.fbom15-1.fna&oh=c52d4407971eba0e65f08c7e689181c3&oe=60F47823"
        image="https://scontent.fbom15-1.fna.fbcdn.net/v/t1.6435-9/218679283_5843770462618356_7387771671469519797_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=IHlrXp9cSMYAX-1DP3C&tn=210otzqq83p-sTsR&_nc_ht=scontent.fbom15-1.fna&oh=5c0ea44084801bb49c5f16fad52547f0&oe=60F46D4E"
        username="Irfan shaikh"
        timestamp="this is timestamp"
        message="sadsadsadasdsadsad"
      ></Post>
    </div>
  );
}

export default Feed;
