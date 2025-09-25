import {  useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from "../../services/api";
import './moves.css';

function Moves() {
    const { id } = useParams();
    const navagete = useNavigate();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const apiKey = process.env.API_KEY;
    useEffect(() => {
        async function loadMovie() {
            await Api.get(`/movie/${id}`, {
                params: {
                    api_key: apiKey,
                    language: "pt-BR",
                }
            }).then((res) => {
                setMovie(res.data);
                setLoading(false);
            }).catch(() => {
                console.log("Filme não encontrado");
                navagete("/", { replace: true });
                return
            });
        }
        loadMovie();

        return () => {
            console.log("Componente desmontado");
        }
    }, [navagete,id]);
    function salveMovie() {
        const myList = localStorage.getItem('@primeflix');
        let moviesSalve = JSON.parse(myList) || [];
        const hasMovie = moviesSalve.some((movieSalve) => movieSalve.id === movie.id);
        if (hasMovie) {
            alert("Esse filme já está na sua lista");
            return;
        }
        moviesSalve.push(movie);
        localStorage.setItem('@primeflix', JSON.stringify(moviesSalve));
        alert("Filme salvo com sucesso!");
    }
    if (loading) {
        return (
            <div className="movie-info">
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }
    return (
        <div>
            
            <div className="movie-info">
                <h1>{movie.title}</h1>
                <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />

              <h3>Sinopse</h3>
              <span>{movie.overview}</span>
              <strong>Avaliação: {movie.vote_average} / 10</strong>

              <strong>Lançamento: {movie.release_date}</strong>

              <div className="area-buttons">
                <button onClick={salveMovie}>salvar</button>
                <button><a target="_blank" rel="noreferrer" href={`https://www.youtube.com/results?search_query=${movie.title} trailer`}>trailer</a></button>
              </div>
            </div>
        </div>
    );
}
// Duplicate Moves function removed

export default Moves;