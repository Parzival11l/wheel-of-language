import React, { Component } from 'react'
import { Grid } from '@mui/material'
import Info from '../visibleInfoTable/info'
import FormInfo from '../visibleInfoTable/formInfo'
import MyBtn from '../myBtn'
import Result from './resultTest'

class PersonalAccount extends Component {

  state = {
    onResult: this.props.onResult,
    onVisibleInfo: this.props.visibleInfo
  }

  changeInfo = () => {
    console.log('Visible',this.props.onVisibleInfo)
    this.setState(({onVisibleInfo}) =>{
      return {
        onVisibleInfo: !onVisibleInfo
      }
    })
  }


  render() {
    const { currentPerson } = this.props
    const { onVisibleInfo, onResult } = this.state
    const visibleInfoTable = onVisibleInfo ? <Info currentPerson={currentPerson} onClickFunc={this.changeInfo} /> : <FormInfo currentPerson={currentPerson} onClickFunc={this.changeInfo} />
    const visibleResult = onResult ?  <Result /> : null
    console.log(currentPerson)
    return (
      <Grid
        container
        direction='column'
        maxWidth='xl'
        alignItems='center'
      >
        <Grid item xs={12}>
          <h1 className='mainTxt'>{currentPerson.name}</h1>

        </Grid>
        <Grid item xs={12}>
          {visibleInfoTable}


        </Grid>
        <Grid item>
          <Grid
            conteiner
            marginTop={12}
          >
            <Grid item xs={12} >
            {visibleResult}
          </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default PersonalAccount
