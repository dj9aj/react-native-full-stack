import { 
   SELECT_CANDIDATE, 
   CANDIDATES_FETCH_SUCCESS, 
   FETCHING_CANDIDATES, 
   CANDIDATE_FETCH_SUCCESS, 
   FETCHING_CANDIDATE,
   TOGGLE_EDIT_MODE,
   DECREASE_RATING,
   INCREASE_RATING,
   UPDATE_RATING,
   CANCEL_EDIT_MODE
} from './types';

import axios from 'axios';

// An Action creator is a JS function. When the action creator is called, it will be automatically dispatched to all the reducers
// When an action is generated from calling an action creator, it will automatically dispatch to all the different reducers in the application
export const selectedCandidate = userId => {
   return {
      type: SELECT_CANDIDATE,
      payload: userId
   }
}

export const fetchAllCandidates = () => {
   return async dispatch => {
      dispatch({ type: FETCHING_CANDIDATES });
      try {
         const res = await axios ('https://quiet-depths-97179.herokuapp.com/api/candidates');
         dispatch({ type: CANDIDATES_FETCH_SUCCESS, payload: res.data.candidateNames });
      } catch (error) {
         console.log(error);
      }
   };
};

export const fetchCandidateRecord = id => {
   return async dispatch => {
      dispatch({ type: FETCHING_CANDIDATE });
      try {
         const res = await axios (`https://quiet-depths-97179.herokuapp.com/api/candidates/${id}`);
         dispatch({ type: CANDIDATE_FETCH_SUCCESS, payload: res.data.candidate });
      } catch (error) {
         console.log(error);
      }
   }
}

export const toggleEditMode = mode => {
   return {
      type: TOGGLE_EDIT_MODE,
      payload: !mode
   }
}

export const cancelEditMode = rating => {
   return {
      type: CANCEL_EDIT_MODE,
      payload: rating
   }
}

export const amendRating = (type, value) => {

   if (type === 'decrease') {
      return {
         type: DECREASE_RATING,
         payload: value - 1
      } 
   } else {
      return {
         type: INCREASE_RATING,
         payload: value + 1
      }
   }
}

export const updateRating = rating => {
   return {
      type: UPDATE_RATING,
      payload: rating
   }
}

export const saveRating = (uid, rating) => {
   return async dispatch => {
      try {
         dispatch(updateRating(rating));
         await axios.post(`https://quiet-depths-97179.herokuapp.com/api/candidates/${uid}/rating`, {
            rating,
            uid
         });
      } catch (error) {
         console.log(error);
      }
   }
}