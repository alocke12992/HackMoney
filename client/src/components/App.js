import React, { Component } from 'react';
import AdminRoute from './AdminRoute';
import AuthRoute from './AuthRoute';
import EditMenu from './EditMenu';
import FetchUser from './FetchUser';
import Flash from './Flash';
import Home from './Home';
import Login from './Login';
import mainBackground from '../images/mainBackground.jpg';
import Menu from './Menu';
import MenuItem from './MenuItem';
import NavBar from './NavBar';
import NoMatch from './NoMatch';
import ProtectedRoute from './ProtectedRoute';
import Register from './Register';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div style={ styles.base }>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/menu' component={ Menu } />
            <AdminRoute exact path='/edit' component={ EditMenu } />
            <AdminRoute exact path='/edit/:id' component={ MenuItem } />
            <AuthRoute exact path='/login' component={ Login } />
            <AuthRoute exact path='/register' component={ Register } />
            <Route component={ NoMatch } />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

var styles = {
  base: {
    background: `url(${ mainBackground }) no-repeat center fixed`,
    backgroundSize: 'cover',
    padding: 0,
    height: '100vh'
  }
}

export default App;
