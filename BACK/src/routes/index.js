const { Router } = require('express');
const loginRouter = require('../routes/loginRoute');
const usersRouter = require('./usersRoutes');
const favoritesRouter = require('./favoritesRoutes');


const router = Router();

// router.use('/a', (req, res) => {res.send('Hola soy el back!')});
router.use('/login', loginRouter);
router.use('/users', usersRouter);
router.use('/favorites', favoritesRouter);




module.exports = router;