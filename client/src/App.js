
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import {Result} from "antd";
import Login from './Pages/Login';
import Pockemon from './Pages/Pockemon';
import Register from './Pages/Register';
function App() {
  return (
    <Router>
      <Switch>
        
        <Route path="/login" exact>
          <Login />
        </Route>
      
        <Route path="/home" exact>
          <Pockemon />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
        
        <Route>
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={<NavLink to="/login">Back Home</NavLink>}
            />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
