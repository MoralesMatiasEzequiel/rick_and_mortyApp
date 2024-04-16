const { getCharFav, postCharFav, deleteCharFav } = require('../controllers/favoritesCtrls');

const getCharFavHandlers = async (req, res) => {
    try {
        const charFav = await getCharFav();
        if(charFav.length === 0){
            return res.status(200).send('There are no favorites.');
        };
        res.status(200).json(charFav);
    } catch (error) {
        res.status(400).send({ error: error.message});
    }
};

const postCharFavHandlers = async(req, res) => {
    const { id, name, status, species, gender, origin, image, userId } = req.body;
    try {
        if(!id || !name || !status || !species || !gender || !origin || !image || !userId){
            return res.status(401).send('Missing data')
        };
        const createCharFav = await postCharFav(id, name, status, species, gender, origin, image, userId);
        res.status(200).json(createCharFav);
    } catch (error) {
        res.status(400).send({ error: error.message })
    };
};

const deleteCharFavHandlers = async(req, res) => {
    const { id } = req.params;
    try {
        const deleteFav = await deleteCharFav(id);
        res.status(200).json(deleteFav);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};


module.exports = {
    getCharFavHandlers,
    postCharFavHandlers,
    deleteCharFavHandlers
}