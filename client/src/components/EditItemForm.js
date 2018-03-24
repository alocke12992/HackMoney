import React from 'react';
import { connect } from 'react-redux';
import { addItem, updateItem } from '../actions/items';
import { Form, Grid, Image } from 'semantic-ui-react';

class EditItemForm extends React.Component {

  initialState = {
    name: '', description: '', price: '', image: ''
  }
  state = { ...this.initialState }



  componentDidMount() {
    if ( this.props.id )
      this.setState( { ...this.props } )
  }

  handleChange = ( e ) => {
    const { name, value } = e.target
    this.setState( { [name]: value } )

  }

  handleSubmit = ( e ) => {
    e.preventDefault()
    const item = { ...this.state }
    const { closeForm, dispatch } = this.props
    const func = this.props.id ? updateItem : addItem
    dispatch( func( item ) )
    closeForm()
  }

  render() {
    const { name, description, price, image } = this.props

    return (
      <Form onSubmit={ this.handleSubmit }>
        <Form.Input
          name="image"
          required
          value={ image }
          onChange={ this.handleChange }
          label="Image"
        />
        <Form.Input
          name="name"
          required
          defaultValue={ name }
          onChange={ this.handleChange }
          label="Name"
        />
        <Form.TextArea
          name="description"
          defaultValue={ description }
          onChange={ this.handleChange }
          label="Description"
        />
        <Form.Input
          name="price"
          defaultValue={ price }
          type="number"
          min="0"
          onChange={ this.handleChange }
          label="Price"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()( EditItemForm );
