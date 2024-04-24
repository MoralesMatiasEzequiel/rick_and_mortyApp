import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../redux/actions';
import validations from './validations';

const Form = () => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // dispatch(getUsers());
    useEffect(() => {
        dispatch(getUsers())
    }, []);  //array de dependencia = users. Agregar una vez qe terminemos la app.

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
        const userFound = [];
        users.forEach(user => {
            if(form.email === user.email && form.password === user.password) {
                return userFound.push(user);
            }
        });
        if (!userFound.length) {
            alert('The email or password is incorrect.');
            return navigate('/login');
        }
        if(userFound[0].active === false){
            alert('The user was banned, log in with another user.');
            return navigate('/login');
        }
        navigate('/home');
    };

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
                <button type='submit'>Iniciar sesión</button> 
            </div>
            <div>
                <Link to='/login/identify'>¿Olvidaste tu contraseña?</Link>
            </div>
            <div>
                <button>Crear cuenta nueva</button>
            </div>
        </form>
    )
};


export default Form;