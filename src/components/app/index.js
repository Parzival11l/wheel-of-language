import React, { createContext, useEffect, useState } from 'react'
import { Container, Grid } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { axiosClient } from '../../api/api.config'

//src
import HomePage from '../pages/homePage'
import PersonalPage from '../pages/personalPage'
import AuthPage from '../pages/authPage'
import RegistrationPage from '../pages/registrationPage'
import Header from '../Header'
import NotFound from '../pages/notFound'

import './app.css'
import styled from '@emotion/styled'


const defaultAuthContext = {
  isSignedIn: false,
  isLoading: false,
  isInfo: false,
  isResult: false,
  user: null,
  setUser: (user) => user
}

export const AuthContext = createContext(defaultAuthContext)

const StyledContainer = styled(Container)`
  height: 100vh;
`


export default function App() {

  const [auth, setAuth] = useState(defaultAuthContext)
  const contextProps = {
    ...auth,
    setAuth
  }
  useEffect(() => {
    axiosClient.get('/users/sign_in', {
      headers: {
        'Authorization': localStorage.getItem('JWT')
      }
    })
      .then((response) => {
        setAuth({
          ...auth,
          isLoading: false,
          isSignedIn: true,
          user: response.data.user
        })
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <AuthContext.Provider value={contextProps}>
      <StyledContainer disableGutters maxWidth={false} style={{ backgroundColor: "#171e2e" }}>
        <Grid container>
          <Grid item xs={12}>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/auth" element={<AuthPage/>}/>
              <Route path="/registration" element={<RegistrationPage/>}/>
              <Route path='/*' element={<NotFound/>}/>
              {auth.user && (
                <>
                  <Route path="/personal" element={<PersonalPage/>}/>
                </>
              )
              }
            </Routes>
          </Grid>
        </Grid>
      </StyledContainer>
    </AuthContext.Provider>
  )
}
