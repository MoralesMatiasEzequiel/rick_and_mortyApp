const { getUsers } = require('../controllers/usersCtrls');


const getUsersHandler = async(req, res) => {

    try {
        const allUsers = await getUsers();
        if(allUsers.length === 0){
            return res.status(200).send('No users created');
        };
        res.status(200).send(allUsers);

    } catch (error) {
        res.status(400).send({ error: error.message});
    }
};

const postUserHandler = async(req, res) => {
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
};

const putUserHandler = async(req, res) => {
    const { _id, name, nickname, picture, emailVerified, active, favorites } = req.body;  //_id o id 
    try {
        if(!_id) res.status(400).json({ error: 'Missing ID' });
        if(
            (name && typeof name !== 'string') ||
            (nickname && typeof nickname !== 'string') ||
            (picture && typeof picture !== 'string') ||   
            (emailVerified && typeof emailVerified !== 'boolean') ||
            (active && typeof active !== 'boolean') ||
            (favorites && !Array.isArray(favorites))
          ){
            return res.status(400).send({ error: 'Incorrect DataType' });
        };
        const userUpdate = await putUser(_id, name, nickname, picture, emailVerified, active, favorites);
        res.status(200).send(`El estado del usuario ha sido actualizado`);

    } catch (error) {
        res.status(500).send({ error: error.message })
    };
};

const deleteUserHandler = async(req, res) => {
    const { _id } = req.params;  //_id o id?
    try {
        const deleted = await deleteUser(_id);
        res.status(200).send(`User has been deleted`);

    } catch (error) {
       return res.status(500).json({ description: `There's no user with ID: ${_id}` }) //"Introduce correctamente el ID que quieres eliminar".
        
    }
};

module.exports = {
    getUsersHandler,
    postUserHandler,
    putUserHandler,
    deleteUserHandler
};