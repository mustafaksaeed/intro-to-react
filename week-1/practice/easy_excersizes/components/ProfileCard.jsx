import React from "react";

const ProfileCard = ({ name, picture, bio }) => {
  return (
    <div class="profile">
      <h1>{name}</h1>
      <img src={picture} />
      <p>{bio}</p>
    </div>

    // user’s name, profile picture, and a short bio
  );
};

export default ProfileCard;
