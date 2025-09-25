import { Link } from "react-router-dom";
import './erro.css';
function Erro() {
  return (
    <div className="not-found">
      <h1>Erro 404</h1>
      <p>Página não encontrada!</p>
      <Link to="/">Voltar para a Home</Link>
    </div>
  );
}

export default Erro;