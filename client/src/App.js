import './App.css';
import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import "antd/dist/antd.css";
import {Result} from "antd";
import Login from './Pages/Login';
import Pockemon from './Pages/Pockemon';

function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route exact path="/" component={Pockemon} />
          <Route path="/login" component={Login} />
        

          <Route>
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={<Link to="/login">Back Home</Link>}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
