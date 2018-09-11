import { combineReducers } from 'redux';
import CandidatesReducer from './CandidatesReducer';
import CandidateReducer from './CandidateReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
   candidates: CandidatesReducer,
   candidateRecord: CandidateReducer,
   selectedCandidate: SelectionReducer
});