import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import { useSelector } from 'react-redux'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  header: {
    color: 'white',
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
  name_Container: {
    flexDirection: 'row',
  },
  userName: {
    fontSize: 20,
    fontFamily: 'Roboto regular',
    borderBottomWidth: 4,
    borderBottomColor: 'white',
    borderBottomStyle: 'solid',
    marginTop: 5,
  },
  userProfession: {
    fontSize: 12,
    fontWeight: 700,
    marginLeft: '10px',
    marginTop: '13px',
  },
  userPunch: {
    fontSize: 12,
    marginTop: 20,
  },
  linkColumn: {
    flexDirection: 'column',
    marginLeft: '100px',
    alignItems:"flex-end"
  },
  links: {
    fontSize: 10,
    
  },
})

const Header = () => {
  const personalDetails = localStorage.getItem('personalDetails')
    ? JSON.parse(localStorage.getItem('personalDetails'))
    : {}
  const { name, email, about, phoneNo, profession } = personalDetails

  return (
    <View style={styles.header}>
      <View style={styles.header_Container}>
        <View style={styles.infoColumn}>
          <View style={styles.name_Container}>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userProfession}>{profession}</Text>
          </View>

          <Text style={styles.userPunch}>{about}</Text>
        </View>
        <View style={styles.linkColumn}>
          <Text style={styles.links}>{email}</Text>
          <Text style={styles.links}>+91 {" "}{phoneNo}</Text>
          {/* <Text style={styles.links}>linkdedIn.com</Text> */}
        </View>
      </View>
    </View>
  )
}

export default Header
