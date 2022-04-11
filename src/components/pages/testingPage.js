import React, { Component } from 'react'
import { Grid } from '@mui/material'
import MyBtn from '../myBtn'
import WindowTest from '../windowTest'
import ErrorTest from '../windowTest/errorTest'

class TestingPage extends Component {
  state = {
    onVisible: false,
    onRegistration: this.props.onRegistrationPerson
  }

 swapVisible = () => {
   console.log('Visible',this.state.onVisible)
    this.setState(({onVisible}) =>{
      return {
        onVisible: !onVisible
      }
    })
 }

  render() {
    console.log('TestingPage',this.props.currentPerson)
    const onVisibleTest = this.state.onRegistration ? (this.state.onVisible ? <WindowTest /> : <MyBtn onClickFunction={this.swapVisible} value='Start Test' />) : <ErrorTest />

    return (
      <Grid
        container
        alignItems='center'
        justifyContent='center'
        direction='column'>
        <Grid item>
          <h1 className='mainTxt'>Welcome to the test</h1>
        </Grid>
        <Grid item marginTop={25}>
          {onVisibleTest}
        </Grid>
      </Grid>
    )
  }
}

export default TestingPage
