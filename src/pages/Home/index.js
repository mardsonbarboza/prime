import { useEffect, useState } from "react";
import Api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = process.env.API_KEY;
  useEffect(() => {
    // Aqui você pode buscar dados de filmes de uma API, se desejar
    async function loadMovies() {
      const response = await Api.get("discover/movie", {
        params: {
          api_key: apiKey,
          language: "pt-BR",
          page: 1,
          limit: 10,
        },
      });
      setMovies(response.data.results);
      setLoading(false);
      console.log(response.data.results);
    }
    
    loadMovies();
  }, []);
  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    )
  }
  return (
    <div className="container">
      <div className="movies-list">
        {movies.map((movie) => {
          return (
            <article key={movie.id}>
              <strong>{movie.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <Link to={`/moves/${movie.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  );
}

export default Home;
