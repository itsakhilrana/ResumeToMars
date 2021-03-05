import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { TRAINING_DETAILS } from '../constants/resumeConstants'
import './Trainings.css'
const Trainings = ({ history }) => {
  const [company, setCompany] = useState('')
  const [jobtitle, setJobTitle] = useState('')

  const [startDate, setstartDate] = useState('')
  const [endDate, setendDate] = useState('')
  const [about, setAbout] = useState('')
  const [anotherExp, setanotherExp] = useState('')
  const [toggle, setToggle] = useState(false)
  console.log(toggle)
  const dispatch = useDispatch()

  const details = {
    company,
    jobtitle,
    startDate,
    endDate,
    about,
  }

  useEffect(() => {
    const personalDetails = localStorage.getItem('personalDetails')
      ? JSON.parse(localStorage.getItem('personalDetails'))
      : {}

    const { redirect } = personalDetails
    setanotherExp(redirect)

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

  const previousHandler = () => {
    history.push('/school')
  }

  const AddAnotherExpHandler = () => {
    return (
      <>
        <label>Company</label>
        <input
          type="text"
          value={company}
          placeholder="Google"
          onChange={(e) => setCompany(e.target.value)}
        ></input>
        <br></br>
        <label>Job Title</label>
        <input
          type="text"
          value={jobtitle}
          placeholder="CEO"
          onChange={(e) => setJobTitle(e.target.value)}
        ></input>
        <br></br>
        <label>Start Month & Year</label>
        <input
          type="text"
          value={startDate}
          placeholder="Jun 2017"
          onChange={(e) => setstartDate(e.target.value)}
        ></input>
        <br></br>
        <label>End Month & Year</label>
        <input
          type="text"
          value={endDate}
          placeholder="Jul 2018"
          onChange={(e) => setendDate(e.target.value)}
        ></input>
        <br></br>
        <label>Learning Experience</label>
        <input
          type="text"
          value={about}
          placeholder="Write about your experience..."
          onChange={(e) => setAbout(e.target.value)}
        ></input>
        <br></br>
      </>
    )
  }
  return (
    <div className="TrainingScreen">
      <div className="Training_Info">
        <p>Your Training Experience</p>

        <form className="Form" onSubmit={submitHandler}>
          <div className="Training_Container">
            <div className="Training1">
              <label>Company</label>
              <input
                type="text"
                value={company}
                placeholder="Google"
                onChange={(e) => setCompany(e.target.value)}
              ></input>
              <br></br>
              <label>Job Title</label>
              <input
                type="text"
                value={jobtitle}
                placeholder="CEO"
                onChange={(e) => setJobTitle(e.target.value)}
              ></input>
              <br></br>
              <label>Start Month & Year</label>
              <input
                type="text"
                value={startDate}
                placeholder="Jun 2017"
                onChange={(e) => setstartDate(e.target.value)}
              ></input>
              <br></br>
              <label>End Month & Year</label>
              <input
                type="text"
                value={endDate}
                placeholder="Jul 2018"
                onChange={(e) => setendDate(e.target.value)}
              ></input>
              <br></br>
              <label>Learning Experience</label>
              <input
                type="text"
                value={about}
                placeholder="Write about your experience..."
                onChange={(e) => setAbout(e.target.value)}
              ></input>
              <br></br>
              {anotherExp && anotherExp === 'intermidiate' ? (
                <div onClick={() => setToggle(!toggle)}>
                  {toggle ? (
                    <div style={{ color: 'red', fontSize: '14px', textAlign:"end" }}>
                      Remove Experience
                    </div>
                  ) : (
                    <div style={{ color: 'white', fontSize: '14px',textAlign:"end" }}>
                      Add Another Experience
                    </div>
                  )}
                </div>
              ) : null}
            </div>
            <div className="Training2">
              {toggle ? <AddAnotherExpHandler></AddAnotherExpHandler> : null}
            </div>
          </div>

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
