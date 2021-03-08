import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'
import {useSelector} from 'react-redux'

const styles = StyleSheet.create({
  blocks: {
    flexDirection: 'row',
    marginBottom:"10px"
  },
  skillBlock: {
    flexDirection: 'row',

    marginLeft: '3px',
    fontSize: 12,
    fontFamily: 'Roboto medium',
  },
  skillColumn: {
    flexDirection: 'column',
    marginLeft: '123px',
  },
  skillDetails: {
    flexDirection: 'row',
    marginLeft: '0px',
    fontSize: 12,
    marginBottom: '20px',
  },
  skills: {
    fontFamily: 'Roboto medium',
    marginRight: '10px',
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  }
})
const Skills = () => {
  const SkillDetails = localStorage.getItem('SkillDetails')
    ? JSON.parse(localStorage.getItem('SkillDetails'))
    : {}
  const {Skill1,Skill2,Skill3,Skill4,Skill5,Skill6} = SkillDetails  
  return (
    <View style={styles.blocks}>
      <Text style={styles.skillBlock}>SKILLS</Text>
      <View style={styles.skillColumn}>
        <View style={styles.skillDetails}>
          <View style={styles.column}>
            <View style={styles.row}>
              <Text style={styles.skills}>{Skill1} </Text>
              <Text style={styles.skills}>{Skill2} </Text>
              <Text style={styles.skills}>{Skill3} </Text>
              <Text style={styles.skills}>{Skill4} </Text>
              <Text style={styles.skills}>{Skill5} </Text>
              <Text style={styles.skills}>{Skill6} </Text>
            </View>
          </View>
         
        </View>
      </View>
    </View>
  )
}

export default Skills
