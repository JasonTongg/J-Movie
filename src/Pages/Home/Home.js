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
  let {data: upcoming, isLoading: movieUpComingLoading} = useSelector(
    (state) => state.movie.movieUpComing
  );
  let {data: topRateTV, isLoading: tvTopRateLoading} = useSelector(
    (state) => state.movie.tvTopRate
  );
  let {data: topRateMovie, isLoading: movieTopRateLoading} = useSelector(
    (state) => state.movie.movieTopRate
  );
  let {data: popularTV, isLoading: tvPopularLoading} = useSelector(
    (state) => state.movie.tvPopular
  );

  useEffect(() => {
    dispatch(getUpComingMovie(1));
    dispatch(getPopularMovie());
    dispatch(getPopularTV(1));
    dispatch(getTopRateMovie(1));
    dispatch(getTopRateTV(1));
  }, [dispatch]);

  if (!upcoming && !topRateMovie && !popularTV && !topRateTV) {
    return null;
  }

  return (
    <MainLayout type="home">
      <Container>
        <MovieList
          title="UpComing Movie"
          data={{data: upcoming, loading: movieUpComingLoading}}
          type="movie"
        />
        <MovieList
          title="Top Rated Movie"
          data={{
            data: topRateMovie,
            loading: movieTopRateLoading,
          }}
          type="movie"
        />
        <MovieList
          title="Popular TV Series"
          data={{data: popularTV, loading: tvPopularLoading}}
          type="tv"
        />
        <MovieList
          title="Top Rated TV Series"
          data={{data: topRateTV, loading: tvTopRateLoading}}
          type="tv"
        />
      </Container>
    </MainLayout>
  );
}
