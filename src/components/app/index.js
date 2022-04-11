import React, { Component, useState } from 'react'
import { Container, Grid } from '@mui/material'
import { Route, Routes, Switch } from 'react-router-dom'

//src
import HomePage from '../pages/homePage'
import PersonalPage from '../pages/personalPage'
import TestingPage from '../pages/testingPage'
import AuthPage from '../pages/authPage'
import RegistrationPage from '../pages/registrationPage'
import Header from '../Header'
import { axiosClient } from '../../api/api.config'

export default class App extends Component {

  state = {
    schoolBoy: {},
    onRegistrationPerson: false,
    onResult: true
  }

  componentDidMount() {
    this.getPerson()
  }

  getPerson() {
    axiosClient.get(`people/22`)
      .then(res => {
        const person = res
        this.setState({
          schoolBoy: person.data,
          onRegistrationPerson: true
        })
      })
      .catch(err => {
        console.log('Запрос не прошёл')
      })
  }

  render() {
    console.log(this.state.schoolBoy)
    const { onRegistrationPerson, onResult, schoolBoy } = this.state

    return (

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
                  <Route path="/personal"
                         element={<PersonalPage onRegistrationPerson={onRegistrationPerson} onResult={onResult}
                                                currentPerson={schoolBoy}/>}/>
                  <Route path="/test" element={<TestingPage onRegistrationPerson={onRegistrationPerson}
                                                            currentPerson={schoolBoy}/>}/>
                  <Route path="/auth" element={<AuthPage/>}/>
                  <Route path="/registration" element={<RegistrationPage/>}/>
              </Routes>
            </Grid>
          </Grid>
        </Container>

      </Container>
    );
  }
}
