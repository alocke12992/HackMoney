import React from 'react';
import { connect } from 'react-redux';
import { addItem, updateItem } from '../actions/items';
import { Form } from 'semantic-ui-react';

class EditItemForm extends React.Component {
  initialState = {
    name: '',
    description: '',
    price: '',
  }

  state = { ...this.initialState }

  componentDidMount() {
    if ( this.props.id )
      this.setState( { ...this.props } )
  }
  handleChange = ( e ) => {
    const { name, value } = e.target;
    this.setState( { [name]: value } )
  }

  handleSubmit = ( e ) => {
    e.preventDefault();
    const item = { ...this.state }
    const { dispatch, closeForm } = this.props;
    const func = this.props.id ? updateItem : addItem
    dispatch( func( item ) )
    this.setState( { ...this.initialState } )
    closeForm();
  }

  render() {
    const { name, description, price } = this.state
    return (
      <Form onSubmit={ this.handleSubmit }>
        <Form.Input
          name="name"
          required
          value={ name }
          onChange={ this.handleChange }
          label="Name"
        />
        <Form.TextArea
          name="description"
          value={ description }
          onChange={ this.handleChange }
          label="Description"
        />
        <Form.Input
          name="price"
          value={ price }
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