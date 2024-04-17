import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <h1>AQUI PODRIAMOS HABLAR ALGO DE LA APP</h1>
            <button>
                <Link to='/login'>IR A LOG IN</Link>
            </button>
        </div>
    )
};


export default Landing;