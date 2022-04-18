import React, { Component, useContext } from 'react'
import { Grid } from '@mui/material'
import PersonalAccount from '../personalAccount'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../app'


export default function PersonalPage() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

    !auth.isSignedIn && navigate('/auth')

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
          <PersonalAccount
            visibleInfo
            onResult
          />
        </Grid>
      </Grid>

    )
}
