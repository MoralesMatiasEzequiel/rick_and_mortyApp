const { getUsers, postUser, putUser, deleteUser } = require('../controllers/usersCtrls');


const getUsersHandler = async(req, res) => {

    try {
        const allUsers = await getUsers();
        if(allUsers.length === 0){
            return res.status(200).send('No users created.');
        };
        res.status(200).send(allUsers);

    } catch (error) {
        res.status(400).send({ error: error.message});
    }
};

const postUserHandler = async(req, res) => {
    const { name, nickname, email, emailVerified, password } = req.body; 
    try {
        if(!name || !nickname || !email || !emailVerified || !password){
            return res.status(400).json({ error: 'Missing required data.' });
        };
        if (
            typeof name !== 'string' ||
            typeof nickname !== 'string' ||
            typeof email !== 'string' ||
            typeof emailVerified !== 'boolean'
            //Falta para la pass
        ){
            return res.status(400).send({ error: 'Incorrect DataType.' });
        };

        // const existUser = await getUserByEmail(email);
        // if(existUser){
        //     return res.status(200).send(existUser);
        // };

        const newUser = await postUser(name, nickname, email, emailVerified, password);
        res.status(200).send(newUser);

    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

const putUserHandler = async(req, res) => {
    // const { _id, name, nickname, emailVerified, active, favorites } = req.body;
    const { id, name, nickname, emailVerified, active } = req.body;  //_id o id 
    try {
        if(!id) res.status(400).json({ error: 'Missing ID.' });
        // if(
        //     (name && typeof name !== 'string') ||
        //     (nickname && typeof nickname !== 'string') ||
        //     (emailVerified && typeof emailVerified !== 'boolean') ||
        //     (active && typeof active !== 'boolean') //||
        //     // (favorites && !Array.isArray(favorites))
        //   ){
        //     return res.status(400).send({ error: 'Incorrect DataType' });
        // };
        const userUpdate = await putUser(id, name, nickname, emailVerified, active);
        res.status(200).send(`The user's status has been updated.`);

    } catch (error) {
        res.status(500).send({ error: error.message })
    };
};

const deleteUserHandler = async(req, res) => {
    const { id } = req.params;  //_id o id?
    try {
        const deleted = await deleteUser(id);
        res.status(200).send(`User (ID: ${id}) has been deleted.`);

    } catch (error) {
       return res.status(500).json({ description: `There's no user with ID: ${id}.` }) //"Introduce correctamente el ID que quieres eliminar".
        
    }
};

module.exports = {
    getUsersHandler,
    postUserHandler,
    putUserHandler,
    deleteUserHandler
};