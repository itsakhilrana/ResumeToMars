import {
  PERSONAL_DETAILS,
  EDUCATION_DETAILS,
  TRAINING_DETAILS,
  PROJECT_DETAILS,
} from '../constants/resumeConstants'

export const action = (details) => async (dispatch) => {
  await dispatch({ type: PERSONAL_DETAILS, payload: details })

  localStorage.setItem('personalDetails', JSON.stringify(details))
  
}
