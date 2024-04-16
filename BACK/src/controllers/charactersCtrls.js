const { URL } = process.env;
const axios = require('axios')

const getCharacters = async() => {
    try {
        const { data } = await axios(`${URL}`)
        return data.results;
    } catch (error) {
        return { error: error.message };
    };
};

const getCharById = async(id) => {
    try {
        const { data } = await axios(`${URL}/${id}`);
        const character = {
            id: data.id,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender,
            status: data.status
        };
        // if(!data) throw new Error(`ID: ${id} Not found`)
        // if(!data) return { error: 'No existe un usuario asociado a ese ID'};
        return character;
    } catch (error) {
        return { error: error.message };
    };
 
    
};


module.exports = {
    getCharacters,
    getCharById
}