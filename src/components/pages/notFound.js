import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Grid item marginTop={50}>
        <Typography fontSize={50} color='white' fontFamily='Ultra'>There are no such pages</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent='center' alignItems='end'>
          <Button variant="outlined" onClick={()=>{navigate('/')}}>Home</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}
