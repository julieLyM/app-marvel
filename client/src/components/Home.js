import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getCharacters } from '../service/marvelData';

import { MainHomeContainer, HomeBloc, ImageBloc } from './style/homeStyle';

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setLoading(true);
      try {
        const getData = await getCharacters(page);
        setCharacters(getData);
      } catch (error) {
        setIsError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [page]);

  const changePage = (pageNumber) => {
    setPage((beforePage) => Math.min(Math.max(beforePage + pageNumber, 0), 75));
  };

  return (
    <MainHomeContainer>
      {loading && !isError ? (
        <h2>wait is loading... !!!</h2>
      ) : isError ? (
        <h2>something's wrong</h2>
      ) : (
        <HomeBloc>
          {characters.map((element, i) => (
            <ImageBloc key={i}>
              <Link
                style={{
                  color: 'red',
                  textDecoration: 'none',
                  fontSize: '1em',
                  fontWeight: '500',
                }}
                to={`characters/${element.id}`}
              >
                <img
                  src={`${element.thumbnail.path}.${element.thumbnail.extension} `}
                  style={{ width: '50%' }}
                  alt=""
                />
                <p>{element.name}</p>
              </Link>
            </ImageBloc>
          ))}
        </HomeBloc>
      )}
      <button onClick={changePage.bind(null, -1)}>before page</button>
      <button onClick={changePage.bind(null, 1)}>next page</button>
    </MainHomeContainer>
  );
};
