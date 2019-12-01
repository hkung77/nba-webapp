import React, { Fragment, useState } from "react";
import {
  Jumbotron,
  InputGroup,
  FormControl,
  Button,
  Spinner
} from "react-bootstrap";
import { store as Notification } from "react-notifications-component";
import CONSTANTS from "utils/constants";
import SearchTermDropDown from "./SearchTermDropDown";
import SearchResultList from "./SearchResultList";

const SearchScreen = () => {
  const [loading, setLoading] = useState(false);
  const [searchType, setSearchType] = useState(CONSTANTS.SEARCH_TYPES.PLAYER);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const getSearchPlaceholder = () =>
    searchType === CONSTANTS.SEARCH_TYPES.PLAYER
      ? "Enter a NBA player's name"
      : "Enter a NBA Team's name";

  const handleSearchTermChange = event => {
    setSearchTerm(event.nativeEvent.target.value);
  };

  const handleSearchPress = async () => {
    setLoading(true);
    // NOTE:
    // More search types may be added later
    // Since there are only two search types at the moment, we can use a turnary comparrison
    const URL =
      searchType === CONSTANTS.SEARCH_TYPES.PLAYER
        ? `${CONSTANTS.SERVER_URI}/playerSearch`
        : `${CONSTANTS.SERVER_URI}/teamSearch`;

    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ search_term: searchTerm })
    })
      .then(response => response.json())
      .then(json => {
        setSearchResult(json.data);
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
  };

  return (
    <Fragment>
      <Jumbotron>
        <h1 className="display-4 text-center">My NBA Project</h1>
        <p className="lead text-center">
          Search for the latest and the oldest info about the NBA
        </p>
        <InputGroup className="col-md-6 mx-auto my-5">
          <SearchTermDropDown value={searchType} onSelect={setSearchType} />
          <FormControl
            aria-label="Search Input"
            as="input"
            value={searchTerm}
            onChange={handleSearchTermChange}
            placeholder={getSearchPlaceholder()}
            disabled={loading}
          />
          <InputGroup.Append>
            <Button
              disabled={loading || searchTerm.length === 0}
              variant="primary"
              onClick={handleSearchPress}
            >
              Search
              {loading && (
                <Spinner
                  className="ml-3"
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Jumbotron>

      <SearchResultList searchResult={searchResult} />
    </Fragment>
  );
};

export default SearchScreen;
