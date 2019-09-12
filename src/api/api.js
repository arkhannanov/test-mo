import * as axios from "axios";


const instance = axios.create({
  baseURL: 'https://mysterious-reef-29460.herokuapp.com/api/v1/',
});


export const profileAPI = {
  getProfile(userId) {
    return instance.get(`user-info/` + userId);
  }
}

export const newsAPI = {
  getNews() {
    return instance.get(`/news`);
  }
}

export const authAPI = {
  login(email, password) {
    return instance.post(`/validate`, { email, password });
  },
  logout() {
    return instance.delete(`/validate`);
  }
}


