import axios from 'axios'
export const ITEMS = 'ITEMS'
export const ADD_ITEM = 'ADD_ITEM'
export const UPDATE_ITEM = 'UPDATE_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'

export const getItems = () => {
  return ( dispatch ) => {
    axios.get( '/api/items' )
      .then( res => dispatch( { type: ITEMS, items: res.data, headers: res.headers } ) )
  }
}

export const addItem = ( item ) => {
  return ( dispatch ) => {
    axios.post( '/api/items', { item } )
      .then( res => dispatch( { type: ADD_ITEM, item: res.data, headers: res.headers } ) )
  }
}

export const updateItem = ( item ) => {
  return ( dispatch ) => {
    axios.put( `/api/items/${ item.id }`, { item } )
      .then( res => dispatch( { type: UPDATE_ITEM, item: res.data, headers: res.headers } ) )
  }
}

export const deleteItem = ( id ) => {
  return ( dispatch ) => {
    axios.delete( `/api/items/${ id }` )
      .then( () => dispatch( { type: DELETE_ITEM, id } ) )
  }
}
