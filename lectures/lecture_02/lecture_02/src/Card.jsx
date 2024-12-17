import React from "react";

const Card = ({ children, isVerified }) => {
  return (
    <div>
      {isVerified === true ? (
        <img
          style={{ width: 40, height: 40 }}
          src="https://static.vecteezy.com/system/resources/thumbnails/047/309/930/small_2x/verified-badge-profile-icon-png.png"
        />
      ) : (
        <div></div>
      )}
      {children}
    </div>
  );
};

export default Card;
