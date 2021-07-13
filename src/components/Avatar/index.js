import React from "react";
import user from "./../../assets/images/user.svg";
import "./styles.scss";

/*
  Avatar component for general used
  @props: {avatar, size: 'small' | 'large', extraClass}
*/
const Avatar = ({ avatar, size, extraClass }) => {
  return (
    <div
      className={`avatar-wrapper-${size} d-flex flex-center justify-center ${extraClass}`}
    >
      <img
        data-testid="avatar-img"
        className={`user-vatar-${size}`}
        src={avatar}
        alt="interlocutor icon"
      />
    </div>
  );
};

Avatar.defaultProps = {
  avatar: user,
  size: "small",
  extraClass: "",
};

export default Avatar;
