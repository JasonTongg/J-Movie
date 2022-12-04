import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  getPopularMovie,
  getPopularTV,
  getTopRateMovie,
  getTopRateTV,
} from '../../Redux/movies';

export default function Home() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovie());
    dispatch(getPopularTV());
    dispatch(getTopRateMovie());
    dispatch(getTopRateTV());
  }, [dispatch]);

  return <div>Home</div>;
}
