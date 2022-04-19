import React, { useContext, useState } from 'react'
import { Button, FormControl, Grid } from '@mui/material'
import { axiosClient } from '../../api/api.config'

import '../myBtn/myBtn.css'
import { AuthContext } from '../app'

export default function FormInfo() {

  const auth = useContext(AuthContext)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [school, setSchool] = useState('')
  const [disabled, setDisabled] = useState('')

  const onSubmit = () => {
    axiosClient.put(`/infos/${auth.user.id}`, {
      info: {
        first_name: firstName,
        last_name: lastName,
        age,
        school,
        disabled
      }})
      .then(() => {
        auth.setAuth({
          ...auth,
          isInfo: true
        })
      })
      .catch((error) => {
        console.log(error)
      })}

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      direction='column'
    >
      <Grid item>
      <FormControl>
        <input
          type='text'
          value={firstName}
          placeholder='FirstName'
          className='input'
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type='text'
          value={lastName}
          placeholder='LastName'
          className='input'
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type='number'
          value={age}
          placeholder='Age'
          className='input'
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type='text'
          value={school}
          placeholder='School'
          className='input'
          onChange={(e) => setSchool(e.target.value)}
        />
        <input
          type='text'
          value={disabled}
          placeholder='Disability'
          className='input'
          onChange={(e) => setDisabled(e.target.value)}
        />
      </FormControl>
      </Grid>
      <Grid item>
      <Button onClick={onSubmit} className='myBtn'>Send</Button>
      </Grid>
    </Grid>
  )
}

