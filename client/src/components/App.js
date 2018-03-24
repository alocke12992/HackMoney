import React, { Component } from 'react';
import AdminRoute from './AdminRoute';
import AuthRoute from './AuthRoute';
import Cart from './Cart';
import EditMenu from './EditMenu';
import FetchUser from './FetchUser';
import Flash from './Flash';
import Home from './Home';
import Login from './Login';
import mainBackground from '../images/mainBackground.jpg';
import Menu from './Menu';
import AdminMenuItem from './AdminMenuItem';
import NavBar from './NavBar';
import NoMatch from './NoMatch';
import Philosophy from './Philosophy';
import ProtectedRoute from './ProtectedRoute';
import Register from './Register';
import Reservations from './Reservations';
import Locations from './Locations';
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
            <Route exact path='/reservations' component={ Reservations } />
            <Route exact path='/location' component={ Locations } />
            <Route exact path='/philosophy' component={ Philosophy } />
            <AdminRoute exact path='/edit' component={ EditMenu } />
            <AdminRoute exact path='/edit/:id' component={ AdminMenuItem } />
            <AuthRoute exact path='/login' component={ Login } />
            <AuthRoute exact path='/register' component={ Register } />
            <ProtectedRoute exact path='/cart' component={ Cart } />
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
