// import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import validations from './validations';

const Login = () => {
    const navigate = useNavigate();
    const users = useSelector(state => state.users);

    // const [form, setForm] = useState({
    //     email: ''
    // });

    // const handleChange = (event) => {
    //     setForm({
    //         ...form,
    //         [event.target.email]: event.target.value    //event.target.email
    //     });
    //     event.preventDefault();  
    //     navigate('/recover/initiate');
    // };

    const handleSubmit = (event) => {
        event.preventDefault();  
        navigate('/recover/initiate');
    };

    return(
        <div>
            <h2>Recupera tu cuenta</h2>
            <p>Ingresa tu correo electrónico para buscar tu cuenta.</p>
            <div>
                <label htmlFor="email" />
                {/* <input type="text" name="email" value={form.email} placeholder="Correo electrónico" /> */}

                <input type="text" name="email" placeholder="Correo electrónico" />
            </div>
            <div>
                {/* <button onChange={handleChange}>Buscar</button> */}
                <button onClick={handleSubmit}>Buscar</button>
            </div>
        </div>
    )
};


export default Login;