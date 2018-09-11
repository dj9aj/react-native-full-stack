import {
   CANDIDATE_FETCH_SUCCESS,
   FETCHING_CANDIDATE,
   TOGGLE_EDIT_MODE, 
   DECREASE_RATING,
   INCREASE_RATING,
   UPDATE_RATING,
   CANCEL_EDIT_MODE
} from '../actions/types';

const INITIAL_STATE = {
   candidate: {},
   loading: true,
   editMode: false,
   amendedRating: 0,
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case FETCHING_CANDIDATE:
         return { ...state, loading: true };
      case CANDIDATE_FETCH_SUCCESS:
         return { ...state, candidate: action.payload, loading: false };
      case TOGGLE_EDIT_MODE:
         return { ...state, editMode: action.payload };
      case DECREASE_RATING:
         return { ...state, amendedRating: action.payload };     
      case INCREASE_RATING:
         return { ...state, amendedRating: action.payload };
      case CANCEL_EDIT_MODE:
         return { 
            ...state, 
            candidate: {
               ...state.candidate,
               rating: action.payload,
            },
            amendedRating: null, 
         };
      case UPDATE_RATING: 
         return {
            ...state,
            candidate: {
               ...state.candidate,
               rating: action.payload,
            },
            amendedRating: null,
         };    
      default:
         return state;   
   }
}