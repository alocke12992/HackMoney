import React from 'react';
import mainBackground from '../images/mainBackground.jpg';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getItems } from '../actions/items';
import { setHeaders } from '../actions/headers';
import { Segment, Card, Button, Divider, Image } from 'semantic-ui-react';
import axios from 'axios';
import { setFlash } from '../actions/flash'

const defaultImage = "http://assets.kraftfoods.com/recipe_images/opendeploy/107771_640x428.jpg"

class Menu extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    this.props.dispatch( getItems() )
    }

  addToCart = ( id ) => {
    axios.put( `/api/update_cart`, { user_id: this.props.user.id } )
      .then( res => {
        this.props.dispatch( setFlash( 'Item Added to Cart', 'green' ) )
        console.log( res )
      } )
  }

  items = () => {
    return this.props.items.map( item =>
      < Card key={ item.id } as={ Transparent } >
        <Image src={ item.image || defaultImage } />
        <Card.Content style={ styles.text }>
          <Card.Header as="h3">
            { item.name }
          </Card.Header>
          <Card.Meta>
            ${ item.price }
          </Card.Meta>
          <Card.Description>
            { item.description }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button basic
            onClick={ () => this.addToCart( item.id ) } style={ styles.pointer }>Add to cart</Button>
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
  },
  text: {
    color: 'white'
  }
}

const mapStateToProps = ( state ) => {
  return { items: state.items, user: state.user }
}

export default connect( mapStateToProps )( Menu );
