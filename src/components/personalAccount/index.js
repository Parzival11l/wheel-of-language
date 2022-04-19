import React, { useContext, useEffect } from 'react'
import { Grid } from '@mui/material'
import Info from '../visibleInfoTable/info'
import FormInfo from '../visibleInfoTable/formInfo'
import Result from './resultTest'
import { axiosClient } from '../../api/api.config'
import { AuthContext } from '../app'

export default function PersonalAccount() {

  const auth = useContext(AuthContext)

  useEffect(() => {
    axiosClient.get(`/infos/${auth.user.id}`)
      .then(response => {
        auth.setAuth({
          ...auth,
          info: response.data.info,
          isInfo: true
        })
      })
      .catch(err => {
        console.log('Запрос не прошёл')
      })

    axiosClient.get(`/results/${auth.user.id}`)
      .then(response => {
        auth.setAuth({
          ...auth,
          result: response.data.result,
          isResult: true
        })
      })
      .catch(err => {
        console.log('Запрос не прошёл')
      })
  },[])


  const name = auth.info ? <h1 className='mainTxt'>{auth.info.first_name} {auth.info.last_name}</h1>  : <h1 className='mainTxt'>Personal Page</h1>
  const visibleInfoTable = auth.isInfo ? <Info /> : <FormInfo />
  const visibleResult = auth.result ? <Result /> : null

  return (
    <Grid
      container
      direction='column'
      maxWidth='xl'
      alignItems='center'
    >
      <Grid item xs={12}>
       {name}
      </Grid>
      <Grid item xs={12}>
        {visibleInfoTable}
      </Grid>
      <Grid item>
        <Grid
          container
          marginTop={12}
        >
          <Grid item xs={12}>
            {visibleResult}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

