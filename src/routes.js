import { Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Auth from "./Components/Auth";
import Profile from "./Components/Profile";

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/dash" component={Dashboard} />
    <Route path="/profile" component={profile} />
    <Route
      render={() => {
        <div>
          <h1>Gourd or Gourd puns not found</h1>
          <Link to="/">Return to login page</Link>
        </div>;
      }}
    />
  </Switch>
);
