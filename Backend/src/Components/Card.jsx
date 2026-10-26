 
import React from "react";
import "./Card.css";

const Card = ({ user }) => {
  return (
    <div className="card">
      <img
        src={user.avatar_url}
        alt={`${user.login} avatar`}
        className="card-img"
      />

      <div className="card-content">
        <h2>{user.login}</h2>
        <p>User ID: {user.id}</p>
        <p>Account Type: {user.type}</p>

        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="card-btn"
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default Card;
