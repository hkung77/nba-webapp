import React from "react";

import ReactNotification from "react-notifications-component";
import Routes from "routes";
import AppContextProvider from "contexts/appContext";

function App() {
  return (
    <div>
      <AppContextProvider>
        <>
          <Routes />
          <ReactNotification />
        </>
      </AppContextProvider>
    </div>
  );
}

export default App;
