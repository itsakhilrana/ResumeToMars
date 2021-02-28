import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

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
    marginLeft: '50px',
    alignItems: 'flex-end',
  },
  links: {
    fontSize: 10,
  },
})

const Template2 = () => {
  return (
    <View style={styles.header}>
      <View style={styles.header_Container}>
        <View style={styles.infoColumn}>
          <View style={styles.name_Container}>
            <Text style={styles.userName}>Template 2</Text>
            <Text style={styles.userProfession}>fdsfdd</Text>
          </View>

          <Text style={styles.userPunch}>dfdgdfgfd</Text>
        </View>
        <View style={styles.linkColumn}>
          <Text style={styles.links}>fgfdgdfgfd</Text>
          <Text style={styles.links}>gfdgfgfhf</Text>
          {/* <Text style={styles.links}>linkdedIn.com</Text> */}
        </View>
      </View>
    </View>
  )
}

export default Template2
