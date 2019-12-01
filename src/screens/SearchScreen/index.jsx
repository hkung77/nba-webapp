import React, { Fragment, useState } from "react";
import {
  Jumbotron,
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
  Button
} from "react-bootstrap";

import CONSTANTS from "utils/constants";

const SearchScreen = () => {
  const [searchType, setSearchType] = useState(CONSTANTS.SEARCH_TYPES.PLAYER);

  const onSearchDropdownItemSelect = value => {
    setSearchType(value);
  };

  return (
    <Fragment>
      <Jumbotron>
        <h1 className="display-4">My NBA Project</h1>
        <p className="lead">
          Search for the latest and the oldest info about the NBA
        </p>
        <InputGroup className="mb-3">
          <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title={searchType}
            id="input-group-dropdown-1"
          >
            <Dropdown.Item
              eventKey={CONSTANTS.SEARCH_TYPES.PLAYER}
              onSelect={onSearchDropdownItemSelect}
              href="#"
              active={searchType === CONSTANTS.SEARCH_TYPES.PLAYER}
            >
              {CONSTANTS.SEARCH_TYPES.PLAYER}
            </Dropdown.Item>
            <Dropdown.Item
              eventKey={CONSTANTS.SEARCH_TYPES.TEAM}
              onSelect={onSearchDropdownItemSelect}
              active={searchType === CONSTANTS.SEARCH_TYPES.TEAM}
              href="#"
            >
              {CONSTANTS.SEARCH_TYPES.TEAM}
            </Dropdown.Item>
          </DropdownButton>

          <FormControl aria-label="Search button" />
          <InputGroup.Append>
            <Button variant="primary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </Jumbotron>

      <div id="searchResult" className="container" hidden>
        <div className="card-columns"></div>
      </div>
    </Fragment>
  );
};

export default SearchScreen;
