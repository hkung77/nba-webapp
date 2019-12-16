import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Image, Row, Jumbotron } from "react-bootstrap";

import { store as Notification } from "react-notifications-component";

import CONSTANTS from "utils/constants";
import LoadingAnimation from "./LoadingAnimation";
import PlayerBio from "./PlayerBio";
import PercentChart from "./PercentChart";

const propTypes = {
  location: PropTypes.object
};

const PlayerDetailScreen = ({ location }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${CONSTANTS.SERVER_URI}/nba/playerDetailsSearch/?player_id=${location.state.playerId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(json => {
        setData(json.data);
      })
      .catch(() => {
        Notification.addNotification({
          title: "Oops!",
          message: "Seems like something went wrong.",
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "zoomIn", "faster"],
          animationOut: ["animated", "flipOutX", "faster"],
          dismiss: {
            duration: 3000
          }
        });
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <>
      <Jumbotron className="pb-0 mb-0">
        <Row className="d-flex justify-content-between">
          <div className="d-flex">
            <Image className="d-flex" src={location.state.image} />
            <h1 className="d-flex align-items-end ml-lg-5">
              {data.bio ? data.bio.DISPLAY_FIRST_LAST : ""}
            </h1>
          </div>
          <PlayerBio bio={data.bio || {}} />
        </Row>
      </Jumbotron>
      <Container>
        <Row>
          <h2 className="mt-5 mb-5"> Career Stats </h2>
        </Row>
        <div className="d-flex justify-content-between">
          <PercentChart stats={data.stats} />
        </div>
      </Container>
    </>
  );
};
PlayerDetailScreen.propTypes = propTypes;

export default PlayerDetailScreen;
