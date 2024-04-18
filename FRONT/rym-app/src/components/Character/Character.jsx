import { Link } from 'react-router-dom';


const Character = ({ id, name, status, species, gender, origin, image }) => {

    return(
        <div>
            <Link to={`/detail/${id}`}>
                <h2>{name}</h2>
            </Link>
            {/* <span>{status}</span>
            <span>{species}</span>
            <span>{gender}</span>
            <span>{origin}</span> */}
            <img src={image} alt={name} />
        </div>
    );
};


export default Character;