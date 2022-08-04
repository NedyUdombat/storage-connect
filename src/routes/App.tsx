import React from "react";
import { Routes, Route } from "react-router-dom";

/** Util(s) */
import { ROUTE_URLS } from "./RouteUrls";

/** Page(s) */
import Home from "../pages/home/home";
import NotFound from "../pages/errors/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path={ROUTE_URLS.HOME_URL} element={<Home />} />

      {/** Not found Page(s) */}
      <Route path={ROUTE_URLS.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default App;
