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
            position='right'
            name='Logout'
            onClick={ () => dispatch( handleLogout( history ) ) }
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/register'>
          <Menu.Item name='Sign Up' />
        </Link>
        <Link to='/login'>
          <Menu.Item name='Sign In' />
        </Link>
      </Menu.Menu>
    );
  }

  centerNav = () => {
    return (
      <Menu.Menu>
        <Link to='/philosophy'>
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
        <Link to='/reservations'>
          <Menu.Item name='Reservations' />
        </Link>
        <Link to='/location'>
          <Menu.Item name='Location' />
        </Link>
      </Menu.Menu>
    )
  }

  render() {
    return (
      <Menu pointing secondary borderless as={ Transparent }>
        { this.centerNav() }
        <Link to='/cart'>
          <Menu.Item name='View Cart' position="right" />
        </Link>
        { this.rightNavs() }
      </Menu>
    );
  }
}

const Transparent = styled.div`
  background: transparent !important;
`

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter( connect( mapStateToProps )( NavBar ) );
