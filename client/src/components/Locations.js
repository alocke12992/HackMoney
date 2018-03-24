import React from 'react'
import { Segment, Grid, Header, Divider } from 'semantic-ui-react';
import MyMapComponent from './MyMapComponent';
import styled from 'styled-components';

class Locations extends React.Component {

  render() {
    return (
      <div>
        <Divider hidden ></Divider>
        <Grid container columns={ 2 }>
          <Grid.Column >
            <Header as='h2' textAlign='center'>
              Contact Info
          </Header>
            <Segment padded as={ Transparent }>
              Phone:
              Email:
              Facebook:
              Twitter:
          </Segment>
          </Grid.Column>
          <Grid.Column>
            <Header as='h2' textAlign='center'>Come See Us!</Header>
            <Segment>
              <MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={ <div style={ { height: `100%` } } /> }
                containerElement={ <div style={ { height: `400px` } } /> }
                mapElement={ <div style={ { height: `100%` } } /> }
              />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const Transparent = styled.div`
  background: transparent !important;
  height: 430px;
`

export default Locations;  