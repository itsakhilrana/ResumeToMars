import React, { useState, useEffect } from 'react'
import { Spring } from 'react-spring/renderprops'
import './EditScreen.css'
import { useSelector, useDispatch } from 'react-redux'
import { PERSONAL_DETAILS } from '../constants/resumeConstants'
import { action } from '../actions/action'

const Edit = ({ history, location }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNo, setphoneNo] = useState('')
  const [about, setAbout] = useState('')
  const [profession, setProfession] = useState('')
  const [disable, setDisable] = useState()
  const limit = 90

  // const string = 'During this training, I learned Python programming language from scratch. It was a nice experience for me as, I am passionate and curious to learn  new things.'
  // console.log(string.length)
  const redirect = location.search ? location.search.split('=')[1] : '/'
  console.log(redirect)
  const dispatch = useDispatch()

  const details = {
    name: name,
    email: email,
    about: about,
    phoneNo: phoneNo,
    profession: profession,
    redirect: redirect,
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
    setProfession(personalDetails.profession)
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(action(details))

    history.push('/education')
  }

  const disableHandler = () => {
    let valid = about ? limit - about.length : 90

    if (valid > 0) {
      return false
    } else {
      return true
    }
  }
  return (
    <div className="EditScreen">
      <div className="Personal_Info">
        <p>Your Personal Info</p>

        <form className="Form" onSubmit={submitHandler}>
          <Spring
            from={{ opacity: 0, marginLeft: -500 }}
            to={{ opacity: 1, marginLeft: 0 }}
          >
            {(props) => (
              <div style={props}>
                <label>Full Name</label>
                <input
                  type="text"
                  value={name}
                  placeholder="Sundar Pichai"
                  onChange={(e) => setName(e.target.value)}
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
                <label>Email</label>
                <input
                  type="text"
                  value={email}
                  placeholder="sundarpichai@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
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
                <label>Phone No.</label>
                <input
                  type="text"
                  value={phoneNo}
                  placeholder="8967543XXX"
                  onChange={(e) => setphoneNo(e.target.value)}
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
                <label>Profession</label>
                <input
                  type="text"
                  value={profession}
                  placeholder="Chief executive officer"
                  onChange={(e) => setProfession(e.target.value)}
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
                <label>About</label>
                <textarea
                  type="text"
                  value={about}
                  placeholder="About you..."
                  onChange={(e) => {
                    setAbout(e.target.value)
                  }}
                ></textarea>
                <div className="wordLimit" >
                  <span style={{ color: 'red', fontSize: '12px' }}>
                    {about ? limit - about.length : 90}
                    {`/${limit}`}
                  </span>
                </div>
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
                <button type="submit" disabled={disableHandler()}>
                  Next
                </button>
              </div>
            )}
          </Spring>

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
