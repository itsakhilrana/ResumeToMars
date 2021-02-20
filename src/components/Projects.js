import React from 'react'

import { Text, View, StyleSheet } from '@react-pdf/renderer'
import {useSelector} from 'react-redux'

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

  const projectDetails = localStorage.getItem('projectDetails')
    ? JSON.parse(localStorage.getItem('projectDetails'))
    : {}
  const {projectName,projectDescription,projectLink} = projectDetails  
  
  return (
        <View style={styles.blocks}>
      <Text style={styles.projectBlock}>PROJECTS</Text>
      <View style={styles.projectColumn}>
        <View style={styles.projectDetails}>
          <Text style={styles.projectName}>{projectName} </Text>
          <Text style={styles.date}>{projectLink}</Text>
          <Text style={styles.aboutProject}>
            {projectDescription}
          </Text>
        </View>
      </View>
      
    </View>
    
    )
}

export default Projects
