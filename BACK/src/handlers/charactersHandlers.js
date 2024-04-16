const { getCharacters, getCharById } = require('../controllers/charactersCtrls');

const getCharactersHandler = async (req,res) => {

    try {
        const characters = await getCharacters();
        res.status(200).send(characters);

    } catch (error) {
        res.status(400).send({ error: error.message })
    }
};

const getCharByIdHandler = async (req, res) => {    
    const { id } = req.params;
    try {        
        const characterId = await getCharById(id);
        res.status(200).send(characterId);

    } catch (error) {
        res.status(400).send({ error: `ID: ${id} Not found` }); 
        // res.status(400).send({ error: error.message });
    };
};

// const getCharByIdHandler = async (req, res) => {    
//     const { id } = req.params;
//     try {        
//         const characterId = await getCharById(id);
//         if(user['error']) throw Error(characterId.error);
//         return res.status(200).json(characterId);

//     } catch (error) {
//         return res.status(404).send(error.message); 
//     };
// };


module.exports = {
    getCharactersHandler,
    getCharByIdHandler
}