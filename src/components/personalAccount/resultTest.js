import React, { useEffect, useState } from 'react'
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import '../pages/pagescss/personalPage.css'
import { axiosClient } from '../../api/api.config'
import moment from 'moment'

export default function Result() {

  const [results, setResults] = useState([])

  useEffect(() => {
    axiosClient.get(`/results`)
      .then(response => {
        setResults(response.data)
      })

      .catch(err => {
        console.log('Error')
      })
  }, [])

 if (!results) return null

  return (
    <Grid container>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Game Time</TableCell>
              <TableCell align="right">Time start</TableCell>
              <TableCell align="right">Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((result) => (
              <TableRow key={result.id}>
                <TableCell component="th" scope="row">{result.id}</TableCell>
                <TableCell align="right">{moment(result.date).format('MMMM, dddd Do, YYYY')}</TableCell>
                <TableCell align="right">{moment(result.game_time).format('h:mm:ss a')}</TableCell>
                <TableCell align="right">{moment(result.time_start).format('h:mm:ss a')}</TableCell>
                <TableCell align="right">{result.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  )
}

