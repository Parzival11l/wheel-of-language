import React, { Component } from 'react'
import { AppBar, Button, Container, Grid, Toolbar } from '@mui/material'
import { NavLink } from 'react-router-dom'

import './header.css'
import { axiosClient } from '../../api/api.config'

class Header extends Component {

  render() {
  // const { currentPerson } = this.props
    const onSubmit = () => {
      axiosClient.delete('/users/sign_out', {})
    }
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

              <Grid item>
                <Button
                  className='regBtn'
                  onClick={onSubmit}
                >
                  {/*<h3>{currentPerson.name} Sign out</h3>*/}
                </Button>
              </Grid>
            </Grid>


          </Toolbar>
        </AppBar>
      </Container>

    )
  }
}

export default Header
