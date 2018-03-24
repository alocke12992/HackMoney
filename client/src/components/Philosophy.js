import React from 'react'
import philosophy from '../images/philosophy.jpg'
import philo from '../images/philo.png'
import { Link } from 'react-router-dom'
import { Segment, Container, Header, Button, Image } from 'semantic-ui-react';


class Philosophy extends React.Component {

  render() {
    return (
      <Segment textAlign='center' style={ styles.base }>
        <Container>
          <Image src={ philo } style={ styles.logo } />
        </Container>
      </Segment>
    )
  }
}
var styles = {
  base: {
    background: `url(${ philosophy }) no-repeat center fixed`,
    backgroundSize: 'cover',
    padding: 0,
    height: '100vh'
  },
  text: {
    color: 'white'
  },
  logo: {
    margin: '0 auto',
    marginTop: '10em',
    height: '50vh'
  },
}

export default Philosophy;