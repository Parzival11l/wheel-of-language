import React, { useContext } from 'react'
import { Button, Grid } from '@mui/material'
import { AuthContext } from '../app'

export default function Info() {

  const auth = useContext(AuthContext)

  const onClickFunc = () => {
    auth.setAuth({
      ...auth,
      isInfo: false
    })
  }

  return (
    <Grid
      container
      direction='column'
      alignItems='center'
    >
      <Grid item>
        <h1 className='defaultTxt'>Age: {auth.info.age}</h1>
      </Grid>
      <Grid item>
        <h1 className='defaultTxt'>School: {auth.info.school}</h1>
      </Grid>
      <Grid item>
        <h1 className='defaultTxt'>Disability: {auth.info.disabled}</h1>
      </Grid>
      <Grid item marginTop={3.5}>
        <Button onClick={onClickFunc} className='myBtn'>Change Info</Button>
      </Grid>
    </Grid>
  )
}

