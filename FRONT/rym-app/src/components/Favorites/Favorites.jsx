import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Character from "../Character/Character";
import Detail from '../Detail/Detail';


const Favorites = () => {
    const favoritesCharacters = useSelector(state => state.favoritesCharacters);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // useEffect(() => {
    //     dispatch()
    // }, []);

    return(
        <div>
            {
                favoritesCharacters?.map(favorite =>{
                    return(
                        <Character
                        key={favorite.id}
                        name={favorite.name}
                        image={favorite.image}
                        />
                    )
                })
            }
        </div>
    );
};


export default Favorites;