const axios = require('axios');
const { generatorMarvelAuth } = require('./auth');

const getCharacters = async (page, nameStartsWith) => {
  const {
    data: {
      data: { results: data },
    },
  } = await axios.get(`http://gateway.marvel.com/v1/public/characters`, {
    params: {
      ...generatorMarvelAuth(),
      limit: 20,
      offset: page * 100,
      nameStartsWith,
    },
  });
  return data;
};

// const searchCharacter = async (nameStartsWith) => {
//   console.log('yo store');
//   const {
//     data: {
//       data: { results: character },
//     },
//   } = await axios.get(`http://gateway.marvel.com/v1/public/characters`, {
//     params: {
//       ...generatorMarvelAuth(),
//       nameStartsWith,
//     },
//   });
//   console.log(character);
//   return character;
// };

const getCharacterById = async (id) => {
  const {
    data: {
      data: { results: character },
    },
  } = await axios.get(`http://gateway.marvel.com/v1/public/characters/${id}`, {
    params: {
      ...generatorMarvelAuth(),
    },
  });
  return character;
};

const fetchCharacterByIdComic = async (id) => {
  const {
    data: {
      data: { results: character },
    },
  } = await axios.get(
    `http://gateway.marvel.com/v1/public/characters/${id}/comics`,
    {
      params: {
        ...generatorMarvelAuth(),
      },
    }
  );
  return character;
};

module.exports = { getCharacters, getCharacterById, fetchCharacterByIdComic };
