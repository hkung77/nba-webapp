import React from "react";
import PropTypes from "prop-types";
import { Container, CardColumns, Card, Button } from "react-bootstrap";

import "./SearchResultList.css";

const propTypes = {
  searchResult: PropTypes.array
};

const defaultProp = {
  searchResult: []
};

const SearchResultList = ({ searchResult }) => {
  const handleMorePress = data => {};
  return (
    <Container>
      <CardColumns>
        {searchResult.map(data => (
          <Card className="searchResultList-container">
            <Card.Img
              variant="top"
              src={
                data.image ||
                "http://www.suttonsilver.co.uk/wp-content/uploads/blog-harold-02.jpg"
              }
              alt="default"
            />
            <Card.Body>
              <Card.Title>{data.full_name}</Card.Title>
              <Card.Text
                className={data.is_active ? "text-success" : "text-danger"}
              >
                {data.is_active ? "ACTIVE" : "RETIRED"}
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  handleMorePress(data);
                }}
              >
                More info
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </Container>
  );
};

SearchResultList.propTypes = propTypes;
SearchResultList.defaultProp = defaultProp;
export default SearchResultList;
