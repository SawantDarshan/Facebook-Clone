import React from "react";
import Story from "./Story";
import { useState, useEffect } from "react";
import "./storyreel.css";

function StoryReel() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const users = await response.json();
    const Musers = users.slice(0, 5);
    setUsers(Musers);
    // console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="storyreel">
        {users.map((user) => {
          const { login, avatar_url } = user;
          return (
              <Story profileSrc={avatar_url} title={login}></Story>
          );
        })}
    </div>
  );
  // return <div className="storyreel">
  //   <Story></Story>
  // </div>;
}

export default StoryReel;
