import React from 'react'
import { connect } from 'react-redux';
import {
  Button,
  Container,
  Card
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import EditItemForm from './EditItemForm';
import { deleteItem } from '../actions/items';

class MenuItem extends React.Component {
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
            < Card key={ item.id } >
              <Card.Header as='h3'>
                { item.name }
              </Card.Header>
              <Card.Content>
                { item.description }
              </Card.Content>
              <Card.Content extra>
                <Link to={ `/edit/${ item.id }` }>View Menu Item</Link>
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

const mapStateToProps = ( state, props ) => {
  const item = state.items.find(
    i => i.id === parseInt( props.match.params.id ),
  );
  return { item };
};

export default connect( mapStateToProps )( MenuItem );
