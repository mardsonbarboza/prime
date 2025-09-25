import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './favorites.css';
function Favorites() {
    const [moves, setMoves] = useState([]);
    useEffect(() => {
        const myList = localStorage.getItem("@primeflix");
        setMoves(JSON.parse(myList) || []);
    }, []);
    function handleRemove(id) {
        let filtroMoves = moves.filter((item) => {
            return (item.id !== id)
        })
        setMoves(filtroMoves);
        localStorage.setItem("@primeflix", JSON.stringify(filtroMoves));
    }
    return (
        <div className="my-moves">
            <h1>Favoritos</h1>
            {moves.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}
            <ul>
                {moves.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/move/${item.id}`}>Ver detalhes</Link>
                                <button onClick={() => handleRemove(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favorites;