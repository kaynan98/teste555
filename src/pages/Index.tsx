import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Index() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
          <span className="text-primary">Mengão</span> Store
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8">
          A loja oficial do maior clube do mundo. Vista a paixão rubro-negra!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/dashboard">
            <Button size="lg" className="w-full sm:w-auto">
              Acessar Painel
            </Button>
          </Link>
          <Link to="/home">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Conheça a Loja
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
