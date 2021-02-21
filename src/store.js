import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { resumeReducer } from './reducers/resumeReducer'

const reducer = combineReducers({
  resume: resumeReducer,
})

const personalDetails = localStorage.getItem('personalDetails')
  ? JSON.parse(localStorage.getItem('personalDetails'))
  : {}

  const educationDetails = localStorage.getItem('educationDetails')
  ? JSON.parse(localStorage.getItem('educationDetails'))
  : {}

  const trainingDetails = localStorage.getItem('trainingDetails')
  ? JSON.parse(localStorage.getItem('trainingDetails'))
  : {}

  const projectDetails = localStorage.getItem('projectDetails')
  ? JSON.parse(localStorage.getItem('projectDetails'))
  : {}

  const schoolDetails = localStorage.getItem('schoolDetails')
  ? JSON.parse(localStorage.getItem('schoolDetails'))
  : {}

const initialState = {
  resume: { personalDetails: personalDetails , educationDetails:educationDetails, schoolDetails:schoolDetails, trainingDetails:trainingDetails, projectDetails:projectDetails},
}
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
