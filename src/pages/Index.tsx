import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Bem-vindo à{' '}
            <span className="text-primary">Loja do Mengão</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Encontre as melhores camisas do Flamengo com qualidade oficial e preços imperdíveis.
            Vista a paixão pelo maior clube do mundo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/camisas">
              <Button size="lg" className="w-full sm:w-auto">
                Ver Camisas
              </Button>
            </Link>
            <Link to="/camisas">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Promoções
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Destaques Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Por que comprar conosco?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Qualidade Oficial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Camisas licenciadas com o selo de qualidade do Clube de Regatas do Flamengo.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Entrega Rápida</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Receba sua camisa em até 5 dias úteis para todo o Brasil.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Preço Justo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Os melhores preços do mercado com condições especiais de pagamento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Pronto para vestir o manto?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Clique abaixo e confira nossa coleção completa de camisas do Mengão.
          </p>
          <Link to="/camisas">
            <Button size="lg">Comprar Agora</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
