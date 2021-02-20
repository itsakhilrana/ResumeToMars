import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import { useSelector, useDispatch, Provider } from 'react-redux'
import store from '../store'
import './DownloadScreen.css'
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
    <div className="DownloadScreen">
      <div className="Download_Info">
        <p>Hurry! You're on Mars!</p>
      <PDFDownloadLink style={{textDecoration:'none'}} document={<MyDoc />} fileName="ResumeToMars.pdf">
        {({ blob, url, loading, error }) =>
          loading ? <p style={{color:"white",fontSize:"16px"}}>Loading Please Wait...</p> : <div className="download_btn">Download</div>
        }
      </PDFDownloadLink>
      </div>
      

      
    </div>
  )
}

export default DownloadScreen


{/* <PDFViewer style={styles.pdfViewer}>
        <MyDoc></MyDoc>
      </PDFViewer> */}