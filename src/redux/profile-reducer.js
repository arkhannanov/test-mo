import {profileAPI} from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_IS_LOADING = 'SET_IS_LOADING';
const RESET_IS_LOADING = 'RESET_IS_LOADING';

let initialState = {
  profile: {},
  isLoading: true
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile.data
      }
    }
    case SET_IS_LOADING: {
      return {...state,
        isLoading: action.isLoading}
    }
    case RESET_IS_LOADING: {
      return {...state,
        isLoading: true}
    }
    default:
      return state;
  }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading});
export const resetIsLoading = () => ({type: RESET_IS_LOADING});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
      setTimeout(() => dispatch(setIsLoading(false)), 1000);
      dispatch(setUserProfile(response.data));
    });
  }
};

export default profileReducer;