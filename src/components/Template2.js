import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  Template2: {
    paddingTop: 45,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 45,
    backgroundColor: 'white',
    height: '100%',
    flexDirection: 'row',
    color: '#1e2126',
  },
  left: {
    flexDirection: 'column',
    width: '300px',
    // backgroundColor: 'red',

    marginRight: 10,
  },
  right: {
    flexDirection: 'column',
    width: '170px',
    // backgroundColor: 'red',

    marginLeft: 10,
  },
  header: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 25,
    fontFamily: 'Roboto medium',
  },
  userProfession: {
    fontSize: 12,
    fontFamily: 'Roboto medium',
  },
  userPunch: {
    fontSize: 12,
    width: '270px',
    marginTop: '10px',
    fontFamily: 'Roboto regular',
  },
  projectBlock: {
    flexDirection: 'column',
    marginTop: '30px',
  },
  project: {
    fontSize: 12,
    fontFamily: 'Roboto medium',
  },
  projectContainer: {
    marginLeft: '25px',
    marginTop: '15px',
  },
  projectContainer2: {
    marginLeft: '0px',
    marginTop: '15px',
    fontSize: 12,
  },
  projectName: {
    fontSize: 12,
    fontFamily: 'Roboto medium',
  },
  aboutProject: {
    marginTop: '5px',
    fontSize: 12,
    width: '260px',
    fontFamily: 'Roboto light',
  },
  skillName: {
    fontSize: 12,
    width: '45px',
    lineHeight: '2',
  },
  company: {
    fontSize: 12,
    fontFamily: 'Roboto regular',
    marginTop: '2px',
  },
  contactInfo: {
    fontSize: 12,
    fontFamily: 'Roboto light',
  },
  achievementList: {
    fontFamily: 'Roboto light',
    fontSize: 12,
    marginBottom: '5px',
  },
  degree: {
    fontFamily: 'Roboto medium',
  },
  clgName: {
    marginTop: '5px',
    fontFamily: 'Roboto regular',
  },
  date: {
    marginTop: '3px',
    fontFamily: 'Roboto light',
  },
  cgpa: {
    marginTop: '5px',
    fontFamily: 'Roboto light',
  },
  divider: {
    marginRight: '25px',
    width: '1px',
    backgroundColor: '#A6A6A6',
  },
  line: {
    height: '100%',
    width: '1px',
    backgroundColor: '#A6A6A6',
    marginTop: '15px',
  },
  row: {
    flexDirection: 'row',
  },
  rightContainer: {
    flexDirection: 'row',
  },
  rightBlocks: {
    flexDirection: 'column',
    paddingBottom: '20px',
  },
})

const Template2 = () => {

  

  const personalDetails = localStorage.getItem('personalDetails')
    ? JSON.parse(localStorage.getItem('personalDetails'))
    : {}
  const { name, email, about, phoneNo, profession } = personalDetails

  const projectDetails = localStorage.getItem('projectDetails')
    ? JSON.parse(localStorage.getItem('projectDetails'))
    : {}

    const trainingDetails = localStorage.getItem('trainingDetails')
    ? JSON.parse(localStorage.getItem('trainingDetails'))
    : {}
  const {company, jobtitle, startDate, endDate, about:aboutJob} = trainingDetails

  const {
    projectName,
    projectDescription,
    projectLink,
    projectName2,
    projectDescription2,
    projectLink2,
  } = projectDetails

  const {projectDetails:p} = localStorage.getItem('projectDetails')
  ? JSON.parse(localStorage.getItem('projectDetails'))
  : {}
const {skills} = p 

const educationDetails = localStorage.getItem('educationDetails')
    ? JSON.parse(localStorage.getItem('educationDetails'))
    : {}
  const { degree, college, cgpa, endDate:educationendDate } = educationDetails
 

  return (
    <View style={styles.Template2}>
      <View style={styles.left}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.userProfession}>{profession}</Text>
          <Text style={styles.userPunch}>{about}</Text>
        </View>
        <Text></Text>

        {/* Projects */}
        <View style={styles.projectBlock}>
          <Text style={styles.project}>PROJECTS</Text>
          <View style={styles.row}>
            <View style={styles.line}></View>
            <View>
              <View style={styles.projectContainer}>
                <Text style={styles.projectName}>{projectName}</Text>

                <Text style={styles.aboutProject}>{projectDescription}</Text>
              </View>
              <View style={styles.projectContainer}>
                <Text style={styles.projectName}>{projectName2}</Text>

                <Text style={styles.aboutProject}>{projectDescription2}</Text>
              </View>
              
              {/* <View style={styles.projectContainer}>
                <Text style={styles.projectName}>SoundBee</Text>
                <Text style={styles.aboutProject}>
                  Advance Calculator is my jrst probect, motive to kuild to
                  kuild to enhance my s'ills. During this probect, I learned the
                  fundamentals of programming language.
                </Text>
              </View> */}
            </View>
          </View>
        </View>

        {/* Skills */}

        {/* <View style={styles.projectBlock}>
          <Text style={styles.project}>Skills</Text>
          <View style={styles.projectContainer}>
            <Text style={styles.projectName}>Java Python C++</Text>
          </View>
        </View> */}

        {/* Experience */}
        <View style={styles.projectBlock}>
          <Text style={styles.project}>EXPERIENCE</Text>
          <View style={styles.row}>
            <View style={styles.line}></View>
            <View>
              <View style={styles.projectContainer}>
                <Text style={styles.projectName}>{jobtitle}</Text>
                <Text style={styles.company}>
                  {company}
                </Text>
                <Text style={styles.aboutProject}>
                  {aboutJob}
                </Text>
              </View>
              
              {/* <View style={styles.projectContainer}>
                <Text style={styles.projectName}>{jobtitle}</Text>
                <Text style={styles.company}>
                  {company}
                </Text>
                <Text style={styles.aboutProject}>
                  {about}
                </Text>
              </View> */}
            </View>
          </View>
        </View>
      </View>

      {/* Right Column */}
      <View style={styles.right}>
        {/* Contact */}

        <View style={styles.rightContainer}>
          <View style={styles.divider}></View>
          <View style={styles.rightBlocks}>
            <View style={styles.projectBlock}>
              <Text style={styles.project}>CONTACT</Text>
              <View style={styles.projectContainer2}>
                <Text style={styles.contactInfo}>{email}</Text>
                <Text style={styles.contactInfo}>+91 {phoneNo}</Text>
              </View>
            </View>

            {/* Skills */}
            <View style={styles.projectBlock}>
              <Text style={styles.project}>SKILLS</Text>
              <View style={styles.projectContainer2}>
                <Text style={styles.skillName}>
                  {skills}
                </Text>
              </View>
            </View>

            {/* Achievements */}
            <View style={styles.projectBlock}>
              <Text style={styles.project}>ACHIEVEMENTS</Text>
              <View style={styles.projectContainer2}>
                <Text style={styles.achievementList}>
                  aaass asasd dsds fdfd dfd dfdf dfdf dfdf
                </Text>
                <Text style={styles.achievementList}>
                  aaass asasd dsds fdfd dfd dfdf dfdf dfdf
                </Text>
                <Text style={styles.achievementList}>
                  aaass asasd dsds fdfd dfd dfdf dfdf dfdf
                </Text>
              </View>
            </View>

            {/* Education */}
            <View style={styles.projectBlock}>
              <Text style={styles.project}>EDUCATION</Text>
              <View style={styles.projectContainer2}>
                <Text style={styles.degree}>
                  {degree}
                </Text>
                <Text style={styles.clgName}>
                  {college}
                </Text>
                <Text style={styles.date}>{educationendDate? `(Expected graduation ${educationendDate})` : ''}</Text>
                <Text style={styles.cgpa}>{cgpa ? `CGPA: ${cgpa}`: ""}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Template2
