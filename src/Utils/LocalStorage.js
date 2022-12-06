export const getToken = () => {
  let token = window.localStorage.getItem('Movie_Token');
  return token;
};

export const addToken = (token) => {
  window.localStorage.setItem('Movie_Token', token);
};

export const removeToken = () => {
  window.localStorage.removeItem('Movie_Token');
};
