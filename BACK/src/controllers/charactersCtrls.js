const { URL } = process.env;
const axios = require('axios')

// const getCharacters = async() => {
//     const randomNumberPage = Math.floor(Math.random() * 42) + 1;
//     try {
//         const { data } = await axios(`${URL}?page=${randomNumberPage}`);
//         return data.results;
//     } catch (error) {
//         return { error: error.message };
//     };
// };

// const getCharacters = async () => {
//     const characters = [];
//     try {
//         for (let i = 1; i <= 42; i++) {
//             const { data } = await axios(`${URL}?page=${i}`);
//             characters.push(...data.results);
//         }
//         console.log(characters);
//         return characters;
//     } catch (error) {
//         return { error: error.message };
//     }
// };

const getCharacters = async () => {
    try {
        const requests = Array.from({ length: 42 }, (_, index) => axios(`${URL}?page=${index + 1}`));
        const responses = await Promise.all(requests);
        const characters = responses.flatMap(response => response.data.results);
        return characters;
    } catch (error) {
        return { error: error.message };
    }
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