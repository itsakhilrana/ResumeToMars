import React from 'react'
import { Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer'




const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  header: {
      color:"white",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,

    backgroundColor: '#202327',
    height: '150px',
    width: '600px',
  },
  header_Container: {
    padding: '10',
    flexDirection: 'row',
  },
  infoColumn: {
    flexDirection: 'column',
    width: '280px',
    marginRight: '50px',
  },

  userName: {
    fontSize: 20,
    fontFamily:"Roboto regular"
  },
  userProfession: {
    fontSize: 12,
    fontWeight: 700,
  },
  line: {
    borderBottomWidth: 4,
    borderBottomColor: 'white',
    borderBottomStyle: 'solid',
    marginTop: 5,
    width: 100,
  },
  userPunch: {
    fontSize: 12,
    marginTop: 20,
  },
  linkColumn: {
    flexDirection: 'column',
    marginLeft: '80px',
  },
  links: {
    fontSize: 10,
  },
})



const Header = ({ name }) => {
  return (
    <View style={styles.header}>
      <View style={styles.header_Container}>
        <View style={styles.infoColumn}>
          <Text style={styles.userName}>
            Your Name{'  '}
            <Text style={styles.userProfession}>Developer & Designer</Text>
          </Text>
          <View style={styles.line}></View>
          <Text style={styles.userPunch}>
            Everything I do, I choose to do with respect. I believe in the
            creation as it make our lives better, easier and more fun.
          </Text>
        </View>
        <View style={styles.linkColumn}>
          <Text style={styles.links}>example@.com</Text>
          <Text style={styles.links}>xyzfrom1to0.com</Text>
          <Text style={styles.links}>linkdedIn.com</Text>
        </View>
      </View>
    </View>
  )
}

export default Header
