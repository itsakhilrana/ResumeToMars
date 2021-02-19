import React from 'react'
import Education from './Education'
import Training from './Training'
import Skills from './Skills'
import Projects from './Projects'
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer'

const styles = StyleSheet.create({
  body: {
    // backgroundColor: 'red',
    height: 691,
    width: 600,
    paddingTop: 40,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 20,
  },

  blocks: {
    flexDirection: 'row',
  },
  educationBlock: {
    flexDirection: 'row',
    marginRight: '100px',
    fontSize: 12,
    fontFamily: 'Roboto medium',
  },
  educationColumn: {
    flexDirection: 'column',
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

const Body = () => {
  return (
    <View style={styles.body}>
      <Education />
      <Training/>
      <Skills/>
      <Projects/>
    </View>
  )
}

export default Body
