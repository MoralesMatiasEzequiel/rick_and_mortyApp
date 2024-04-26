import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {

    return(
        <nav>
            <div>
                <span>Logo</span>
                <Link to='/favorites'><button>Favorites</button></Link>
                <Link to='/about'><button>About</button></Link>
                <Link to='/contact'><button>Contact</button></Link>
                <span>Oscuro/Claro</span>
                <Link to='/login'><button>Sign up</button></Link>
            </div>
            <div>
                <SearchBar/>
            </div>
        </nav>
    )
};


export default NavBar;