import {authAPI, newsAPI} from "../api/api";
import {stopSubmit, change} from "redux-form";
import {setIsLoading, setNews} from "./news-reducer";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_IS_LOADING = 'SET_IS_LOADING';

let initialState = {
  userId: null,
  isAuth: false,
  isLoading: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.isLoading
      }
    }
    default:
      return state;
  }
}


export const setAuthUserData = (userId, isAuth) => ({
  type: SET_USER_DATA, payload:
    {userId, isAuth}
});


export const getNews = () => {
  return (dispatch) => {
    newsAPI.getNews().then(response => {
      setTimeout(() => dispatch(setIsLoading(false)), 1000);
      dispatch(setNews(response.data));
    });
  }
};


export const login = (email, password) => {

  return (dispatch) => {
    dispatch(setIsLoading(true));
    authAPI.login(email, password).then(response => {
      dispatch(setIsLoading(false));
      if (response.data.status === "ok") {
        dispatch(setAuthUserData(response.data.data.id, true));

      } else if (response.data.status === "err") {
        if (response.data.message === 'wrong_email_or_password') {
          dispatch(change('login', 'password', ''))
          dispatch(stopSubmit("login", {_error: 'Имя пользователя или пароль введены не верно.'}));
        }
      } else if (response.status === 500 || response.status === 502 || response.status === 503) {
        dispatch(stopSubmit("login", {_error: 'Сервер не доступен.'}))
      }
    })
  }
}

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, false));
  }
}

export default authReducer;