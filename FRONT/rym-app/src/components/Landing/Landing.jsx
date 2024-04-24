import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();

    const handleChange = () => {
        navigate('/login');
    };
    return (
        <div>
            <h1>AQUI PODRIAMOS HABLAR ALGO DE LA APP O HACERLO EN EL ABOUT?</h1>
            <button onClick={handleChange}>IR A LOG IN</button>
        </div>
    )
};


export default Landing;