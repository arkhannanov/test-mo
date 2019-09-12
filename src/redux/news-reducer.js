import {newsAPI} from "../api/api";

const SET_NEWS = 'SET_NEWS';
const SET_IS_LOADING = 'SET_IS_LOADING';
const RESET_IS_LOADING = 'RESET_IS_LOADING';

let initialState = {
  news: {},
  isLoading: true
};

const newsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_NEWS: {
      console.log(action.news.data);
      return {
        ...state,
        news: action.news.data
      }
    }
    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.isLoading
      }
    }
    case RESET_IS_LOADING: {
      return {...state,
        isLoading: true}
    }
    default:
      return state;
  }
}

export const setNews = (news) => ({type: SET_NEWS, news});
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading});
export const resetIsLoading = () => ({type: RESET_IS_LOADING});


export const getNews = () => {
  return (dispatch) => {
    newsAPI.getNews().then(response => {
      setTimeout(() => dispatch(setIsLoading(false)), 1000);
      dispatch(setNews(response.data));
    });
  }
};


export default newsReducer;