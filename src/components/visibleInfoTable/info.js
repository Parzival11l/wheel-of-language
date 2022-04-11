import React, { Component } from 'react'
import { Grid } from '@mui/material'
import MyBtn from '../myBtn'

class Info extends Component {
  render() {
    const { currentPerson, onClickFunc } = this.props
    return (
     <Grid
       container
       direction='column'
       alignItems='center'
     >
        <Grid item>
          <h1>{currentPerson.name}</h1>
        </Grid>
       <Grid item>
         <h1>{currentPerson.name}</h1>
       </Grid>
       <Grid item>
          <h1>{currentPerson.birth_year}</h1>
       </Grid>
       <Grid item>
           <h1>{currentPerson.eye_color}</h1>
       </Grid>
       <Grid item>
         <h1>{currentPerson.gender}</h1>
       </Grid>
       <Grid item marginTop={3.5}>
         <MyBtn onClickFunction={onClickFunc} value='Change'/>
       </Grid>
     </Grid>
    )
  }
}

export default Info
