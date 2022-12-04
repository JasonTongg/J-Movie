import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  getPopularMovie,
  getPopularTV,
  getTopRateMovie,
  getTopRateTV,
  getUpComingMovie,
} from '../../Redux/movies';
import {Container} from './Style';
import MovieList from '../../Components/MovieList/MovieList';
import MainLayout from '../../Layout/MainLayout';

export default function Home() {
  let dispatch = useDispatch();
  let upcoming = useSelector((state) => state.movie.movieUpComing);
  let topRateTV = useSelector((state) => state.movie.tvTopRate);
  let topRateMovie = useSelector((state) => state.movie.movieTopRate);
  let popularTV = useSelector((state) => state.movie.tvPopular);

  useEffect(() => {
    dispatch(getUpComingMovie());
    dispatch(getPopularMovie());
    dispatch(getPopularTV());
    dispatch(getTopRateMovie());
    dispatch(getTopRateTV());
  }, [dispatch]);

  return (
    <MainLayout type="home">
      <Container>
        <MovieList title="UpComing Movie" data={upcoming} />
        <MovieList title="Top Rated Movie" data={topRateMovie} />
        <MovieList title="Popular TV Series" data={popularTV} />
        <MovieList title="Top Rated TV Series" data={topRateTV} />
      </Container>
    </MainLayout>
  );
}
