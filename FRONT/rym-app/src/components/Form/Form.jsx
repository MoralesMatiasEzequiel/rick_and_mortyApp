import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validations from './validations';

const Form = () => {
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

            <button type='submit'>LOG IN</button> {/* Hacer un onSubmit mas adelante para enviar el formulario al back al momento de crear un usuario. Ver form del PI*/}
        </form>
    )
};


export default Form;