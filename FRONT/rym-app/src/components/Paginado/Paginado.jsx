import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../../redux/actions";


const Paginado = ({ cantPages }) => {
    const { currentPage } = useSelector((state) => state);
    const dispatch = useDispatch();

    const next = () => {
        dispatch(nextPage())
    };
    
    const prev = () => {
        dispatch(prevPage())
    };

    return(
        <div>
            {currentPage > 1 ? (
                <div>
                    <button onClick={prev}>{"<"}</button>
                    <button onClick={prev}>{currentPage - 1}</button>
                </div>
            ) : null}   
            <button>{currentPage}</button>
            {currentPage < cantPages ? (
                <div>
                    <button onClick={next}>{currentPage + 1}</button>
                    <button onClick={next}>{">"}</button>
                </div>
            ) : null}    
        </div>
    )
};


export default Paginado;