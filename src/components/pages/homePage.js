import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import chel from '../image/Screenshot 2022-05-10 at 16.36.50.png'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'

const Image = styled('img')`
  width: 85%;
  height: 85%;
`

const StyledContainer = styled(Grid)`
    min-height: 100vh;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  `

const SButton = styled(Button)`
  font-size: 1.3vw;
  border-radius: 50%;
  width: 70%;
  min-width: 120px;
  aspect-ratio: 1 / 1;
  
`

const buttons= [
  { id: 0, name:'Registration', nav:'registration', color: 'success'},
  { id: 1, name:'Sign in', nav:'auth', color: 'secondary'},
  { id: 2, name:'Test', nav:'test', color: 'error'}
]

function HomePage() {
  const navigate = useNavigate()

  function onClick(nav) {
    navigate(`/${nav}`)
  }

  return (
    <StyledContainer
      alignItems='center'
      container
      justifyContent='center'
      style={{ backgroundColor: "#171e2e" }}
    >

      <Grid item xs={12} md={8}>
        <Grid container spacing={10}>
          <Grid item>
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  fontSize={70}
                  color='white'
                  fontFamily='Ultra'
                  align='center'
                >
                  Welcome to Wheel of Language
                </Typography>
                <Grid/>
              </Grid>

              <Grid item xs={12}>
                <Typography
                  fontSize={50}
                  fontFamily='Quicksand'
                  color='white'
                  align='center'
                >
                  Here you can assess your English
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent='center'>
              {buttons.map((button) => (
                <Grid item xs={3} key={button.id}>
                  <Grid container justifyContent='center'>
                    <SButton
                      fullWidth
                      onClick={() => {
                        onClick(button.nav)
                      }}
                      color={button.color}
                      variant='contained'
                    >
                      {button.name}
                    </SButton>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={4} marginTop={20}>
        <Box component="Image" sx={{ display: { md: 'none', lg: 'block' } }}>
          <Image alt='' src={chel}/>
        </Box>
      </Grid>

      <Grid item xs={12} marginLeft={10}>
        <Typography fontSize={50} color='white'>8(900)-125-63-37</Typography>
      </Grid>

    </StyledContainer>
  )
}

export default HomePage
