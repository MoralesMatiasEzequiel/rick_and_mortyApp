// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchEmail } from '../../redux/actions';
// import validations from './validations';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const userFound = useSelector(state => state.userFound);



    const handleSubmit = (event) => {
        event.preventDefault();  
        dispatch(searchEmail());      
        // if(!userFound){
        //     return navigate('/recover/error');
        // };
        // navigate('/recover/initiate');
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