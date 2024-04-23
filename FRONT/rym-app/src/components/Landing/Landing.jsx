import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getUsers } from '../../redux/actions';

const Landing = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = () => {
        dispatch(getUsers());
        navigate('/login');
    };
    return (
        <div>
            <h1>AQUI PODRIAMOS HABLAR ALGO DE LA APP O HACERLO EN EL ABOUT?</h1>
            <button onClick={handleChange}>IR A LOG IN</button>
            {/* <button>
                <Link to='/login'>IR A LOG IN</Link>
            </button> */}
        </div>
    )
};


export default Landing;