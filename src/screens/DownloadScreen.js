import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Template1 from '../components/Template1'
import Template2 from '../components/Template2'
import { useSelector, useDispatch, Provider } from 'react-redux'
import { RESET_DETAILS } from '../constants/resumeConstants'
import onmars from '../imgs/onmars.svg'
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

const DownloadScreen = ({ history }) => {
  const personalDetails = localStorage.getItem('personalDetails')
    ? JSON.parse(localStorage.getItem('personalDetails'))
    : {}

  const { redirect } = personalDetails

  const [done, setDone] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {}, [])

  const MyDoc = () => (
    <Provider store={store}>
      <Document>
        <Page size="A4" style={styles.page}>
          {/* <Template2></Template2> */}
          {redirect === 'basic' ? (
            <Template1></Template1>
          ) : (
            <Template2></Template2>
          )}
        </Page>
      </Document>
    </Provider>
  )

  const clear = () => {
    localStorage.removeItem('personalDetails')
    localStorage.removeItem('educationDetails')
    localStorage.removeItem('schoolDetails')
    localStorage.removeItem('trainingDetails')
    localStorage.removeItem('projectDetails')
    dispatch({ type: RESET_DETAILS })
    history.push('/')
  }

  return (
    <div className="DownloadScreen">
      {/* <PDFViewer style={styles.pdfViewer}>
            <MyDoc></MyDoc>
          </PDFViewer> */}
      <div className="Download_Info">
        <img src={onmars}></img>
        <div>
          <p>Hurray! You're on Mars!</p>
         
          <PDFDownloadLink
            style={{ textDecoration: 'none' }}
            document={<MyDoc />}
            fileName="ResumeToMars.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                <p style={{ color: 'white', fontSize: '16px' }}>
                  Loading Please Wait...
                </p>
              ) : (
                <div className="download_btn" onClick={clear}>
                  Download Resume{' '}
                </div>
              )
            }
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  )
}

export default DownloadScreen
