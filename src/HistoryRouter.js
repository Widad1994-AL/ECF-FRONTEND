import React, { useState, useLayoutEffect } from "react";
import { Router } from "react-router";
import history from "./history";

function HistoryRouter({ children }) {
  const [location, setLocation] = useState(history.location);

  useLayoutEffect(() => {
    const unlisten = history.listen(({ location }) => {
      setLocation(location);
    });
    return unlisten;
  }, []);

  return <Router location={location} navigator={history}>{children}</Router>;
}

export default HistoryRouter;
