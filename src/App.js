import React, { useState, useEffect } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { Spring } from 'react-spring/renderprops'
import Edit from './screens/EditScreen'
import './App.css'
import star from './imgs/stars.svg'
import HomeScreen from './screens/HomeScreen'
import DownloadScreen from './screens/DownloadScreen'
import EducationScreen from './screens/EducationScreen'
import SchoolScreen from './screens/SchoolScreen'
import TrainingScreen from './screens/Trainings'
import ProjectScreen from './screens/ProjectScreen'
import AchievementScreen from './screens/Achievement'
import SkillScreen from './screens/SkillScreen'
import SplashScreen from './screens/SplashScreen'

import { Font } from '@react-pdf/renderer'

Font.register({
  family: 'Roboto light',
  src:
    'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
})

Font.register({
  family: 'Roboto regular',
  src:
    'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf',
})

Font.register({
  family: 'Roboto medium',
  src:
    'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf',
})

Font.register({
  family: 'Roboto bold',
  src:
    'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
})

function App() {
  const [isloading, setloading] = useState(true)

  useEffect(() => {
    // setTimeout(() => {
    //   setloading(false)
    // }, 4500)
  }, [])
  return (
    <div className="App">
      {/* {isloading ? (
        <SplashScreen></SplashScreen>
      ) : ( */}

      <Spring
        from={{ opacity: 0,  }}
        to={{ opacity: 1,  }}
        config={{duration: 2000}}
      >
        {(props) => (
          <div style={props}>
            <>
              <Link style={{ textDecoration: 'none' }} to="/">
                <p className="Web_Name">ResumeToMars</p>
              </Link>

              <Switch>
                <Route exact path="/" component={HomeScreen}></Route>
                <Route path="/edit" component={Edit}></Route>
                <Route path="/download" component={DownloadScreen}></Route>
                <Route path="/education" component={EducationScreen}></Route>
                <Route path="/trainings" component={TrainingScreen}></Route>
                <Route path="/project" component={ProjectScreen}></Route>
                <Route path="/skills" component={SkillScreen}></Route>
                <Route
                  path="/achievement"
                  component={AchievementScreen}
                ></Route>
                <Route path="/school" component={SchoolScreen}></Route>
                {/* <Route path="/splashscreen" component={SplashScreen}></Route> */}
                <Route component={HomeScreen}></Route>
              </Switch>
            </>
          </div>
        )}
      </Spring>

      {/* )} */}
    </div>
  )
}

export default App
