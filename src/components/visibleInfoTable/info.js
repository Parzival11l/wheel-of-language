import React, { useContext, useEffect, useState } from 'react'
import { Button, FormControl, Grid, Typography } from '@mui/material'
import { AuthContext } from '../app'
import { axiosClient } from '../../api/api.config'

export default function Info() {


  const auth = useContext(AuthContext)
  const [info, setInfo] = useState('')
  const [isInfo, setIsInfo] = useState(true)

  useEffect(() => {
    axiosClient.get(`/infos/${auth.user.id}`)
      .then(response => {
        setInfo(response.data.info)
      })
      .catch(err => {
        console.log(err)
      })
  }, [info.age])

  const onClickFunc = () => {
    setIsInfo(!isInfo)
  }
  const name = info ? <Typography align='center' fontFamily='Open Sans' fontSize={50} color='white'>{info.first_name} {info.last_name}</Typography> :
    <Typography align='center' fontSize={50}>Personal Page</Typography>
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [disabled, setDisabled] = useState('')

  const onSubmit = () => {
    axiosClient.put(`/infos`, {
      info: {
        first_name: firstName,
        last_name: lastName,
        age: age,
        disabled
      }
    })
      .then(response => {
        setInfo(response.data.info)
      })
      .catch(err => {
        console.log(err)
      })
    setIsInfo(!isInfo)
  }
  const onSubmitTwo = () => {
    setIsInfo(!isInfo)
  }

  if (isInfo) {
    return (
      <Grid
        container
        spacing={5}
        alignItems='center'
        justifyContent='center'
      >
        <Grid item xs={4}>
          {name}
        </Grid>
        <Grid item xs={4}>
          <Typography color='white' fontFamily='Open Sans' fontSize={40}>Disability: {info.disabled}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography color='white' fontFamily='Open Sans' fontSize={40}>Age: {info.age}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={onClickFunc} color='secondary' variant="contained">Change Info</Button>
        </Grid>
      </Grid>
    )
  } else {
    return (
      <Grid
        container
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xs={5}>
          <FormControl>
            <input
              type='text'
              value={firstName}
              placeholder='FirstName'
              className='input'
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type='text'
              value={lastName}
              placeholder='LastName'
              className='input'
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type='text'
              value={age}
              placeholder='Age'
              className='input'
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <input
              type='text'
              value={disabled}
              placeholder='Disability'
              className='input'
              onChange={(e) => setDisabled(e.target.value)}
              required
            />
          </FormControl>
        </Grid>
        <Grid item xs={1}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                onClick={onSubmit}
                variant="contained"
                color='secondary'
                disabled={!firstName || !lastName || !age || !disabled}
              >
                Send</Button>
            </Grid>
            <Grid item xs={12}>
              <Button onClick={onSubmitTwo} variant="contained">Already Filed</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
