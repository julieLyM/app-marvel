const dataStore = require('../store/dataStore');

const listCharacters = async (req, res) => {
  try {
    const allCharac = await dataStore.getCharacters();
    res.json(allCharac);
  } catch (e) {
    console.error(e);
  }
};

const getByIdCharacter = async (req, res) => {
  const {
    params: { id },
  } = req; 
  try {
    const characId = await dataStore.getCharacterById(id);
    res.json(characId);
  } catch (e) {
    console.error(e);
  }
};

const getCharacterIdComic = async (req, res) => {
  const {
    params: { id },
  } = req; 
  try {
    console.log('yo ctrl');
    const characIdComic = await dataStore.fetchCharacterByIdComic(id);
    res.json(characIdComic);
  } catch (e) {
    console.error(e);
  }
};

module.exports = { listCharacters, getByIdCharacter, getCharacterIdComic };
