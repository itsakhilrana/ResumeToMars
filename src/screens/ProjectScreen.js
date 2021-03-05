import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { PROJECT_DETAILS } from '../constants/resumeConstants'
import './ProjectScreen.css'

const ProjectScreen = ({ history }) => {
  const [skills, setSkills] = useState('')
  const [projectName, setprojectName] = useState('')
  const [projectDescription, setprojectDescription] = useState('')
  const [projectLink, setprojectLink] = useState('')
  const [projectName2, setprojectName2] = useState('')
  const [projectDescription2, setprojectDescription2] = useState('')
  const [projectLink2, setprojectLink2] = useState('')

  const dispatch = useDispatch()

  const details = {
    skills,
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

    setSkills(projectDetails.skills)
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
    history.push('/download')
  }

  const previousHandler = () => {
    history.push('/trainings')
  }
  return (
    <div className="ProjectScreen">
      <div className="Project_Info">
        <p>Your Skills & Projects</p>

        <form className="Form" onSubmit={submitHandler}>
          <div className="Project_Container">
            <div className="Project1">
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
              <label>Project Description</label>
              <input
                type="text"
                value={projectDescription}
                placeholder="About your project..."
                onChange={(e) => setprojectDescription(e.target.value)}
              ></input>
              <br></br>
              <label>Project Link</label>
              <input
                type="text"
                value={projectLink}
                placeholder="https://"
                onChange={(e) => setprojectLink(e.target.value)}
              ></input>
              <br></br>
            </div>
            <div className="Proejct2">
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
              <label>Project Description</label>
              <input
                type="text"
                value={projectDescription2}
                placeholder="About your project..."
                onChange={(e) => setprojectDescription2(e.target.value)}
              ></input>
              <br></br>
              <label>Project Link</label>
              <input
                type="text"
                value={projectLink2}
                placeholder="https://"
                onChange={(e) => setprojectLink2(e.target.value)}
              ></input>
              <br></br>
              <label>Skills</label>
              <input
                type="text"
                value={skills}
                placeholder="Java, Python, C++ & more."
                onChange={(e) => setSkills(e.target.value)}
              ></input>

              <br></br>
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

export default ProjectScreen
