import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  blocks: {
    flexDirection: 'row',
    marginBottom:"10px"
  },
  educationBlock: {
    flexDirection: 'row',
    
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
  degree: {
    fontFamily: 'Roboto medium',
  },
  clgName: {
    marginTop: '5px',
    fontFamily: 'Roboto regular',
  },
  date: {
    marginTop: '3px',
    fontFamily: 'Roboto light',
  },
  cgpa: {
    marginTop: '5px',
    fontFamily: 'Roboto light',
  },
})

const Education = () => {
  return (
    <View style={styles.blocks}>
      <Text style={styles.educationBlock}>EDUCATION</Text>
      <View style={styles.educationColumn}>
        <View style={styles.educationDetails}>
          <Text style={styles.degree}>Bachelor of Technology (B.Tech) </Text>
          <Text style={styles.clgName}>
            SRI SUKHMANI INSTITUTE OF ENGINEERING & TECHNOLOGY
          </Text>
          <Text style={styles.date}>(Expected graduation Jun 2021)</Text>
          <Text style={styles.cgpa}>CGPA: 7.8</Text>
        </View>

        <View style={styles.educationDetails}>
          <Text style={styles.degree}>Bachelor of Technology (B.Tech) </Text>
          <Text style={styles.clgName}>
            SRI SUKHMANI INSTITUTE OF ENGINEERING & TECHNOLOGY
          </Text>
          <Text style={styles.date}>(Expected graduation Jun 2021)</Text>
          <Text style={styles.cgpa}>CGPA: 7.8</Text>
        </View>
      </View>
    </View>
  )
}

export default Education
