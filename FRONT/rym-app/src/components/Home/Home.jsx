import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCharacters, cleanStateDetail } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import Characters from "../Characters/Characters";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cleanStateDetail());
        dispatch(getCharacters());
    }, [dispatch]); 
    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <Characters/>
        </div>
    );
};


export default Home;