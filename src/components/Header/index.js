import React, { useContext } from 'react'
import { AppBar, Button, Container, Grid, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import { useNavigate, NavLink } from 'react-router-dom'
import { axiosClient } from '../../api/api.config'
import { AuthContext } from '../app'

import './header.css'




export default function Header() {

  const navigate = useNavigate()

  const auth = useContext(AuthContext)

  const onSubmit = () => {
    axiosClient.delete(`/sessions/${auth.user.id}`)
    localStorage.removeItem('JWT')
  }

  const signOut = auth.user ? <Button
      onClick={onSubmit}
      variant="contained"
      href='/'
    >
      Sign Out</Button> :
    <Typography onClick={() => {navigate('/auth')}} fontSize={30}>
    Sign in</Typography>

  const reg = auth.user ? <h1 align='center' className='headLogin'>Hello, {auth.user.login}</h1> : null


  return (
    <Container disableGutters maxWidth={false}>
      <AppBar position='static'>
        <Toolbar className='header'>
          <Grid
            container
            justifyContent='space-around'
            alignItems='center'
          >
            <Grid item xs={4}>
              {reg}
            </Grid>
            <Grid item>
              {signOut}
            </Grid>
          </Grid>


        </Toolbar>
      </AppBar>
    </Container>

  )
}

