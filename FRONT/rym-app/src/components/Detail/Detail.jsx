import { useParams } from "react-router-dom";  //Con este hook nos traemos el id que pasamos por params.
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCharactersDetail } from "../../redux/actions";


const Detail = () => {
    const { id } = useParams(); //useParams() devuelve un objeto. Dentro estara la propiedad que creamos, en este caso "id" que fue creada cuando hicimos esto: <Route path="/detail/:id" element={<Detail/>}/>. ":id" este es el nombre del params creado.
    const dispatch = useDispatch();
    const characterDetail = useSelector(state => state.characterDetail);

    useEffect(() => {
        dispatch(getCharactersDetail(id))
    }, [id]);  //id
// console.log(characterDetail);
    return(
        <div>
            <h1>{characterDetail.name}</h1>
            <img src={characterDetail.image} alt={characterDetail.name} />
            <p>{characterDetail.status}</p>
            <p>{characterDetail.species}</p>
            <p>{characterDetail.gender}</p>
            <p>{characterDetail.origin.name}</p>

        </div>
    );
};


export default Detail;