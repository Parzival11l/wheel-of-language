import React, { Component } from 'react'
import { Grid } from '@mui/material'

class Result extends Component {
  render() {
    return (
     <Grid container>
       <Grid item>
         <h3 className='resultTable'>3.</h3>
       </Grid>
       <Grid item>
           <h3 className='resultTable'>15.03.2024</h3>
       </Grid>
       <Grid item>
           <h3 className='resultTable'>14 min 43 sec</h3>
       </Grid>
       <Grid item>
          <h3 className='resultTable'>You genius</h3>
       </Grid>

     </Grid>
    )
  }
}

export default Result



 {/*<Grid item>*/}
{/*  {currentPerson.map((res)=>{ return <li key={res.id}>res.date</li>})}*/}
{/*</Grid>*/}
{/*<Grid item>*/}
{/*  {currentPerson.map((res)=>{ return <li key={res.id}>res.time</li>})}*/}
{/*</Grid>*/}
{/*<Grid item>*/}
{/*  {currentPerson.map((res)=>{ return <li key={res.id}>res.result</li>})}*/}
{/*</Grid>*/}
