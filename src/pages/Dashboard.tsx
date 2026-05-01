import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-foreground">Painel do Cliente</h1>
        <Link to="/home">
          <Button variant="outline">Voltar à Loja</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Meus Pedidos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Você ainda não possui pedidos.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Favoritos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Nenhum item favoritado.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Dados da Conta</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Gerencie suas informações pessoais.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
