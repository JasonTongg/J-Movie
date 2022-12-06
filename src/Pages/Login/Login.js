import React, {useState} from 'react';
import {Container} from './Style';
import MainLayout from '../../Layout/MainLayout';
import {addToken} from '../../Utils/LocalStorage';

export default function Login() {
  let [data, setData] = useState({});

  let loginSubmit = async (e) => {
    e?.preventDefault();
    let data = await window.fetch(
      'https://api.themoviedb.org/3/authentication/token/new?api_key=154434997f5a23ef8aa4dd4eb1a8a774'
    );

    data = await data.json();
    addToken(data.request_token);

    window.open(
      `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=http://localhost:3000/`
    );
  };

  return (
    <MainLayout title="Login">
      <Container>
        <form onSubmit={loginSubmit}>
          <div className="inputContainer">
            <label for="username">UserName</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setData({...data, username: e.target.value})}
            />
          </div>
          <div className="inputContainer">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setData({...data, password: e.target.value})}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </Container>
    </MainLayout>
  );
}
