import React, { Component } from 'react'
import { Grid } from '@mui/material'
import ErrorTest from '../windowTest/errorTest'
import PersonalAccount from '../personalAccount'


class PersonalPage extends Component {
  state = {
    visibleInfo: false,
    onResult: this.props.onResult
  }


  render() {

    const onVisiblePersonalPage= this.props.onRegistrationPerson ? <PersonalAccount visibleInfo={this.state.visibleInfo} onResult={this.state.onResult} currentPerson={this.props.currentPerson} /> : <ErrorTest />

    return (
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
      >
        <Grid item xs={12}>
          <h1 className='mainTxt'>Personal Page</h1>
        </Grid>
        <Grid item xs={12}>
          {onVisiblePersonalPage}
        </Grid>
      </Grid>

    )
  }
}

export default PersonalPage
