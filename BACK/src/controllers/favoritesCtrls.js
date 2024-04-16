const { Favorite } = require('../db');

const getCharFav = async() => {
    try {     
        const favorites = await Favorite.findAll();
        return favorites;
    } catch (error) {
        return { error: error.message };
    };
};

const postCharFav = async(id, name, status, species, gender, origin, image) => {
    try {       
        const charFav = {
            id,
            name,
            status,
            species,
            gender,
            origin,
            image
        };
        const newCharFav = await Favorite.create(charFav);
        return newCharFav;
    } catch (error) {
        return { error: error.message };
    }
};

const deleteCharFav = async(id) => {
    try {
        const deleted = await Favorite.destroy({ where: {id: id} });
        const favorites = await Favorite.findAll();
        return favorites;
    } catch (error) {
        return { error: error.message };
    }
};


module.exports = {
    getCharFav,
    postCharFav,
    deleteCharFav
};