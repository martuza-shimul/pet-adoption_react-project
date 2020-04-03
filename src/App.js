import React, { useState } from "react";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";
import Details from "./Details";
import SearchParams from "./SearchParams";

// const Details = lazy(() => import("./Details"));
// const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const themeHook = useState("darkblue");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/"> Adopt Me!</Link>
        </header>
        {/* <Suspense fallback={<h1>Loading route ...</h1>}> */}
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
        {/* </Suspense> */}
      </div>
    </ThemeContext.Provider>
  );
};
// render(<App />, document.getElementById("root"));
export default App;
