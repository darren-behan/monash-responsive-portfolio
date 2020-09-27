import React from "react";
import {
  BrowserRouter as Router,
  useLocation
} from "react-router-dom";

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
      <h5>Click <a href="/">here</a> to return home</h5>
    </div>
  );
}

export default NoMatch;