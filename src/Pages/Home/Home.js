import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  getPopularMovie,
  getPopularTV,
  getTopRateMovie,
  getTopRateTV,
  getUpComingMovie,
} from '../../Redux/movies';
import {Container, Overlay} from './Style';
import MovieList from '../../Components/MovieList/MovieList';
import MainLayout from '../../Layout/MainLayout';
import {IoClose} from 'react-icons/io5';

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
  let {data: videos, isLoading: videoLoading} = useSelector(
    (state) => state.movie.detailsVideo
  );
  let [trailer, setTrailer] = useState(false);

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
    <MainLayout type="home" onClick={setTrailer}>
      <Container>
        {trailer ? (
          !videoLoading ? (
            <Overlay onClick={() => setTrailer(false)}>
              <h2>
                {videos[0].name}{' '}
                <IoClose onClick={() => setTrailer(false)}></IoClose>
              </h2>
              <iframe
                title={videos[0].name}
                src={`https://www.youtube.com/embed/${videos[0].key}?controls=0`}
              ></iframe>
            </Overlay>
          ) : (
            <Overlay>
              <h1>Loading..</h1>
            </Overlay>
          )
        ) : null}
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
