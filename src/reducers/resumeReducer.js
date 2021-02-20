import { bindActionCreators } from 'redux'
import {
  RESUME_CONSTANTS_ALL,
  EDUCATION_DETAILS,
  PROJECT_DETAILS,
  TRAINING_DETAILS,
  PERSONAL_DETAILS,
} from '../constants/resumeConstants'

const initState = {
  personalDetails: {},
  educationDetails: {},
  projectDetails: {},
  trainingDetails: {},
}

export const resumeReducer = (state = initState, action) => {
  switch (action.type) {
    case PERSONAL_DETAILS:
      return {  personalDetails: action.payload }
    case EDUCATION_DETAILS:
      return { ...state, educationDetails: action.payload }
    case PROJECT_DETAILS:
      return { ...state, projectDetails: action.payload }
    case TRAINING_DETAILS:
      return { ...state, trainingDetails: action.payload }
    default:
      return state
  }
}
