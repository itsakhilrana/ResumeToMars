import React from 'react'
import { Spring } from 'react-spring/renderprops'
import './SplashScreen.css'
import fly from '../imgs/fly.svg'

const SplashScreen = () => {
  return (
    <div className="SplashScreen">
      <Spring
        from={{ opacity: 0, marginTop: 500 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{duration:2000}}
      >
        {(props) => (
          <div style={props}>
            <div className="SplashScreen_Container">
              <img src={fly} height="500" width="350"></img>
              {/* <p className="ResumeToMars">ResumeToMars</p> */}
            </div>
          </div>
        )}
      </Spring>
    </div>
  )
}

export default SplashScreen
