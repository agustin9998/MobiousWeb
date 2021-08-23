import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppHeader from "./AppHeader.js";
import MoviesTiles from "./MoviesTiles.js";
import ShowsTiles from "./ShowsTiles.js";

function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <Switch>
          <Route to="/movies">
            <MoviesTiles />
          </Route>
          <Route to="/tvShows">
            <ShowsTiles />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
