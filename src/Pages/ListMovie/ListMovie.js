import React, {useEffect, useState} from 'react';
import {Container, Search, List, Item} from './Style';
import MainLayout from '../../Layout/MainLayout';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {detailMovie, discoverVariable, discoverMovie} from '../../Redux/movies';
import ClipLoader from 'react-spinners/ClipLoader';

export default function ListMovie() {
  let {data, isLoading} = useSelector((state) => state.movie.discover);
  let [page, setPage] = useState(1);
  let dataVar = useSelector((state) => state.movie.discoverVar);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let toDetails = (id) => {
    dispatch(detailMovie(id));
    navigate('/details');
  };

  useEffect(() => {
    dispatch(discoverMovie());
  }, [dataVar, dispatch]);

  useEffect(() => {
    dispatch(discoverVariable({page, type: dataVar.type}));
    // eslint-disable-next-line
  }, [page]);

  let showMore = () => {
    setPage((old) => old + 1);
  };

  return (
    <MainLayout>
      <Container>
        <Search>
          <input type="text" placeholder="Enter Keyword..." />
          <button>Search</button>
        </Search>
        {isLoading ? (
          <ClipLoader
            color={'#ffffff'}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <List>
            {data.map((item) => (
              <Item onClick={() => toDetails(item.id)}>
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

        <button className="more" onClick={showMore}>
          Show More
        </button>
      </Container>
    </MainLayout>
  );
}
