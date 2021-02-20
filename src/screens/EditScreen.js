import React, { useState, useEffect } from 'react'
import './EditScreen.css'
import { useSelector, useDispatch } from 'react-redux'
import { PERSONAL_DETAILS } from '../constants/resumeConstants'
import { action } from '../actions/action'

const Edit = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNo, setphoneNo] = useState('')
  const [about, setAbout] = useState('')

  const dispatch = useDispatch()

  const details = {
    name: name,
    email: email,
    about: about,
    phoneNo: phoneNo,
  } 
  
  // const personalDetails = useSelector((state) => state.personalDetails)
  // console.log(personalDetails)

  
  useEffect(() => {
    const personalDetails = localStorage.getItem('personalDetails')
  ? JSON.parse(localStorage.getItem('personalDetails'))
  : {}

  console.log(personalDetails)
    setName(personalDetails.name)
    setEmail(personalDetails.email)
    setphoneNo(personalDetails.phoneNo)
    setAbout(personalDetails.about)
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    

    dispatch(action(details))
   

    history.push('/education')
    
  }
  return (
    <div className="EditScreen">
      <div className="Personal_Info">
        <p>Your Personal Info</p>

        <form className="Form" onSubmit={submitHandler}>
          <input
            type="text"
            value={name}
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br></br>
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br></br>
          <input
            type="text"
            value={phoneNo}
            placeholder="Phone No."
            onChange={(e) => setphoneNo(e.target.value)}
          ></input>
          <br></br>
          <input
            type="text"
            value={about}
            placeholder="About"
            onChange={(e) => setAbout(e.target.value)}
          ></input>
          <br></br>

          <button type="submit">Next to education details</button>
          {/* <div className="Testing_btn">
            <div className="Previous_btn">Previous</div>
            <div className="Next_btn">Next</div>
          </div> */}
        </form>
      </div>
    </div>
  )
}

export default Edit
