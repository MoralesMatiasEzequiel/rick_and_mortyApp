import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../redux/actions';
// import validations from './validations';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(state => state.users);

    useEffect(() => {
        dispatch(getUsers())
    }, []);  //array de dependencia = users. Agregar una vez qe terminemos la app.

    const [form, setForm] = useState({
        email: ''
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value    
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();  
        const userFound = [];
        users.forEach(user => {
            if(form.email === user.email) {
                return userFound.push(user);
            }
        });
        if (!userFound.length) {
            alert('Este correo no existe.');
            return navigate('/login/identify');
        }
        if(userFound[0].active === false){
            alert('The user was banned, log in with another user.');
            return navigate('/login/identify');
        }
        navigate('/recover/initiate');
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Recupera tu cuenta</h2>
                <p>Ingresa tu correo electrónico para buscar tu cuenta.</p>
                <div>
                    <label htmlFor="email" />
                    <input type="text" name="email" value={form.email} onChange={handleChange} placeholder="Correo electrónico" />
                </div>
                <div>
                    <button onClick={handleSubmit}>Buscar</button>
                </div>
            </div>
        </form>
    )
};


export default Login;