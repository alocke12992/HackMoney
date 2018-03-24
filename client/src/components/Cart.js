import React, { Component } from 'react'
import axios from 'axios'
import { setHeaders } from '../actions/headers'
import { connect } from 'react-redux'
import { Button, Modal, Header, Icon, Segment, Table, Container } from 'semantic-ui-react'

class Cart extends Component {

  state = { cartItems: [], modalOpen: false }

  componentWillMount() {
    axios.get( '/api/index_cart' )
      .then( res => {
        this.setState( { cartItems: res.data } )
        this.props.dispatch( setHeaders( res.headers ) )
      } )
  }

  displayCartItem = () => {
    return this.state.cartItems.map( each => {
      return (
        <Table>
          <Table.Header>
            <Table.HeaderCell > { each.name }  </Table.HeaderCell>
            <Table.HeaderCell > ${ each.price }</Table.HeaderCell>
          </Table.Header>
        </Table>
      )
    } )
  }

  handleOpen = () => this.setState( { modalOpen: true } )
  handleClose = () => this.setState( { modalOpen: false } )

  render() {
    return (

      <div style={ styles.image }>
        <Segment style={ styles.opacity }>
          <Header as='h1' textAlign='center'>Cart Component</Header>
          <Container>
            { this.displayCartItem() }
          </Container>
          <br />
          <Container>
            <Modal
              trigger={ <Button onClick={ this.handleOpen }>Total</Button> }
              basic size='small'
              open={ this.state.modalOpen }
              onClose={ this.handleClose }
            >
              <Header icon='archive' content='Confirm Your Order' />
              <Modal.Content>
                { this.displayCartItem() }
              </Modal.Content>
              <Modal.Actions>
                <Button color='green' onClick={ this.handleClose } inverted>
                  <Icon name='checkmark' /> Yes
            </Button>
              </Modal.Actions>
            </Modal>
          </Container>
        </Segment>

      </div>
    )
  }

}

const styles = {
  image: {
    backgroundSize: "cover"
  },
  opacity: {
    backgroundColor: "rgba(200, 200, 200, 0)",
    height: "100vh"
  }
}

export default connect()( Cart );