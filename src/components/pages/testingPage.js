import React, { useContext, useState } from 'react'
import { Button, Grid } from '@mui/material'
import WindowTest from '../windowTest'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../app'

export default function TestingPage() {

  const [onVisible, setOnVisible] = useState(false)

  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  !auth.isSignedIn && navigate('/auth')


    const onVisibleTest =  onVisible ? <WindowTest /> : <Button onClick={() => setOnVisible(true)} variant="contained"> Start Test </Button>

    return (
      <Grid
        container
        alignItems='center'
        justifyContent='center'
        direction='column'>
        <Grid item>
          <h1 className='mainTxt'>Welcome to the test</h1>
        </Grid>
        <Grid item marginTop={25}>
          {onVisibleTest}
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent='center' alignItems='end'>
            <Button variant="outlined" onClick={()=>{navigate('/')}}>Home</Button>
          </Grid>
        </Grid>
      </Grid>
    )
}

