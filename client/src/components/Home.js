import React, { Component } from 'react';
import { Header, Button, Segment, Container, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import background from '../images/background.jpg';

class Home extends Component {
  render() {
    return (
      <Segment textAlign='center' style={ styles.base }>
        <Container>
          <Image src={ logo } style={ styles.logo } />
          <Header
            as='h2'
            inverted
            style={ { fontSize: '1.7em', fontWeight: 'normal' } }
          />
          <Link to='/menu'>
            <Button color='blue' size='huge'>Order Now</Button>
          </Link>
        </Container>
      </Segment>
    );
  }
}

const styles = {
  base: {
    background: `url(${ background }) no-repeat center fixed`,
    backgroundSize: 'cover',
    padding: 0,
    height: '100vh'
  },

  logo: {
    margin: '0 auto',
    marginTop: '10em',
    height: '40vh'
  },
}

export default Home;
