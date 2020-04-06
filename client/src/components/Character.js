import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { getCharacterById, getComic } from '../service/marvelData';

import {
  MainCharacterContainer,
  ContainerLink,
  BlocLink,
} from './style/characterStyle';

export const Character = () => {
  const [person, setPerson] = useState([]);
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchDatas = async () => {
      const [dataCharacter, dataComic] = await Promise.all([
        getCharacterById(),
        getComic(),
      ]).catch(e => console.log('test'));
      setPerson(dataCharacter);
      setPerson(dataComic);
      setLoading(false);
    };
    fetchDatas();
  }, [id]);

  return (
    <MainCharacterContainer>
      {loading ? (
        <div>
          <h2>wait is loading...</h2>
        </div>
      ) : (
        <div>
          {person.map((elem, i) => (
            <div key={i}>
              <img
                src={`${elem.thumbnail.path}.${elem.thumbnail.extension} `}
                style={{ width: '100px' }}
                alt=""
              />
              <h2>{elem.name}</h2>
              <p>{elem.description}</p>
              <ContainerLink>
                <BlocLink>
                  <h3>comics</h3>
                  {elem.comics.items.map((item, i) => (
                    <div key={i}>
                      <Link to={`/comic/${item.resourceURI}`}>{item.name}</Link>
                    </div>
                  ))}
                </BlocLink>
                {/* <BlocLink>
                  <h3>stories</h3>
                  {elem.stories.items.map((item, i) => (
                    <div key={i}>
                      <Link to={item.resourceURI}>{item.name}</Link>
                    </div>
                  ))}
                </BlocLink>
                <BlocLink>
                  <h3>url</h3>
                  {elem.urls.map((item, i) => (
                    <div key={i}>
                      <Link to={item.url}>{item.type}</Link>
                    </div>
                  ))}
                </BlocLink> */}
              </ContainerLink>
            </div>
          ))}
        </div>
      )}

      <Link to={'/'}>
        <button>Back </button>
      </Link>
    </MainCharacterContainer>
  );
};
