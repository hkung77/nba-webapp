import React from "react";
import PropTypes from "prop-types";
import './playerBio.css';

const propTypes = {
  bio: PropTypes.object
};

const PlayerBio = ({ bio }) => {
  if (bio) {
    const commonInfo = bio ? bio.commonPlayerInfo[0]  : {};
    const formatDate = new Date(Date.parse(commonInfo.birthdate)).toLocaleDateString();
    return (
      <div className="playerBioContainer mr-5">
        <h2 className="playerBioTitle">Profile</h2>
        <p>Date of Birth: {formatDate}</p>
        <p>Country: {commonInfo.country}</p>
        <p>Position: {commonInfo.position}</p>
        <p>Height: {commonInfo.height}</p>
        <p>Weight: {commonInfo.weight} lb</p>
        <p>Current Team: {`${commonInfo.teamCity} ${commonInfo.teamName}`}</p>
      </div>
    );
  }
  return null;
};

PlayerBio.propTypes = propTypes;
export default PlayerBio;
