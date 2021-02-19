import React from 'react'

import { Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    blocks: {
      flexDirection: 'row',
      marginBottom:"10px"
    },
    projectBlock: {
      flexDirection: 'row',
      
      marginLeft:"3px",
      fontSize: 12,
      fontFamily: 'Roboto medium',
    },
    projectColumn: {
      flexDirection: 'column',
      marginLeft:"103px"
    },
    projectDetails: {
      flexDirection: 'column',
      marginLeft: '0px',
      fontSize: 12,
      marginBottom: '20px',
    },
    projectName: {
      fontFamily: 'Roboto medium',
    },
    date: {
      marginTop: '3px',
      fontFamily: 'Roboto light',
    },
    aboutProject: {
      marginTop: '5px',
      fontFamily: 'Roboto light',
      width:"350px"
    },
  })

const Projects = () => {
    return (
        <View style={styles.blocks}>
      <Text style={styles.projectBlock}>PROJECTS</Text>
      <View style={styles.projectColumn}>
        <View style={styles.projectDetails}>
          <Text style={styles.projectName}>Calculator </Text>
          <Text style={styles.date}>(Jun 2019 - Jul 2019)</Text>
          <Text style={styles.aboutProject}>
            During this training, I learned Java programming language from
            scratch. It was a nice aboutProject for me as, I am passionate and
            curious to learn new things.
          </Text>
        </View>

        <View style={styles.projectDetails}>
          <Text style={styles.projectName}>Calculator </Text>
          <Text style={styles.date}>(Jun 2019 - Jul 2019)</Text>
          <Text style={styles.aboutProject}>
            During this training, I learned Java programming language from
            scratch. It was a nice aboutProject for me as, I am passionate and
            curious to learn new things.
          </Text>
        </View>
      </View>
      
    </View>
    
    )
}

export default Projects
