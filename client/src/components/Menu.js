import React from 'react';
import mainBackground from '../images/mainBackground.jpg';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getItems } from '../actions/items';
import { Segment, Card, Button, Divider } from 'semantic-ui-react';


class Menu extends React.Component {

  componentDidMount() {
    this.props.dispatch( getItems() )
  }

  items = () => {
    return this.props.items.map( item =>
      < Card key={ item.id } as={ Transparent } >
        <Card.Header as="h3" style={ styles.text }>
          { item.name }
        </Card.Header>
        <Card.Content style={ styles.text }>
          { item.description }
          <Divider hidden />
          ${ item.price }
        </Card.Content>
        <Card.Content extra>
          <Button basic>Add to cart</Button>
        </Card.Content>
      </Card >
    )
  }

  render() {
    return (
      <Segment textAlign='center' style={ styles.base }>
        <Card.Group>
          { this.items() }
        </Card.Group>
      </Segment>
    )
  }
}

const Transparent = styled.div`
  background: transparent !important; 
`
var styles = {
  base: {
    background: `url(${ mainBackground }) no-repeat center fixed`,
    backgroundSize: 'cover',
    padding: 0,
    height: '100vh'
  },
  text: {
    color: 'white'
  }
}

const mapStateToProps = ( state ) => {
  return { items: state.items }
}

export default connect( mapStateToProps )( Menu );