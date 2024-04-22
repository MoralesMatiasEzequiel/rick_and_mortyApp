const { getUsers, getUsersId, postUser, putUser, putUserBanned, deleteUser } = require('../controllers/usersCtrls');


const getUsersHandler = async(req, res) => {

    try {
        const allUsers = await getUsers();
        if(allUsers.length === 0){
            return res.status(200).send('No users created.');
        };
        res.status(200).json(allUsers);

    } catch (error) {
        res.status(400).send({ error: error.message});
    }
};

const getUserIdHandler = async(req, res) => {
    const { id } = req.params;
    try {
        const userId = await getUsersId(id);
        res.status(200).json(userId);

    } catch (error) {
        res.status(400).send({ error: error.message });
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
        res.status(200).json(newUser);

    } catch (error) {
        res.status(404).send({ error: error.message });
    }
};

const putUserHandler = async(req, res) => {
    // const { id } = req.params;
    const { id, name, nickname, email, emailVerified, password } = req.body;
    try {
        if(!id) res.status(400).json({ error: 'Missing ID.' });

        const userUpdate = await putUser(id, name, nickname, email, emailVerified, password);
        res.status(200).json(userUpdate);

    } catch (error) {
        res.status(500).send({ error: error.message })
    };
};

const putUserBannedHandler = async(req, res) => {
    const { id } = req.params;
    try {
        if(!id) res.status(400).json({ error: 'Missing ID.' });

        const userBanned = await putUserBanned(id);
        res.status(200).json(userBanned);

    } catch (error) {
        res.status(500).send({ error: error.message })
    };
}

const deleteUserHandler = async(req, res) => {
    const { id } = req.params; 
    try {
        const deletedUser = await deleteUser(id);
        res.status(200).json(deletedUser);
    
    } catch (error) {
       return res.status(500).json({ description: `There's no user with ID: ${id}.` }) //"Introduce correctamente el ID que quieres eliminar".
        
    }
};

module.exports = {
    getUsersHandler,
    getUserIdHandler,
    postUserHandler,
    putUserHandler,
    putUserBannedHandler,
    deleteUserHandler
};