import React, { useState } from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
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
    fontFamily: "Roboto regular"
  },
  pdfViewer: {
    width: '1000px',
    height: '700px',
  },
})



const MyDoc = ({name}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header name={name} />
      <Body></Body>
    </Page>
  </Document>
)

const Edit = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [about, setAbout] = useState('')

  return (
    <div className="EditScreen">
      <form>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br></br>
        <input
          type="text"
          value={email}
          placeholder="Name"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br></br>
        <input
          type="text"
          value={about}
          placeholder="Name"
          onChange={(e) => setAbout(e.target.value)}
        ></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
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

export default Edit
