import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import logo from '../images/logo.png';
import styled from 'styled-components';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if ( user.id ) {
      return (
        <Menu.Menu position='right'>
          { user.role === 'admin' &&
            <Menu.Item onClick={ () => history.push( '/edit' ) }>Edit Menu</Menu.Item>
          }
          <Menu.Item
            name='Logout'
            onClick={ () => dispatch( handleLogout( history ) ) }
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/register'>
          <Menu.Item name='Register' />
        </Link>
        <Link to='/login'>
          <Menu.Item name='Login' />
        </Link>
      </Menu.Menu>
    );
  }

  centerNav = () => {
    return (
      <Menu.Menu>
        <Link to='/'>
          <Menu.Item name='Philosophy' />
        </Link>
        <Link to='/menu'>
          <Menu.Item name='Menu' />
        </Link>
        <Link to='/'>
          <Image
            src={ logo }
            size='small'
          />
        </Link>
        <Link to='/'>
          <Menu.Item name='Reservations' />
        </Link>
        <Link to='/'>
          <Menu.Item name='Location' />
        </Link>
      </Menu.Menu>
    )
  }

  render() {
    return (
      <Menu pointing secondary borderless as={ Transparent }>
        { this.centerNav() }
        { this.rightNavs() }
      </Menu>
    );
  }
}

const Transparent = styled.div`
  background: transparent !important; 
`
var styles = {
  base: {
    background: '#dbd5d7'
  }
}


const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter( connect( mapStateToProps )( NavBar ) );
