import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Moves from './pages/Moves';
import Header from './components/Header';
import Erro from './pages/Erro';
import Favorites from './pages/favorites';
function RoutersApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/moves/:id' element={<Moves />} />
                <Route path='/favorites' element={<Favorites />} />

                <Route path='*' element={<Erro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutersApp;