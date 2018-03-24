import React from 'react';
import EditItemForm from './EditItemForm';
import mainBackground from '../images/mainBackground.jpg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItems } from '../actions/items';
import { Segment, Card, Header, Button, Divider } from 'semantic-ui-react';


class EditMenu extends React.Component {
  state = { category: '', showForm: false };
  componentDidMount() {
    this.props.dispatch( getItems() )
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    } )
  }

  items = () => {
    const { items } = this.props
    return items.map( item =>
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
    )
  }

  render() {
    const { showForm } = this.state
    return (
      <Segment textAlign='center' style={ styles.base }>
        <Header as="h3" textAlign="center">
          Menu
        </Header>
        <Button onClick={ this.toggleForm }>
          { showForm ? "Hide Form" : "Show Form" }
        </Button>
        { showForm ?
          <EditItemForm closeForm={ this.toggleForm } />
          :
          <div>
            <Divider />
            <Card.Group>
              { this.items() }
            </Card.Group>
          </div>
        }
      </Segment>
    )
  }
}

var styles = {
  base: {
    background: `url(${ mainBackground }) no-repeat center fixed`,
    backgroundSize: 'cover',
    padding: 0,
  }
}

const mapStateToProps = ( state ) => {
  return { items: state.items }
}

export default connect( mapStateToProps )( EditMenu );