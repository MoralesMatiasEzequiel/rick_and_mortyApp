const { Router } = require('express');
const loginRouter = require('./loginRoute');
const usersRouter = require('./usersRoutes');
const charactersRouter = require('./charactersRoutes');
const favoritesRouter = require('./favoritesRoutes');


const router = Router();

// router.use('/a', (req, res) => {res.send('Hola soy el back!')});
router.use('/login', loginRouter);
router.use('/users', usersRouter);
router.use('/characters', charactersRouter);
router.use('/favorites', favoritesRouter);



module.exports = router;