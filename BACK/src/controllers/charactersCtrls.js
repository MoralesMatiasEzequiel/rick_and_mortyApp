const { URL } = process.env;
const axios = require('axios')

const getCharacters = async() => {
    const { data } = await axios(`${URL}`)
    return data.results;
};

const getCharById = async(id) => {
    const { data } = await axios(`${URL}/${id}`);
    // if(!data.name) throw new Error(`ID: ${id} Not found`)
    const character = {
        id: data.id,
        name: data.name,
        species: data.species,
        origin: data.origin,
        image: data.image,
        gender: data.gender,
        status: data.status
    };
    return character;
};


module.exports = {
    getCharacters,
    getCharById
}