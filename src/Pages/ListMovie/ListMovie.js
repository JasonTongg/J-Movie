import React, {useEffect, useState, useRef, useCallback} from 'react';
import {Container, Search, List, Item} from './Style';
import MainLayout from '../../Layout/MainLayout';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {
  discoverMovie,
  getPopularTV,
  getTopRateMovie,
  getUpComingMovie,
  getTopRateTV,
  search,
} from '../../Redux/movies';
import {useParams} from 'react-router-dom';
import {UndrawMovieNight} from 'react-undraw-illustrations';
import Skeleton from '@mui/material/Skeleton';

export default function ListMovie() {
  let {data: discoverData, isLoading} = useSelector(
    (state) => state.movie.discover
  );
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

  let data, loading;
  let {type} = useParams();
  let searchRef = useRef();

  switch (type) {
    case 'movie':
      data = discoverData;
      loading = isLoading;
      break;
    case 'tv':
      data = discoverData;
      loading = isLoading;
      break;
    case 'Top Rated TV Series':
      data = topRateTV;
      loading = tvTopRateLoading;
      break;
    case 'Popular TV Series':
      data = popularTV;
      loading = tvPopularLoading;
      break;
    case 'UpComing Movie':
      data = upcoming;
      loading = movieUpComingLoading;
      break;
    case 'Top Rated Movie':
      data = topRateMovie;
      loading = movieTopRateLoading;
      break;
    default:
      break;
  }

  let [first, setFirst] = useState(true);
  let [page, setPage] = useState(1);
  let [query, setQuery] = useState('');
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let toDetails = useCallback(
    (id) => {
      navigate(
        `/details/${
          type.toLowerCase().includes('movie') ? 'movie' : 'tv'
        }/${id}`
      );
    },
    [navigate, type]
  );

  if (query) {
    data = discoverData;
    loading = isLoading;
  }

  useEffect(() => {
    if (query.length === 0) {
      switch (type) {
        case 'movie':
          dispatch(discoverMovie({page, type}));
          break;
        case 'tv':
          console.log('tes');
          dispatch(discoverMovie({page, type}));
          break;
        case 'Top Rated TV Series':
          dispatch(getTopRateTV(page));
          break;
        case 'Popular TV Series':
          dispatch(getPopularTV(page));
          break;
        case 'UpComing Movie':
          dispatch(getUpComingMovie(page));
          break;
        case 'Top Rated Movie':
          dispatch(getTopRateMovie(page));
          break;
        default:
          break;
      }
    }
  }, [page, type, dispatch, query]);

  useEffect(() => {
    if (query.length > 0) {
      if (first === true) {
        setPage(1);
        setFirst(false);
      }
      let tipe = type.toLowerCase().includes('movie') ? 'movie' : 'tv';
      let debounce = setTimeout(() => {
        dispatch(search({type: tipe, query, page}));
      }, 500);
      return () => clearTimeout(debounce);
    }
    // eslint-disable-next-line
  }, [query, page, dispatch, type]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    if (query === '') {
      setFirst(true);
      setPage(1);
    }
  }, [query]);

  useEffect(() => {
    setPage(1);
    setQuery('');
    setFirst(true);
    if (searchRef.current) {
      searchRef.current.value = '';
    }
  }, [type]);

  let showMore = useCallback(() => {
    setPage((old) => old + 1);
  }, []);

  if (!loading && data.length === 0) {
    return (
      <MainLayout>
        <Container>
          <Search>
            <input
              type="text"
              placeholder="Enter Keyword..."
              onChange={(e) => setQuery(e.target.value)}
              ref={searchRef}
            />
            <button>Search</button>
          </Search>
          <div style={{marginTop: '4rem'}}>
            <UndrawMovieNight primaryColor="#ff7a70" height="250px" />
            <h2 style={{color: 'white'}}>
              The source you requested could not be found.
            </h2>
          </div>
        </Container>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Container>
        <Search>
          <input
            type="text"
            placeholder="Enter Keyword..."
            onChange={(e) => setQuery(e.target.value)}
            ref={searchRef}
          />
          <button type="button">Search</button>
        </Search>
        {loading ? (
          <List style={{gap: '1rem'}}>
            {Array.from({length: 20}).map((_, idx) => (
              <Skeleton
                variant="rounded"
                height={290}
                style={{
                  borderRadius: '30px',
                  width: '100%',
                }}
                sx={{bgcolor: 'grey.900'}}
                animation="wave"
                key={idx}
              />
            ))}
          </List>
        ) : (
          <List>
            {data
              ?.filter((item) => item.poster_path)
              ?.map((item, idx) => (
                <Item onClick={() => toDetails(item.id)} key={idx}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.original_name || item.original_title}
                  />
                  <div className="overlay">
                    <p>{item.original_name || item.original_title}</p>
                  </div>
                </Item>
              ))}
          </List>
        )}

        {loading ? (
          ''
        ) : (
          <button className="more" onClick={showMore}>
            Show More
          </button>
        )}
      </Container>
    </MainLayout>
  );
}
