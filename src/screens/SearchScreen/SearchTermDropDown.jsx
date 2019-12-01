import React from "react";
import PropTypes from "prop-types";
import { InputGroup, Dropdown, DropdownButton } from "react-bootstrap";
import CONSTANTS from "utils/constants";

const propTypes = {
  onSelect: PropTypes.func,
  value: PropTypes.string
};

const SearchTermDropDown = ({ value, onSelect }) => {
  return (
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title={value}
      id="input-group-dropdown-1"
    >
      <Dropdown.Item
        eventKey={CONSTANTS.SEARCH_TYPES.PLAYER}
        onSelect={onSelect}
        href="#"
        active={value === CONSTANTS.SEARCH_TYPES.PLAYER}
      >
        {CONSTANTS.SEARCH_TYPES.PLAYER}
      </Dropdown.Item>
      <Dropdown.Item
        eventKey={CONSTANTS.SEARCH_TYPES.TEAM}
        onSelect={onSelect}
        active={value === CONSTANTS.SEARCH_TYPES.TEAM}
        href="#"
      >
        {CONSTANTS.SEARCH_TYPES.TEAM}
      </Dropdown.Item>
    </DropdownButton>
  );
};

SearchTermDropDown.propTypes = propTypes;
export default SearchTermDropDown;
