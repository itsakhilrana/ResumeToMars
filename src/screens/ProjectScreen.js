import React, { useEffect, useState } from 'react'
import { Spring } from 'react-spring/renderprops'
import { useDispatch } from 'react-redux'
import { PROJECT_DETAILS } from '../constants/resumeConstants'
import './ProjectScreen.css'

const ProjectScreen = ({ history }) => {
  
  const [projectName, setprojectName] = useState('')
  const [projectDescription, setprojectDescription] = useState('')
  const [projectLink, setprojectLink] = useState('')
  const [projectName2, setprojectName2] = useState('')
  const [projectDescription2, setprojectDescription2] = useState('')
  const [projectLink2, setprojectLink2] = useState('')

  const limit = 150
  const dispatch = useDispatch()

  const details = {
    
    projectName,
    projectDescription,
    projectLink,
    projectName2,
    projectDescription2,
    projectLink2,
  }

  useEffect(() => {
    const projectDetails = localStorage.getItem('projectDetails')
      ? JSON.parse(localStorage.getItem('projectDetails'))
      : {}

    
    setprojectName(projectDetails.projectName)
    setprojectDescription(projectDetails.projectDescription)
    setprojectLink(projectDetails.projectLink)
    setprojectName2(projectDetails.projectName2)
    setprojectDescription2(projectDetails.projectDescription2)
    setprojectLink2(projectDetails.projectLink2)
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch({ type: PROJECT_DETAILS, payload: details })

    localStorage.setItem('projectDetails', JSON.stringify(details))

    //clear all state of app here...
    history.push('/skills')
  }

  const previousHandler = () => {
    history.push('/trainings')
  }

  const disableHandler = () => {
    let valid = projectDescription ? limit - projectDescription.length : limit

    if (valid > 0) {
      return false
    } else {
      return true
    }
  }

  const disableHandler2 = () => {
    let valid = projectDescription2 ? limit - projectDescription2.length : limit

    if (valid > 0) {
      return false
    } else {
      return true
    }
  }
  return (
    <div className="ProjectScreen">
      <div className="Project_Info">
        <p>Your Projects</p>

        <form className="Form" onSubmit={submitHandler}>
          <div className="Project_Container">
            <div className="Project1">
              <Spring
                from={{ opacity: 0, marginLeft: -500 }}
                to={{ opacity: 1, marginLeft: 0 }}
              >
                {(props) => (
                  <div style={props}>
                    <div className="Project_Label">
                      <span>First Project Details</span>
                    </div>
                    <label>Project Name</label>
                    <input
                      type="text"
                      value={projectName}
                      placeholder="Google AI"
                      onChange={(e) => setprojectName(e.target.value)}
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
                    <label>Project Description</label>
                    <textarea
                      type="text"
                      value={projectDescription}
                      placeholder="About your project..."
                      onChange={(e) => setprojectDescription(e.target.value)}
                    ></textarea>
                    <div style={{ textAlign: 'end', width: '380px' }}>
                      <span style={{ color: 'red', fontSize: '12px' }}>
                        {projectDescription
                          ? limit - projectDescription.length
                          : limit}
                        {`/${limit}`}
                      </span>
                    </div>
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
                    <label>Project Link</label>
                    <input
                      type="text"
                      value={projectLink}
                      placeholder="https://"
                      onChange={(e) => setprojectLink(e.target.value)}
                    ></input>
                    <br></br>
                  </div>
                )}
              </Spring>
            </div>
            <div className="Proejct2">
              <Spring
                from={{ opacity: 0, marginLeft: 500 }}
                to={{ opacity: 1, marginLeft: 0 }}
              >
                {(props) => (
                  <div style={props}>
                    <div className="Project_Label">
                      <span>Second Project Details</span>
                    </div>
                    <label>Project Name</label>
                    <input
                      type="text"
                      value={projectName2}
                      placeholder="Google Map"
                      onChange={(e) => setprojectName2(e.target.value)}
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
                    <label>Project Description</label>
                    <textarea
                      type="text"
                      value={projectDescription2}
                      placeholder="About your project..."
                      onChange={(e) => setprojectDescription2(e.target.value)}
                    ></textarea>
                    <div style={{ textAlign: 'end', width: '380px' }}>
                      <span style={{ color: 'red', fontSize: '12px' }}>
                        {projectDescription2
                          ? limit - projectDescription2.length
                          : limit}
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
                    <label>Project Link</label>
                    <input
                      type="text"
                      value={projectLink2}
                      placeholder="https://"
                      onChange={(e) => setprojectLink2(e.target.value)}
                    ></input>
                    <br></br>
                  </div>
                )}
              </Spring>
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
                    disabled={disableHandler2() || disableHandler()}
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

export default ProjectScreen
