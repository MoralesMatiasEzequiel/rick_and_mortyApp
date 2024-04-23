import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import validations from './validations';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../redux/actions';

const Form = () => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value    
        })
        setErrors(validations({
            ...form,
            [event.target.name]: event.target.value
        }))
    };

    const handleSubmit = (event) => {        
        event.preventDefault();  
        console.log(users);
        if (form.email === users.email && form.password === users.password) {
            // dispatch(changeStateLogged());
            navigate('/home');
        } else {
            alert('El email o el password son incorrectos.');
        }
        navigate('/home');

    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();  
        navigate('/login/identify');
    };
    // console.log(users);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" value={form.email} onChange={handleChange} />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <hr />
            <div>
                <label htmlFor="password">Password: </label>
                <input type="text" name="password" value={form.password} onChange={handleChange} />
                {errors.password && <span>{errors.password}</span>}
            </div>
            <div>
                <button type='submit'>Iniciar sesión</button> {/* Hacer un onSubmit mas adelante para enviar el formulario al back al momento de crear un usuario. Ver form del PI*/}
            </div>
            <div>
                <Link to='/login/identify'>¿Olvidaste tu contraseña?</Link>
            </div>
            <div>
                <button type='submit' onClick={handleLoginSubmit}>Crear cuenta nueva</button>
            </div>
        </form>
    )
};


export default Form;