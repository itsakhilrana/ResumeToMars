import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Edit from './screens/EditScreen'
import './App.css'
import HomeScreen from './screens/HomeScreen'

import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
   
  },
})

const MyDoc = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        <Text>sdsfsdfdf</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
)

function App() {
  return (
    <div className="App">
      <p className="Web_Name">ResumeToMars</p>
      {/* <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink> */}
      <Switch>
      <Route exact path='/' component={HomeScreen}></Route>
      <Route  path='/edit' component={Edit}></Route>
      </Switch>
    </div>
  )
}

export default App
