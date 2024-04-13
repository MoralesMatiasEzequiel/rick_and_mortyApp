
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
        res.status(400).send({ error: error.message });
    } 
};

const getCharFavHandlers = async (req, res) => {

    try {
        const charFav = getCharFav();
        res.status(200).send(charFav);
        
    } catch (error) {
        res.status(400).send({ error: error.message});
    }
};

const postCharFavHandlers = async(req, res) => {
    const { name, origin, status, species, gender, image } = req.body;
    try {
        if(!name || !origin || !status || !image || !species || !gender){
            return res.status(401).send('Missing data')
        }
        const createCharFav = await postCharFav(name, origin, status, species, gender, image);
        res.status(200).send(createCharFav);
        
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
};

const deleteCharFavHandlers = async(req, res) => {
    const { id } = req.params;
    try {
        const deleteFav = deleteCharFav(id);
        res.status(200).send(deleteFav);

    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

module.exports = {
    getCharactersHandler,
    getCharByIdHandler,
    getCharFavHandlers,
    postCharFavHandlers,
    deleteCharFavHandlers
}