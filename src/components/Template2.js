import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  Template2: {
    paddingTop: 45,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 45,
    backgroundColor: '#1e2126',
    height: '100%',
    flexDirection: 'row',
    color: 'white',
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
    height: '500px',
    marginLeft: 30,
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
    height: '85%',
    width: '1px',
    backgroundColor: '#A6A6A6',
  },
  line:{
    height:"100%",
    width:"1px",
    backgroundColor:"#A6A6A6",
    marginTop:"15px"
  },
  row:{
    flexDirection:"row"
  }
})

const Template2 = () => {
  return (
    <View style={styles.Template2}>
      <View style={styles.left}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>Elon Musk</Text>
          <Text style={styles.userProfession}>Developer & Designer</Text>
          <Text style={styles.userPunch}>
            Self-motivated, highly passionate and hardworking fresher looking
            for an opportunity to work.
          </Text>
        </View>
        <Text></Text>

        {/* Projects */}
        <View style={styles.projectBlock}>
          <Text style={styles.project}>PROJECTS</Text>
          <View style={styles.row} >
            <View style={styles.line}></View>
            <View>
              <View style={styles.projectContainer}>
                <Text style={styles.projectName}>SoundBee</Text>
                <Text style={styles.aboutProject}>
                  Advance Calculator is my jrst probect, motive to kuild to
                  kuild to enhance my s'ills. During this probect, I learned the
                  fundamentals of programming language.
                </Text>
              </View>
              <View style={styles.projectContainer}>
                <Text style={styles.projectName}>SoundBee</Text>
                <Text style={styles.aboutProject}>
                  Advance Calculator is my jrst probect, motive to kuild to
                  kuild to enhance my s'ills. During this probect, I learned the
                  fundamentals of programming language.
                </Text>
              </View>
              <View style={styles.projectContainer}>
                <Text style={styles.projectName}>SoundBee</Text>
                <Text style={styles.aboutProject}>
                  Advance Calculator is my jrst probect, motive to kuild to
                  kuild to enhance my s'ills. During this probect, I learned the
                  fundamentals of programming language.
                </Text>
              </View>
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
          <View style={styles.row} >
            <View style={styles.line}></View>
            <View>
            <View style={styles.projectContainer}>
            <Text style={styles.projectName}>Python Intern</Text>
            <Text style={styles.company}>
              A&H Software Solutions, Chandigarh
            </Text>
            <Text style={styles.aboutProject}>
              During this training, I learned Python programming language from
              scratch. It was a nice experience for me as, I am passionate and
              curious to learn new things.
            </Text>
          </View>
          <View style={styles.projectContainer}>
            <Text style={styles.projectName}>Python Intern</Text>
            <Text style={styles.company}>
              A&H Software Solutions, Chandigarh
            </Text>
            <Text style={styles.aboutProject}>
              During this training, I learned Python programming language from
              scratch. It was a nice experience for me as, I am passionate and
              curious to learn new things.
            </Text>
          </View>
            </View>
            </View>
        </View>
      </View>

      <View style={styles.divider}></View>
      {/* Right Column */}
      <View style={styles.right}>
        {/* Contact */}

        <View style={styles.projectBlock}>
          <Text style={styles.project}>CONTACT</Text>
          <View style={styles.projectContainer2}>
            <Text style={styles.contactInfo}>email@gmail.com</Text>
            <Text style={styles.contactInfo}>+91 9041244532</Text>
          </View>
        </View>

        {/* Skills */}
        <View style={styles.projectBlock}>
          <Text style={styles.project}>SKILLS</Text>
          <View style={styles.projectContainer2}>
            <Text style={styles.skillName}>Java Python C++ Dart Django</Text>
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
              Bachelor of Technology - Computer Science Engineering
            </Text>
            <Text style={styles.clgName}>
              Sri Sukhmani Institute of Engineering and Technology
            </Text>
            <Text style={styles.date}>(Expected graduation Jun 2021)</Text>
            <Text style={styles.cgpa}>CGPA: 7.2</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Template2
