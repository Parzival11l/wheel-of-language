import React, { Component } from 'react'
import { AppBar, Container, Grid, Toolbar } from '@mui/material'
import { NavLink } from 'react-router-dom'

import './header.css'

class Header extends Component {
  render() {
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
                <NavLink className='NavLink' to='/auth'>Sign in</NavLink>
              </Grid>
              <Grid item>
                <NavLink className='NavLink' to='/personal'>Personal Page</NavLink>
              </Grid>
            </Grid>

          </Toolbar>
        </AppBar>
      </Container>

    )
  }
}


export default Header
