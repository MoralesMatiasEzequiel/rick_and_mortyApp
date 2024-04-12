const { Router } = require('express');
const usersRouter = require('./usersRoutes');
const favoritesRouter = require('./favoritesRoutes');


const router = Router();

router.use('/', (req, res) => {res.send('Hola soy el back!')});
router.use('/users', usersRouter);
router.use('/favorites', favoritesRouter);




module.exports = router;