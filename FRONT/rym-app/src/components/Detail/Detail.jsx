import { useParams } from "react-router-dom";  //Con este hook nos traemos el id que pasamos por params.
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCharactersDetail } from "../../redux/actions";


const Detail = () => {
    const { id } = useParams(); //useParams() devuelve un objeto. Dentro estara la propiedad que creamos, en este caso "id" que fue creada cuando hicimos esto: <Route path="/detail/:id" element={<Detail/>}/>. ":id" este es el nombre del params creado.
    const dispatch = useDispatch();
    const characterDetail = useSelector(state => state.characterDetail);
    // console.log(characterDetail.name && characterDetail.name) 

    useEffect(() => {
        dispatch(getCharactersDetail(id));
    }, []); //id, characterDetail, dispatch

    return(
        <div>
            {characterDetail.name && <h1>{characterDetail.name}</h1>}
            {characterDetail.image && <img src={characterDetail.image} alt={characterDetail.name} />}
            {characterDetail.status && <p>{characterDetail.status}</p>}
            {characterDetail.species && <p>{characterDetail.species}</p>}
            {characterDetail.gender && <p>{characterDetail.gender}</p>}
            {characterDetail.origin && <p>{characterDetail.origin.name}</p>}
        </div>
    );
};


export default Detail;