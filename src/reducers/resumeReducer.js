import { bindActionCreators } from 'redux'
import {
  RESUME_CONSTANTS_ALL,
  EDUCATION_DETAILS,
  PROJECT_DETAILS,
  TRAINING_DETAILS,
  PERSONAL_DETAILS,
  SCHOOl_DETAILS,
  RESET_DETAILS,
} from '../constants/resumeConstants'

const initState = {
  personalDetails: {},
  educationDetails: {},
  schoolDetails: {},
  projectDetails: {},
  trainingDetails: {},
}

export const resumeReducer = (state = initState, action) => {
  switch (action.type) {
    case PERSONAL_DETAILS:
      return { personalDetails: action.payload }
    case EDUCATION_DETAILS:
      return { ...state, educationDetails: action.payload }

    case SCHOOl_DETAILS:
      return { ...state, schoolDetails: action.payload }
    case PROJECT_DETAILS:
      return { ...state, projectDetails: action.payload }
    case TRAINING_DETAILS:
      return { ...state, trainingDetails: action.payload }
    case RESET_DETAILS:
      return {}
    default:
      return state
  }
}
