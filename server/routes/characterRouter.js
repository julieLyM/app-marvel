const router = require('express').Router();
const characterCtrl = require('../controller/characterCtrl');

router.get('/', characterCtrl.listCharacters);
router.get('/:id', characterCtrl.getByIdCharacter);
router.get('/:id/comic', characterCtrl.getCharacterIdComic);

module.exports = router;
