import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  bio: PropTypes.object
};

const PlayerBio = ({ bio }) => {
  /*
BIRTHDATE: "1984-12-30T00:00:00"
COUNTRY: "USA"
DISPLAY_FIRST_LAST: "LeBron James"
DISPLAY_FI_LAST: "L. James"
DISPLAY_LAST_COMMA_FIRST: "James, LeBron"
DLEAGUE_FLAG: "N"
DRAFT_NUMBER: "1"
DRAFT_ROUND: "1"
DRAFT_YEAR: "2003"
FIRST_NAME: "LeBron"
FROM_YEAR: 2003
GAMES_PLAYED_FLAG: "Y"
HEIGHT: "6-9"
JERSEY: "23"
LAST_AFFILIATION: "St. Vincent-St. Mary HS (OH)/USA"
LAST_NAME: "James"
NBA_FLAG: "Y"
PERSON_ID: 2544
PLAYERCODE: "lebron_james"
POSITION: "Forward"
ROSTERSTATUS: "Active"
SCHOOL: "No College"
SEASON_EXP: 16
TEAM_ABBREVIATION: "LAL"
TEAM_CITY: "Los Angeles"
TEAM_CODE: "lakers"
TEAM_ID: 1610612747
TEAM_NAME: "Lakers"
TO_YEAR: 2019
WEIGHT: "250"
*/
  if (Object.keys(bio).length > 0) {
    const formatDate = new Date(Date.parse(bio.BIRTHDATE)).toLocaleDateString();
    return (
      <div className="mr-5">
        <p>Date of Birth: {formatDate}</p>
        <p>Country: {bio.COUNTRY}</p>
        <p>Position: {bio.POSITION}</p>
        <p>Height: {bio.HEIGHT}</p>
        <p>Weight: {bio.WEIGHT} lb</p>
        <p>Current Team: {`${bio.TEAM_CITY} ${bio.TEAM_NAME}`}</p>
      </div>
    );
  }
  return null;
};

PlayerBio.propTypes = propTypes;
export default PlayerBio;
