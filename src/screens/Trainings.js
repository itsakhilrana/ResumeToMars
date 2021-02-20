import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { TRAINING_DETAILS } from '../constants/resumeConstants'
import './Trainings.css'
const Trainings = ({ history }) => {
  const [company, setCompany] = useState('')
  const [jobtitle, setJobTitle] = useState('')

  const [startDate, setstartDate] = useState('')
  const [endDate, setendDate] = useState('')

  const dispatch = useDispatch()

  const details = {
    company,
    jobtitle,
    startDate,
    endDate,
  }

  useEffect(()=>{

    const trainingDetails = localStorage.getItem('trainingDetails')
    ? JSON.parse(localStorage.getItem('trainingDetails'))
    : {}

    setCompany(trainingDetails.company)
    setJobTitle(trainingDetails.jobtitle)
    setstartDate(trainingDetails.startDate)
    setendDate(trainingDetails.endDate)

  }, [])
  
  const submitHandler = (e) => {
    e.preventDefault()

    dispatch({ type: TRAINING_DETAILS, payload: details })

    localStorage.setItem('trainingDetails', JSON.stringify(details))

    history.push('/skillsnproject')
  }

  const previousHandler = () =>{
    history.push('/education')
  }
  return (
    <div className="TrainingScreen">
      <div className="Training_Info">
        <p>Trainings Experience</p>

        <form className="Form" onSubmit={submitHandler}>
          <input
            type="text"
            value={company}
            placeholder="Company Name"
            onChange={(e) => setCompany(e.target.value)}
          ></input>
          <br></br>
          <input
            type="text"
            value={jobtitle}
            placeholder="Job Title"
            onChange={(e) => setJobTitle(e.target.value)}
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

          <button type="submit">Next to skills & projects details</button><br></br>
          <button onClick={previousHandler}>Back to Personal Info</button>
        </form>
      </div>
    </div>
  )
}

export default Trainings
