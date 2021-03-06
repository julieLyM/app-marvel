import axios from 'axios';
import md5 from 'md5';
import { auth } from '../utils/auth';

export const createMarvelHash = (ts) => {
  return md5(`${ts}${auth.privateKey}${auth.publicKey}`);
};

export const generatorMarvelAuth = () => {
  const ts = Date.now();
  return {
    ts,
    apikey: auth.publicKey,
    hash: createMarvelHash(ts),
  };
};

export const getCharacters = async (page, nameStartsWith) => {
  const { data } = await axios.get(`/api/v1/characters`, {
    params: {
      ...generatorMarvelAuth(),
      limit: 20,
      offset: page * 100,
      nameStartsWith,
    },
  });
  return data;
};

export const getOneCharacter = async (nameStartsWith) => {
  const {
    data: {
      data: { results: character },
    },
  } = await axios.get(`http://gateway.marvel.com/v1/public/characters`, {
    params: {
      ...generatorMarvelAuth(),
      nameStartsWith,
    },
  });
  return character;
};

export const getCharacterById = async (id) => {
  const { data } = await axios.get(`/api/v1/characters/${id}`, {
    params: {
      ...generatorMarvelAuth(),
    },
  });
  console.log(data)
  return data;
};

export const getCharacterByIdComic = async (id) => {
  const { characterComic } = await axios.get(
    `/api/v1/characters/${id}/comics`,
    {
      params: {
        ...generatorMarvelAuth(),
      },
    }
  );
  return characterComic;
};

// export const getAllComics = async page => {
//   const {
//     data: {
//       data: { results: data },
//     },
//   } = await axios.get(`http://gateway.marvel.com/v1/public/comics`, {
//     params: {
//       ...generatorMarvelAuth(),
//       limit: 20,
//       offset: page * 100,
//     },
//   });
//   return data;
// };

export const getComic = async (id) => {
  const {
    data: {
      data: { results: comic },
    },
  } = await axios.get(`http://gateway.marvel.com/v1/public/comics/${id}`, {
    params: {
      ...generatorMarvelAuth(),
    },
  });
  console.log(comic);
  return comic;
};

export const getCreatorsById = async (id) => {
  const {
    data: {
      data: { results: creator },
    },
  } = await axios.get(`http://gateway.marvel.com/v1/public/creators/${id}`, {
    params: {
      ...generatorMarvelAuth(),
    },
  });
  return creator;
};
