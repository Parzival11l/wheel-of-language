import React, { Component } from 'react'
import { FormControl, Grid } from '@mui/material'
import MyBtn from '../myBtn'

class FormInfo extends Component {

  render() {
    return (
      <Grid
        container
        justifyContent='center'
      >
        <FormControl>
          <input placeholder='FirstName' className='input'/>
          <input placeholder='LastName' className='input'/>
          <input placeholder='Age' className='input'/>
          <input placeholder='School' className='input'/>
          <input placeholder='Disability' className='input'/>
        <MyBtn value='Send' onClickFunction={this.props.onClickFunc}/>
        </FormControl>
      </Grid>
    )
  }
}

export default FormInfo
