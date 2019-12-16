import React, { useState } from "react";
import PropTypes from "prop-types";

const defaultContext = {
  image: null,
  setImage: () => {}
};

export const AppContext = React.createContext(defaultContext);

const propTypes = {
  children: PropTypes.node
};

const AppContextProvider = ({ children }) => {
  const [image, setImage] = useState(null);

  return (
    <AppContext.Provider value={{ image, setImage }}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = propTypes;
export default AppContextProvider;
