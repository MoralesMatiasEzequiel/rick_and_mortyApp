// const { getUsers } = require('ruta de controllers');


const getUsersHandler = async (req, res) => {

    try {
        const allUsers = await getUsers();

        res.status(200).send(allUsers);

    } catch (error) {
        res.status(400).send({ error: error.message});
    }
};

const postUserHandler = async (req, res) => {
    const { name, nickname, email, picture, emailVerified } = req.body; 
    try {
        if(!name || !nickname || !email || !picture || !emailVerified){
            return res.status(400).json({ error: 'Missing required data' });
        };
        if (
            typeof name !== 'string' ||
            typeof nickname !== 'string' ||
            typeof email !== 'string' ||
            typeof picture !== 'string' ||
            typeof emailVerified !== 'boolean'
        ){
            return res.status(400).send({ error: 'Incorrect DataType' });
        };

        const existUser = await getUserByEmail(email);
        if(existUser){
            return res.status(200).send(existUser);
        };

        const newUser = await postUser(name, nickname, email, picture, emailVerified);
        res.status(200).send(newUser);

    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}


module.exports = {
    getUsersHandler,
    postUserHandler
};