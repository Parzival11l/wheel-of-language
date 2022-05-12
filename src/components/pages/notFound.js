import React from 'react'
import { Grid, Typography } from '@mui/material'

export default function NotFound() {
  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Grid item marginTop={50}>
        <Typography fontSize={50} color='white' fontFamily='Ultra'>There are no such pages</Typography>
      </Grid>
    </Grid>
  )
}
