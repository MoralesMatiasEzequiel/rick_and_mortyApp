const { getCharFavHandlers, postCharFavHandlers, deleteCharFavHandlers } = require('../handlers/indexHandlers');
const favoritesRouter = require('express').Router();

favoritesRouter.get('/', getCharFavHandlers);

favoritesRouter.post('/', postCharFavHandlers);

favoritesRouter.delete('/:id', deleteCharFavHandlers);

module.exports = favoritesRouter;