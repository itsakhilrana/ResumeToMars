import React, { useState, useEffect } from 'react'
import { Spring } from 'react-spring/renderprops'
import { useDispatch } from 'react-redux'
import { TRAINING_DETAILS } from '../constants/resumeConstants'
import './Trainings.css'
const Trainings = ({ history }) => {
  const [company, setCompany] = useState('')
  const [jobtitle, setJobTitle] = useState('')
  const [startDate, setstartDate] = useState('')
  const [endDate, setendDate] = useState('')
  const [about, setAbout] = useState('')

  const [company2, setCompany2] = useState('')
  const [jobtitle2, setJobTitle2] = useState('')
  const [startDate2, setstartDate2] = useState('')
  const [endDate2, setendDate2] = useState('')
  const [about2, setAbout2] = useState('')

  const [anotherExp, setanotherExp] = useState('')
  const [check, setCheck] = useState('')
  const [toggle, setToggle] = useState(false)

  const limit = 150
  console.log(toggle)
  const dispatch = useDispatch()

  const details = {
    company,
    jobtitle,
    startDate,
    endDate,
    about,
    company2,
    jobtitle2,
    startDate2,
    endDate2,
    about2,
  }

  useEffect(() => {
    const personalDetails = localStorage.getItem('personalDetails')
      ? JSON.parse(localStorage.getItem('personalDetails'))
      : {}

    const { redirect } = personalDetails
    setanotherExp(redirect)
    setCheck(redirect)

    const trainingDetails = localStorage.getItem('trainingDetails')
      ? JSON.parse(localStorage.getItem('trainingDetails'))
      : {}

    setCompany(trainingDetails.company)
    setJobTitle(trainingDetails.jobtitle)
    setstartDate(trainingDetails.startDate)
    setendDate(trainingDetails.endDate)
    setAbout(trainingDetails.about)

    setCompany2(trainingDetails.company2)
    setJobTitle2(trainingDetails.jobtitle2)
    setstartDate2(trainingDetails.startDate2)
    setendDate2(trainingDetails.endDate2)
    setAbout2(trainingDetails.about2)
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch({ type: TRAINING_DETAILS, payload: details })

    localStorage.setItem('trainingDetails', JSON.stringify(details))

    history.push('/skillsnproject')
  }

  const previousHandler = () => {
    console.log(check)
    if (check === 'intermidiate') {
      return history.push('/achievement')
    } else {
      history.push('/school')
    }
  }

  const disableHandler = () => {
    let valid = about ? limit - about.length : limit

    if (valid > 0) {
      return false
    } else {
      return true
    }
  }

  const disableHandler2 = () => {
    let valid2 = about2 ? limit - about2.length : limit

    if (valid2 > 0) {
      return false
    } else {
      return true
    }
  }

  return (
    <div className="TrainingScreen">
      <div className="Training_Info">
        <p>Your Training Experience</p>

        <form className="Form" onSubmit={submitHandler}>
          <div className="Training_Container">
            <div className="Training1">
              <Spring
                from={{ opacity: 0, marginLeft: -500 }}
                to={{ opacity: 1, marginLeft: 0 }}
              >
                {(props) => (
                  <div style={props}>
                    <label>Company</label>
                    <input
                      type="text"
                      value={company}
                      placeholder="Google"
                      onChange={(e) => setCompany(e.target.value)}
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
                    <label>Job Title</label>
                    <input
                      type="text"
                      value={jobtitle}
                      placeholder="CEO"
                      onChange={(e) => setJobTitle(e.target.value)}
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
                    <label>Start Month & Year</label>
                    <input
                      type="text"
                      value={startDate}
                      placeholder="Jun 2017"
                      onChange={(e) => setstartDate(e.target.value)}
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
                    <label>End Month & Year</label>
                    <input
                      type="text"
                      value={endDate}
                      placeholder="Jul 2018"
                      onChange={(e) => setendDate(e.target.value)}
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
                    <label>Learning Experience</label>
                    <textarea
                      type="text"
                      value={about}
                      placeholder="Write about your experience..."
                      onChange={(e) => setAbout(e.target.value)}
                    ></textarea>
                    <div style={{ textAlign: 'end', width: '380px' }}>
                      <span style={{ color: 'red', fontSize: '12px' }}>
                        {about || about2 ? limit - about.length : limit}
                        {`/${limit}`}
                      </span>
                    </div>
                    <br></br>
                    {anotherExp && anotherExp === 'intermidiate' ? (
                      <div onClick={() => setToggle(!toggle)}>
                        {toggle ? (
                          <div
                            style={{
                              color: 'red',
                              fontSize: '14px',
                              textAlign: 'end',
                            }}
                          >
                            Remove Experience
                          </div>
                        ) : (
                          <div
                            style={{
                              color: 'white',
                              fontSize: '14px',
                              textAlign: 'end',
                            }}
                          >
                            Add Another Experience
                          </div>
                        )}
                      </div>
                    ) : null}
                  </div>
                )}
              </Spring>
            </div>
            <div className="Training2">
              {toggle ? (
                <>
                  <Spring
                    from={{ opacity: 0, marginLeft: 500 }}
                    to={{ opacity: 1, marginLeft: 0 }}
                  >
                    {(props) => (
                      <div style={props}>
                        <label>Company</label>
                        <input
                          type="text"
                          value={company2}
                          placeholder="Google"
                          onChange={(e) => setCompany2(e.target.value)}
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
                        <label>Job Title</label>
                        <input
                          type="text"
                          value={jobtitle2}
                          placeholder="CEO"
                          onChange={(e) => setJobTitle2(e.target.value)}
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
                        <label>Start Month & Year</label>
                        <input
                          type="text"
                          value={startDate2}
                          placeholder="Jun 2017"
                          onChange={(e) => setstartDate2(e.target.value)}
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
                        <label>End Month & Year</label>
                        <input
                          type="text"
                          value={endDate2}
                          placeholder="Jul 2018"
                          onChange={(e) => setendDate2(e.target.value)}
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
                        <label>Learning Experience</label>
                        <textarea
                          type="text"
                          value={about2}
                          placeholder="Write about your experience..."
                          onChange={(e) => setAbout2(e.target.value)}
                        ></textarea>
                        <div style={{ textAlign: 'end', width: '380px' }}>
                          <span style={{ color: 'red', fontSize: '12px' }}>
                            {about2 ? limit - about2.length : limit}
                            {`/${limit}`}
                          </span>
                        </div>
                        <br></br>
                      </div>
                    )}
                  </Spring>
                </>
              ) : null}
            </div>
          </div>

          <Spring
            from={{ opacity: 0, marginLeft: 500 }}
            to={{ opacity: 1, marginLeft: 0 }}
          >
            {(props) => (
              <div style={props}>
                <div className="btn_div">
                  <button onClick={previousHandler}>Previous</button>
                  <button
                    type="submit"
                    disabled={disableHandler() || disableHandler2()}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </Spring>
        </form>
      </div>
    </div>
  )
}

export default Trainings
