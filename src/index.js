import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";

function BlogPost() {
  let params = useParams();
  let match = useRouteMatch("/blog/:slug");
  console.log("match", match);
  console.log("params", params);
  return <div>Now showing post {params.slug}</div>;
}
function HomePage() {
  return <div>HomePage</div>;
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/react-params-form/">
        <HomePage />
      </Route>
      <Route path="/react-params-form/blog/:slug">
        <BlogPost />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
