import React, { useContext } from 'react'
import { AppBar, Button, Container, Grid, Toolbar } from '@mui/material'
import { NavLink } from 'react-router-dom'

import './header.css'
import { axiosClient } from '../../api/api.config'
import { AuthContext } from '../app'



export default function Header() {

  const auth = useContext(AuthContext)

  const onSubmit = () => { axiosClient.delete(`/sessions/${auth.user.id}` )}

  const name = auth.user ? <h1 className='defaultTxt'>{auth.user.login}</h1> : <NavLink to={'/auth'}>Sign in</NavLink>
  const signOut = auth.user ? <Button onClick={onSubmit} className='myBtn'>Sign Out</Button> : null


  console.log(auth.user)
  return (
    <Container disableGutters maxWidth={false}>
      <AppBar position='static'>
        <Toolbar className='header'>
          <Grid
            container
            justifyContent='space-between'
            alignItems='center'
            spacing={0}
          >
            <Grid item>
              <NavLink className='NavLinkMain' to='/'>Wheel of Language</NavLink>
            </Grid>
            <Grid item>
              <NavLink className='NavLink' to='/test'>Test</NavLink>
            </Grid>
            <Grid item>
              <NavLink className='NavLink' to='/registration'>Registration</NavLink>
            </Grid>
            <Grid item>
              <NavLink className='NavLink' to='/personal'>Personal Page</NavLink>
            </Grid>

            <Grid item>
              <Grid container justifyContent='row' alignItems='center'>
                <Grid item>
             <h2>{name}</h2>
                </Grid>
                <Grid item margin={2}>
                  {signOut}
                </Grid>
              </Grid>
            </Grid>
          </Grid>


        </Toolbar>
      </AppBar>
    </Container>

  )
}

