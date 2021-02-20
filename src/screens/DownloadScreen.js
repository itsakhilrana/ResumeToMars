import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import { useSelector, useDispatch, Provider } from 'react-redux'
import store from '../store'
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
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
    fontFamily: 'Roboto regular',
  },
  pdfViewer: {
    width: '1000px',
    height: '700px',
  },
})

const MyDoc = () => (
  <Provider store={store}>
    <Document>
      <Page size="A4" style={styles.page}>
        <Header />
        <Body></Body>
      </Page>
    </Document>
  </Provider>
)

const DownloadScreen = () => {
  return (
    <div>
      {/* <PDFViewer style={styles.pdfViewer}>
        <MyDoc name={name}></MyDoc>
      </PDFViewer> */}

      <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink>
    </div>
  )
}

export default DownloadScreen
