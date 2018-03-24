import React from 'react';
import { getItems } from '../actions/items';
import { connect } from 'react-redux';
import mainBackground from '../images/mainBackground.jpg';
import { Segment, Card } from 'semantic-ui-react';

class Menu extends React.Component {

  componentDidMount() {
    this.props.dispatch( getItems() )
  }

  items = () => {
    return this.props.items.map( item =>
      < Card key={ item.id } >
        <Card.Header>
          { item.name }
          This is an Item
        </Card.Header>
        <Card.Content>
          { item.description }
        </Card.Content>
      </Card >
    )
  }

  render() {
    const { items } = this.props
    return (
      <Segment textAlign='center' style={ styles.base }>
        <Card.Group>
          { this.items() }
        </Card.Group>
      </Segment>
    )
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

const mapStateToProps = ( state ) => {
  return { items: state.items }
}

export default connect( mapStateToProps )( Menu );