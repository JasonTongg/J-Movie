import axios from 'axios';

let axiosFetch = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

axiosFetch.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] =
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTQ0MzQ5OTdmNWEyM2VmOGFhNGRkNGViMWE4YTc3NCIsInN1YiI6IjYyOThlNGEwZWMwYzU4MDA1MDY3MTA4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9iJIkAOvF77aArUtTGt_PW5kWXL5UKoP3rnHnDnepUQ';
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosFetch;
