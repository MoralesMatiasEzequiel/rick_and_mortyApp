const { URL } = process.env;
const axios = require('axios')

const getCharacters = async() => {
    const { data } = await axios(`${URL}`)
    return data.results;
};

const getCharById = async(id) => {
    const { data } = await axios(`${URL}/${id}`);
    // if(!data) throw new Error(`ID: ${id} Not found`)
    // if(!data) return { error: 'No existe un usuario asociado a ese ID'};
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