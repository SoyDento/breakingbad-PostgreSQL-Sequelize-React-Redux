const { Router } = require('express');
const { charactersGet,
        charIDget,
        occupationsGet,
        charIDremove,
        charPost,
        altAttribute} = require('../controllers');


const router = Router();


router.get('/characters', charactersGet);

router.get('/characters/:id', charIDget);

router.get('/occupations', occupationsGet);

router.delete('/removeChar', charIDremove);

router.post('/characters', charPost);

router.put('/:attribute', altAttribute);



module.exports = router;
