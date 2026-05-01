import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Index from './pages/Index';
import Camisas from './pages/Camisas';

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-background border-b border-border px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-foreground">
            Loja do Mengão
          </Link>
          <div className="flex gap-4">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Início
            </Link>
            <Link to="/camisas" className="text-foreground hover:text-primary transition-colors">
              Camisas
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/camisas" element={<Camisas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
