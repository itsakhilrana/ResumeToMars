import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

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
  return (
    <View style={styles.blocks}>
      <Text style={styles.trainingBlock}>TRAININGS</Text>
      <View style={styles.educationColumn}>
        <View style={styles.educationDetails}>
          <Text style={styles.trainging}>Core Java </Text>
          <Text style={styles.company}>
            A & H Software Solutions CHD, Chandigarh
          </Text>
          <Text style={styles.date}>(Jun 2019 - Jul 2019)</Text>
          <Text style={styles.experience}>
            During this training, I learned Java programming language from
            scratch. It was a nice experience for me as, I am passionate and
            curious to learn new things.
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Training
