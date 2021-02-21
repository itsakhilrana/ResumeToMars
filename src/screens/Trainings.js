import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { TRAINING_DETAILS } from '../constants/resumeConstants'
import './Trainings.css'
const Trainings = ({ history }) => {
  const [company, setCompany] = useState('')
  const [jobtitle, setJobTitle] = useState('')

  const [startDate, setstartDate] = useState('')
  const [endDate, setendDate] = useState('')
  const [about,setAbout] = useState('')
  const dispatch = useDispatch()

  const details = {
    company,
    jobtitle,
    startDate,
    endDate,
    about
  }

  useEffect(()=>{

    const trainingDetails = localStorage.getItem('trainingDetails')
    ? JSON.parse(localStorage.getItem('trainingDetails'))
    : {}

    setCompany(trainingDetails.company)
    setJobTitle(trainingDetails.jobtitle)
    setstartDate(trainingDetails.startDate)
    setendDate(trainingDetails.endDate)
    setAbout(trainingDetails.about)

  }, [])
  
  const submitHandler = (e) => {
    e.preventDefault()

    dispatch({ type: TRAINING_DETAILS, payload: details })

    localStorage.setItem('trainingDetails', JSON.stringify(details))

    history.push('/skillsnproject')
  }

  const previousHandler = () =>{
    history.push('/school')
  }
  return (
    <div className="TrainingScreen">
      <div className="Training_Info">
        <p>Your Training Experience</p>

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
            placeholder="Start Month & Year"
            onChange={(e) => setstartDate(e.target.value)}
          ></input>
          <br></br>
          <input
            type="text"
            value={endDate}
            placeholder="End Month & Year"
            onChange={(e) => setendDate(e.target.value)}
          ></input>
          <br></br>
          <input
            type="text"
            value={about}
            placeholder="Learning Experience"
            onChange={(e) => setAbout(e.target.value)}
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

export default Trainings
