const server = require('./src/app');
const { sequelize } = require('./src/db');

const PORT = 3001;

server.listen(PORT, () => {
    sequelize.sync({ force: false });  //Setear a false cuando termines la app.
    console.log(`Server on port ${PORT}`);
});