import {
   CANDIDATES_FETCH_SUCCESS,
   FETCHING_CANDIDATES
} from '../actions/types';

const INITIAL_STATE = {
   candidates: {},
   loading: false
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case FETCHING_CANDIDATES: 
         return { ...state, loading: true };   
      case CANDIDATES_FETCH_SUCCESS:
         return { ...state, candidates: action.payload, loading: false };
      default:
         return state;
   }
}