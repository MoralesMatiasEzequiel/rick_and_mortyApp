const { Favorite } = require('../db');

const getCharFav = async() => {
    const favorites = await Favorite.findAll();
    console.log(favorites);
    return favorites;
};


const postCharFav = async(id, name, origin, status, species, gender, image) => {
    const charFav = {
        id,
        name,
        origin,
        status,
        species,
        gender,
        image
    };
    const newCharFav = await Favorite.create(charFav);
    return newCharFav;
};

const deleteCharFav = async(id) => {
    // const deletedFav = await Favorite.findByPk(id);
    const deleted = await Favorite.destroy({ where: id });
    const favorites = await Favorite.findAll();
    console.log(favorites);

    return favorites;
};


module.exports = {
    getCharFav,
    postCharFav,
    deleteCharFav
};