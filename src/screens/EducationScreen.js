import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { EDUCATION_DETAILS } from '../constants/resumeConstants'
import './EducationScreen.css'

const EducationScreen = ({ history }) => {
  const [degree, setDegree] = useState('')
  const [college, setcollege] = useState('')
  const [cgpa, setCgpa] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const dispatch = useDispatch()

  const details = {
    degree,
    college,
    cgpa,
    endDate,
    startDate,
  }

  useEffect(() => {
    const educationDetails = localStorage.getItem('educationDetails')
      ? JSON.parse(localStorage.getItem('educationDetails'))
      : {}

    setEndDate(educationDetails.endDate)
    setStartDate(educationDetails.startDate)
    setDegree(educationDetails.degree)
    setcollege(educationDetails.college)
    setCgpa(educationDetails.cgpa)
  }, [])
  const submitHandler = (e) => {
    e.preventDefault()

    dispatch({ type: EDUCATION_DETAILS, payload: details })
    localStorage.setItem('educationDetails', JSON.stringify(details))
    history.push('/school')
  }

  const previousHandler = () => {
    history.push('/edit')
  }
  return (
    <div className="EducationScreen">
      <div className="Education_Info">
        <p>Your Graduation Background</p>

        <form className="Form" onSubmit={submitHandler}>
          <select
            className="Select"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          >
            <option className="Option" value="B">
              Select a Degree
            </option>
            <option className="Option" value="Bachelor of Technology - Computer Science Engineering">
              Bachelor of Technology - Computer Science & Engineering
            </option>
            <option className="Option" value="Bachelor of Technology - Aeronautical Engineering">
              Bachelor of Technology - Aeronautical Engineering
            </option>
            <option className="Option" value="Bachelor of Technology - Mechanical Engineering">
              Bachelor of Technology - Mechanical Engineering
            </option>
            <option className="Option" value="Bachelor of Technology - Electronics & Communication">
              Bachelor of Technology - Electronics & Communication
            </option>

          </select>
          <br></br>
          <label>College</label>
          <input
            type="text"
            value={college}
            placeholder="University of Pennsylvania"
            onChange={(e) => setcollege(e.target.value)}
          ></input>
          <br></br>
          <label>CGPA</label>
          <input
            type="text"
            value={cgpa}
            placeholder="9.8"
            onChange={(e) => setCgpa(e.target.value)}
          ></input>
          <br></br>
          <label>Expected Graduation</label>
          <input
            type="text"
            value={endDate}
            placeholder="2021 Jun"
            onChange={(e) => setEndDate(e.target.value)}
          ></input>
          <br></br>

          <div className="btn_div">
            <button onClick={previousHandler}>Previous</button>
            <button type="submit">Next</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EducationScreen
