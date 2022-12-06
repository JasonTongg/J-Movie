import React from 'react';
import MainLayout from '../../Layout/MainLayout';
import {Container} from './Style';
import {UndrawMovieNight} from 'react-undraw-illustrations';
import {useNavigate} from 'react-router-dom';

export default function NotFound() {
  let navigate = useNavigate();
  return (
    <MainLayout title="404 Not Found">
      <Container>
        <UndrawMovieNight primaryColor="#ff7a70" height="250px" />
        <h2>The source you requested could not be found.</h2>
        <button onClick={() => navigate(-2)}>Back</button>
      </Container>
    </MainLayout>
  );
}
