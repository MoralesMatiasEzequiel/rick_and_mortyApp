import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Recover = () => {
    const navigate = useNavigate();
    const userFound = useSelector(state => state.userFound);

    const handleSubmit = (event) => {
        event.preventDefault();  
        navigate('/login/identify')
    };

    return(
        <div>
            {userFound ? (
                <>
                <h2>Ya te enviamos un correo para recuperar tu clave</h2>
                </>
            ) : (
                <div>
                    <h2>Este correo no existe</h2>
                    <button onClick={handleSubmit}>Volver atrás</button>
                </div>
            )
    
    
            }

        </div>
    );
};

export default Recover;