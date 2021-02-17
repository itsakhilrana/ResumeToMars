// import React, { useState } from 'react'

// const EditScreen = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [about, setAbout] = useState('')

//   return (
//     <div>
//       <h1>EditScreen</h1>
//       <PDFDownloadLink document={myDoc} fileName="somename.pdf">
//         {({ blob, url, loading, error }) =>
//           loading ? 'Loading document...' : 'Download now!'
//         }
//         {console.log('Called')}
//       </PDFDownloadLink>
//       <form>
//         <input
//           type="text"
//           value={name}
//           placeholder="Name"
//           onChange={(e) => setName(e.target.value)}
//         ></input>
//         <br></br>
//         <input
//           type="text"
//           value={email}
//           placeholder="Name"
//           onChange={(e) => setEmail(e.target.value)}
//         ></input>
//         <br></br>
//         <input
//           type="text"
//           value={about}
//           placeholder="Name"
//           onChange={(e) => setAbout(e.target.value)}
//         ></input>
//         <br></br>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default EditScreen

import React, { useState } from 'react'
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
      <PDFDownloadLink
        document={
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text>{name}</Text>
              </View>
              <View style={styles.section}>
                <Text>Section #2</Text>
              </View>
            </Page>
          </Document>
        }
        fileName="somename.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink>
    </div>
  )
}

export default Edit
