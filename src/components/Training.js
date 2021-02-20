import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'
import {useSelector} from 'react-redux'

const styles = StyleSheet.create({
  blocks: {
    flexDirection: 'row',
    marginBottom:"10px"
  },
  trainingBlock: {
    flexDirection: 'row',
    
    marginLeft:"3px",
    fontSize: 12,
    fontFamily: 'Roboto medium',
  },
  educationColumn: {
    flexDirection: 'column',
    marginLeft:"100px"
  },
  educationDetails: {
    flexDirection: 'column',
    marginLeft: '0px',
    fontSize: 12,
    marginBottom: '20px',
  },
  trainging: {
    fontFamily: 'Roboto medium',
  },
  company: {
    marginTop: '5px',
    fontFamily: 'Roboto regular',
  },
  date: {
    marginTop: '3px',
    fontFamily: 'Roboto light',
  },
  experience: {
    marginTop: '5px',
    fontFamily: 'Roboto light',
    width:"350px"
  },
})
const Training = () => {

  const trainingDetails = localStorage.getItem('trainingDetails')
    ? JSON.parse(localStorage.getItem('trainingDetails'))
    : {}
  const {company, jobtitle, startDate, endDate, about} = trainingDetails

  return (
    <View style={styles.blocks}>
      <Text style={styles.trainingBlock}>TRAININGS</Text>
      <View style={styles.educationColumn}>
        <View style={styles.educationDetails}>
          <Text style={styles.trainging}>{jobtitle} </Text>
          <Text style={styles.company}>
            {company}
          </Text>
          <Text style={styles.date}>{`(${startDate} - ${endDate})`}</Text>
          <Text style={styles.experience}>
            {about}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Training
