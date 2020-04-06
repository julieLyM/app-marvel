import React, { useState, useEffect } from 'react';
import { getCreatorsById } from '../service/marvelData';
import { useParams } from 'react-router-dom';

export const Creator = () => {
  const [creator, setCreator] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchInfosCreator = async () => {
      const dataCreator = await getCreatorsById(id);
      setCreator(dataCreator);
    };
    fetchInfosCreator();
  }, []);

  return (
    <div style={{ color: 'red' }}>
      {creator.map((create, i) => (
        <div key={i}>
          <img
            src={`${create.thumbnail.path}.${create.thumbnail.extension} `}
            alt=""
          />
          <h3>{create.fullName}</h3>
        </div>
      ))}
    </div>
  );
};
