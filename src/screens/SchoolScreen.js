import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {SCHOOl_DETAILS } from '../constants/resumeConstants'
import './SchoolScreen.css'

const SchoolScreen = ({ history }) => {
  const [stream, setstream] = useState('')
  const [school, setschool] = useState('')
  const [board, setboard] = useState('')
  const [completion, setcompletion] = useState('')

  const dispatch = useDispatch()

  const details = {
    stream,
    school,
    board,
    completion,
  }

  useEffect(() => {
    const schoolDetails = localStorage.getItem('schoolDetails')
      ? JSON.parse(localStorage.getItem('schoolDetails'))
      : {}

    setcompletion(schoolDetails.completion)

    setstream(schoolDetails.stream)
    setschool(schoolDetails.school)
    setboard(schoolDetails.board)
  }, [])
  const submitHandler = (e) => {
    e.preventDefault()

    dispatch({ type: SCHOOl_DETAILS, payload: details })
    localStorage.setItem('schoolDetails', JSON.stringify(details))
    history.push('/trainings')
  }

  const previousHandler = () => {
    history.push('/education')
  }
  return (
    <div className="SchoolScreen">
      <div className="School_Info">
        <p>Your School Background</p>

        <form className="Form" onSubmit={submitHandler}>
          <select
            className="Select"
            value={stream}
            onChange={(e) => setstream(e.target.value)}
          >
            <option className="Option" value="">
              Select a Stream
            </option>
            <option className="Option" value="Science">
              Science
            </option>
            <option className="Option" value="Commerce">
              Commerce
            </option>
            <option className="Option" value="Arts">
              Arts
            </option>
            <option className="Option" value="Diploma">
              Diploma
            </option>
          </select>
          <br></br>
          <label>School</label>
          <input
            type="text"
            value={school}
            placeholder="Wharton School "
            onChange={(e) => setschool(e.target.value)}
          ></input>
          <br></br>
          <label>Board</label>
          <input
            type="text"
            value={board}
            placeholder="CBSE"
            onChange={(e) => setboard(e.target.value)}
          ></input>
          <br></br>
          <label>Year of Completion</label>
          <input
            type="text"
            value={completion}
            placeholder="2017"
            onChange={(e) => setcompletion(e.target.value)}
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

export default SchoolScreen
