import React, { useContext } from 'react'
import { Box, Button, Grid } from '@mui/material'
import Info from '../visibleInfoTable/info'
import Result from './resultTest'

import '../pages/pagescss/personalPage.css'
import chel3 from '../image/Screenshot 2022-05-11 at 16.22.05.png'
import styled from '@emotion/styled'
import { axiosClient } from '../../api/api.config'
import { AuthContext } from '../app'
import { useNavigate } from 'react-router-dom'

export default function PersonalAccount() {

  const navigate = useNavigate()
  const auth = useContext(AuthContext)

  const onSubmit = () => {
    axiosClient.delete(`/sessions/${auth.user.id}`)
    localStorage.removeItem('JWT')
  }

  const Image = styled('img')`
    width: 100%;
    height: 100%;
  `

  const StyledContainer = styled(Grid)`
    min-height: 100vh;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  `
  return (
    <StyledContainer
      container
      justifyContent='center'
      style={{ backgroundColor: "#37425d" }}
      spacing={5}
      alignItems='center'
    >
      <Grid item xs={12} md={7}>
        <Info/>
      </Grid>

      <Grid item xs={12} md={5}>
        <Box component="Image" sx={{ display: { xs: 'none', md: 'block' } }}>
          <Grid container justifyContent='end'>
            <Image alt='' src={chel3}/>
          </Grid>
        </Box>

      </Grid>

      <Grid item xs={6} marginBottom={10}>
        <Result/>
      </Grid>
      <Grid item xs={12} marginBottom={10}>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <Grid container justifyContent='end'>
              <Button variant="contained" onClick={() => {navigate('/')}}>Home</Button>
            </Grid>

          </Grid>
          <Grid item xs={6}>

            <Button
              onClick={onSubmit}
              variant="contained"
              color='secondary'
              href='/'
            >
              Sign Out
            </Button>
          </Grid>
        </Grid>
      </Grid>


    </StyledContainer>
  )
}

