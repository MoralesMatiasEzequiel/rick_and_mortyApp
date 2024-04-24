import { useState } from "react";



const CreateUser = () => {
    const [form, setForm] = useState({
        name: '',
        nickname: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value    
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <button>X</button> 
                <h2>Sign up</h2>
                <h5>It is fast and easy.</h5>
            </div>
            <div>
                <label htmlFor="name" />
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" />
                <label htmlFor="nickname" />
                <input type="text" name="nickname" value={form.nickname} onChange={handleChange} placeholder="Nickname" />
            </div>
            <div>
                <label htmlFor="email" />
                <input type="text" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
            </div>
            <div>
                <label htmlFor="password" />
                <input type="text" name="password" value={form.password} onChange={handleChange} placeholder="New password" />
            </div>
            <div>
                <p>
                    By clicking "Sign up", you agree to our Terms, Privacy Policy and Cookies Policy.
                </p>
            </div>
            <div>
                <button type="submit">Sign up</button>
            </div>
        </form>
    )
};


export default CreateUser;