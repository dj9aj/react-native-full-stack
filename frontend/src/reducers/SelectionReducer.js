import { SELECT_CANDIDATE } from '../actions/types';

const INITIAL_STATE = { selectedCandidate: '' };

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case SELECT_CANDIDATE:
         return { ...state, selectedCandidate: action.payload};
      default:
         return state;
   }
};