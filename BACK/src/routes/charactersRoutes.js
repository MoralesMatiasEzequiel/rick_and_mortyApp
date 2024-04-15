const { getCharactersHandler, getCharByIdHandler } = require('../handlers/indexHandlers');
const charactersRouter = require('express').Router();

charactersRouter.get('/', getCharactersHandler);
charactersRouter.get('/:id', getCharByIdHandler);


module.exports = charactersRouter;