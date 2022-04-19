import React, { createContext, useState } from 'react'
import { Container, Grid } from '@mui/material'
import { Route, Routes } from 'react-router-dom'

//src
import HomePage from '../pages/homePage'
import PersonalPage from '../pages/personalPage'
import TestingPage from '../pages/testingPage'
import AuthPage from '../pages/authPage'
import RegistrationPage from '../pages/registrationPage'
import Header from '../Header'

const defaultAuthContext = {
  isSignedIn: false,
  isLoading: false,
  isInfo: false,
  isResult: false,
  user: null,
  info: null,
  result: null,
  setUser: (user) => user
}

export const AuthContext = createContext(defaultAuthContext)


export default function App() {

  const [auth, setAuth] = useState(defaultAuthContext)

  const contextProps = {
    ...auth,
    setAuth
  }

  return (
    <AuthContext.Provider value={contextProps}>
      <Container disableGutters maxWidth={false}>
        <Header/>
        <Container maxWidth={false} style={{
          backgroundImage: `url("https://w-dog.ru/wallpapers/2/3/480397678075875.jpg")`,
          width: '100%',
          height: '1200px'
        }}>
          <Grid container>
            <Grid item xs={12}>
              <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/auth" element={<AuthPage/>}/>
                <Route path="/registration" element={<RegistrationPage/>}/>
                    <Route path="/test" element={<TestingPage />} />
                    <Route path="/personal" element={<PersonalPage />} />

              </Routes>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </AuthContext.Provider>
  )
}
