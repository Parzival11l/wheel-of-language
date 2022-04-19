import React, { useContext } from 'react'
import { Grid } from '@mui/material'
import { AuthContext } from '../app'

export default function Result() {

  const auth = useContext(AuthContext)

    return (
     <Grid container>
       {/*<Grid item>*/}
       {/*  {auth.result.map((res)=>{ return <li key={res.id}>{res.date}</li>})}*/}
       {/*</Grid>*/}
       {/*<Grid item>*/}
       {/*  {auth.result.map((res)=>{ return <li key={res.id}>{res.time}</li>})}*/}
       {/*</Grid>*/}
       {/*<Grid item>*/}
       {/*  {auth.result.map((res)=>{ return <li key={res.id}>{res.result}</li>})}*/}
       {/*</Grid>*/}hui
     </Grid>
    )
}

