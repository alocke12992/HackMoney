import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  Button,
  Container,
  Card,
  Image,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import EditItemForm from './EditItemForm';
import { deleteItem } from '../actions/items';

const defaultImage = 'https://iqsresponsive-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/landscape-1471344808-avocado-burger-buns-680x340.jpg'

class AdminMenuItem extends React.Component {
  state = { showForm: false }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    } )
  }

  removeItem = () => {

    const { item: { id }, dispatch, history } = this.props
    dispatch( deleteItem( id ) )
    history.push( '/edit' )
  }

  render() {
    const { item = {} } = this.props
    const { showForm } = this.state
    return (
      <Container>
        <Link to="/edit">Back to edit menu</Link>

        { showForm ?
          <EditItemForm { ...item } closeForm={ this.toggleForm } />
          :
          <div>
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
            </Card >
          </div>
        }
        <Button color='blue' onClick={ this.toggleForm }>
          { showForm ? 'Cancel' : 'Edit' }
        </Button>
        <Button color='red' onClick={ this.removeItem }>
          Delete
        </Button>
      </Container>
    )
  }
}


const Transparent = styled.div`
  background: transparent !important; 
`

var styles = {
  text: {
    color: 'white'
  }
}

const mapStateToProps = ( state, props ) => {
  const item = state.items.find(
    i => i.id === parseInt( props.match.params.id ),
  );
  return { item };
};

export default connect( mapStateToProps )( AdminMenuItem );
