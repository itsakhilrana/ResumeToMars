import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { PROJECT_DETAILS } from '../constants/resumeConstants'
import './ProjectScreen.css'

const ProjectScreen = ({ history }) => {
  
  const [skills, setSkills] = useState('')
  const [projectName, setprojectName] = useState('')
  const [projectDescription, setprojectDescription] = useState('')
  const [projectLink, setprojectLink] = useState('')

  const dispatch = useDispatch()

  const details = {
    skills,
    projectName,
    projectDescription,
    projectLink,
  }

  useEffect(()=>{

    const projectDetails = localStorage.getItem('projectDetails')
    ? JSON.parse(localStorage.getItem('projectDetails'))
    : {}

    setSkills(projectDetails.skills)
    setprojectName(projectDetails.projectName)
    setprojectDescription(projectDetails.projectDescription)
    setprojectLink(projectDetails.projectLink)

  },[])
  
  const submitHandler = (e) => {

    e.preventDefault()

    
    dispatch({ type: PROJECT_DETAILS, payload: details })
    

    localStorage.setItem('projectDetails', JSON.stringify(details))

    //clear all state of app here...
    history.push('/download')
  }

  const previousHandler = () =>{
    history.push('/trainings')
  }
  return (
    <div className="ProjectScreen">
      <div className="Project_Info">
        <p>Skills & Projects</p>

        <form className="Form" onSubmit={submitHandler}>
          <input
            type="text"
            value={skills}
            placeholder="Skills"
            onChange={(e) => setSkills(e.target.value)}
          ></input>
          <br></br>
          <input
            type="text"
            value={projectName}
            placeholder="Project Name"
            onChange={(e) => setprojectName(e.target.value)}
          ></input>
          <br></br>
          <input
            type="text"
            value={projectDescription}
            placeholder="Project Description"
            onChange={(e) => setprojectDescription(e.target.value)}
          ></input>
          <br></br>
          <input
            type="text"
            value={projectLink}
            placeholder="Project Link"
            onChange={(e) => setprojectLink(e.target.value)}
          ></input>
          <br></br>

          <div className="btn_div">
            <button onClick={previousHandler}>Previous</button>
            <button type="submit">Download</button>
            
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProjectScreen
