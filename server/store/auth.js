const md5 = require('md5');

const publicKey = '66bad8e179b4a66741c0710d08b0adef';
const privateKey = 'b9eb67a55f88757b7bc271c9d2c101a531993861';

function createMarvelHash(ts) {
  return md5(`${ts}${privateKey}${publicKey}`);
}

function generatorMarvelAuth() {
  const ts = Date.now();
  return {
    ts,
    apikey: publicKey,
    hash: createMarvelHash(ts),
  };
}

module.exports = {
  generatorMarvelAuth,
};
