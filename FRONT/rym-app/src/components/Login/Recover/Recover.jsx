import { useNavigate } from 'react-router-dom';

const Recover = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();  
        navigate('/login')
    };

    return(
        <div>
            <h2>Ya te enviamos un correo para recuperar tu clave</h2>
            <button onClick={handleSubmit}>Volver atrás</button>
        </div>
    );
};

export default Recover;