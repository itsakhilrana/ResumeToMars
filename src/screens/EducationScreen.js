import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { EDUCATION_DETAILS } from '../constants/resumeConstants'
import './EducationScreen.css'

const EducationScreen = ({ history }) => {
  const [degree, setDegree] = useState('')
  const [major, setMajor] = useState('')
  const [cgpa, setCgpa] = useState('')
  const [startDate, setstartDate] = useState('')
  const [endDate, setendDate] = useState('')

  const dispatch = useDispatch()

  const details = {
    degree,
    major,
    cgpa,
    startDate,
    endDate,
  }


  useEffect(()=>{

    const educationDetails = localStorage.getItem('educationDetails')
    ? JSON.parse(localStorage.getItem('educationDetails'))
    : {}

    setDegree(educationDetails.degree)
    setMajor(educationDetails.major)
    setCgpa(educationDetails.cgpa)
    setstartDate(educationDetails.startDate)
    setstartDate(educationDetails.endDate)

  }, [])
  const submitHandler = (e) => {
    e.preventDefault()

    
    dispatch({ type: EDUCATION_DETAILS, payload: details })
    localStorage.setItem('educationDetails', JSON.stringify(details))
    history.push('/trainings')
  }

  const previousHandler = () =>{
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
            placeholder="Major"
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
            onChange={(e) => setstartDate(e.target.value)}
          ></input>
          <br></br>
          <input
            type="text"
            value={endDate}
            placeholder="End Date"
            onChange={(e) => setendDate(e.target.value)}
          ></input>
          <br></br>

          <button type="submit">Next to trainings details</button><br></br>
          <button onClick={previousHandler}>Back to Personal Info</button>
        </form>
        
      </div>
    </div>
  )
}

export default EducationScreen
