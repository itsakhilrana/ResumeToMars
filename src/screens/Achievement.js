import React, { useState, useEffect } from 'react'
import { Spring } from 'react-spring/renderprops'
import { useDispatch } from 'react-redux'
import './Achievement.css'

const Achievement = ({ history }) => {
  const [achievement1, setAchievements1] = useState('')
  const [achievement2, setAchievements2] = useState('')
  const [achievement3, setAchievements3] = useState('')

  const dispatch = useDispatch()

  const details = {
    achievement1,
    achievement2,
    achievement3,
  }

  useEffect(() => {
    const achievementsDetails = localStorage.getItem('achievementsDetails')
      ? JSON.parse(localStorage.getItem('achievementsDetails'))
      : {}

    setAchievements1(achievementsDetails.achievement1)
    setAchievements2(achievementsDetails.achievement2)
    setAchievements3(achievementsDetails.achievement3)
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()

    // dispatch({ type: SCHOOl_DETAILS, payload: details })
    localStorage.setItem('achievementsDetails', JSON.stringify(details))

    history.push('/trainings')
  }

  const previousHandler = () => {
    history.push('/school')
  }
  return (
    <div className="AchievementScreen">
      <div className="Achievement_Info">
        <p>Your Achievements</p>

        <form className="Form" onSubmit={submitHandler}>
          <Spring
            from={{ opacity: 0, marginLeft: -500 }}
            to={{ opacity: 1, marginLeft: 0 }}
          >
            {(props) => (
              <div style={props}>
                <label>Write your recent achievements</label>
                <input
                  type="text"
                  value={achievement1}
                  placeholder="1. Achievement"
                  onChange={(e) => setAchievements1(e.target.value)}
                ></input>
                <br></br>
              </div>
            )}
          </Spring>

          <Spring
            from={{ opacity: 0, marginLeft: 500 }}
            to={{ opacity: 1, marginLeft: 0 }}
          >
            {(props) => (
              <div style={props}>
                <input
                  type="text"
                  value={achievement2}
                  placeholder="2. Achievement"
                  onChange={(e) => setAchievements2(e.target.value)}
                ></input>
                <br></br>
              </div>
            )}
          </Spring>

          <Spring
            from={{ opacity: 0, marginLeft: -500 }}
            to={{ opacity: 1, marginLeft: 0 }}
          >
            {(props) => (
              <div style={props}>
                <input
                  type="text"
                  value={achievement3}
                  placeholder="3. Achievement"
                  onChange={(e) => setAchievements3(e.target.value)}
                ></input>
                <br></br>
              </div>
            )}
          </Spring>

          <Spring
            from={{ opacity: 0, marginLeft: -500 }}
            to={{ opacity: 1, marginLeft: 0 }}
          >
            {(props) => (
              <div style={props}>
               <div className="btn_div">
            <button onClick={previousHandler}>Previous</button>
            <button type="submit">Next</button>
          </div>
              </div>
            )}
          </Spring>

          
        </form>
      </div>
    </div>
  )
}

export default Achievement
