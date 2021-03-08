import React, { useState, useEffect } from 'react'
import { Spring } from 'react-spring/renderprops'
import './SkillScreen.css'


const SkillScreen = ({history}) => {
  const [Skill1, setSkill1] = useState('')
  const [Skill2, setSkill2] = useState('')
  const [Skill3, setSkill3] = useState('')

  

  const details = {
    Skill1,
    Skill2,
    Skill3,
  }

  useEffect(() => {
    const SkillDetails = localStorage.getItem('SkillDetails')
      ? JSON.parse(localStorage.getItem('SkillDetails'))
      : {}

    setSkill1(SkillDetails.Skill1)
    setSkill2(SkillDetails.Skill2)
    setSkill3(SkillDetails.Skill3)
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()

    // dispatch({ type: SCHOOl_DETAILS, payload: details })
    localStorage.setItem('SkillDetails', JSON.stringify(details))

    history.push('/download')
  }

  const previousHandler = () => {
    history.push('/proejct')
  }
  return (
    <div className="SkillScreen">
      <div className="Skill_Info">
        <p>Your Skills</p>

        <form className="Form" onSubmit={submitHandler}>
          <Spring
            from={{ opacity: 0, marginLeft: -500 }}
            to={{ opacity: 1, marginLeft: 0 }}
          >
            {(props) => (
              <div style={props}>
                <label>Write your Skills</label>
                <input
                  type="text"
                  value={Skill1}
                  placeholder="1. Skill"
                  onChange={(e) => setSkill1(e.target.value)}
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
                  value={Skill2}
                  placeholder="2. Skill"
                  onChange={(e) => setSkill2(e.target.value)}
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
                  value={Skill3}
                  placeholder="3. Skill"
                  onChange={(e) => setSkill3(e.target.value)}
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

export default SkillScreen
