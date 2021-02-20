import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { EDUCATION_DETAILS } from '../constants/resumeConstants'
import './EducationScreen.css'

const EducationScreen = ({ history }) => {
  const [degree, setDegree] = useState('')
  const [major, setMajor] = useState('')
  const [cgpa, setCgpa] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const dispatch = useDispatch()

  const details = {
    degree,
    major,
    cgpa,
    endDate,
    startDate
  }

  useEffect(() => {
    const educationDetails = localStorage.getItem('educationDetails')
      ? JSON.parse(localStorage.getItem('educationDetails'))
      : {}

      setEndDate(educationDetails.endDate)
      setStartDate(educationDetails.startDate)
    setDegree(educationDetails.degree)
    setMajor(educationDetails.major)
    setCgpa(educationDetails.cgpa)
    
  }, [])
  const submitHandler = (e) => {
    e.preventDefault()

    dispatch({ type: EDUCATION_DETAILS, payload: details })
    localStorage.setItem('educationDetails', JSON.stringify(details))
    history.push('/trainings')
  }

  const previousHandler = () => {
    history.push('/edit')
  }
  return (
    <div className="EducationScreen">
      <div className="Education_Info">
        <p>Your Educational Background</p>

        <form className="Form" onSubmit={submitHandler}>
          <input
            type="text"
            value={degree}
            placeholder="Degree"
            onChange={(e) => setDegree(e.target.value)}
          ></input>
          <br></br>
          <input
            type="text"
            value={major}
            placeholder="College"
            onChange={(e) => setMajor(e.target.value)}
          ></input>
          <br></br>
          <input
            type="text"
            value={cgpa}
            placeholder="CGPA"
            onChange={(e) => setCgpa(e.target.value)}
          ></input>
          <br></br>
          <input
            type="text"
            value={startDate}
            placeholder="Start Date"
            onChange={(e) => setStartDate(e.target.value)}
          ></input>
          <br></br>
          <input
            type="text"
            value={endDate}
            placeholder="End Date"
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
