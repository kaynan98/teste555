import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}

const produtos: Produto[] = [
  { id: 1, nome: 'Camisa Flamengo I 2024', preco: 299.90, imagem: 'https://via.placeholder.com/300x300?text=Camisa+I' },
  { id: 2, nome: 'Camisa Flamengo II 2024', preco: 279.90, imagem: 'https://via.placeholder.com/300x300?text=Camisa+II' },
  { id: 3, nome: 'Camisa Flamengo III 2024', preco: 259.90, imagem: 'https://via.placeholder.com/300x300?text=Camisa+III' },
  { id: 4, nome: 'Camisa Flamengo Retrô 1990', preco: 199.90, imagem: 'https://via.placeholder.com/300x300?text=Retro' },
  { id: 5, nome: 'Camisa Flamengo Treino', preco: 149.90, imagem: 'https://via.placeholder.com/300x300?text=Treino' },
  { id: 6, nome: 'Camisa Flamengo Goalkeeper', preco: 249.90, imagem: 'https://via.placeholder.com/300x300?text=Goalkeeper' },
];

interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}

export default function Camisas() {
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);

  const adicionarAoCarrinho = (produto: Produto) => {
    setCarrinho((prev) => {
      const existente = prev.find((item) => item.produto.id === produto.id);
      if (existente) {
        return prev.map((item) =>
          item.produto.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...prev, { produto, quantidade: 1 }];
    });
  };

  const removerDoCarrinho = (produtoId: number) => {
    setCarrinho((prev) => prev.filter((item) => item.produto.id !== produtoId));
  };

  const total = carrinho.reduce(
    (acc, item) => acc + item.produto.preco * item.quantidade,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">
        Camisas do Flamengo
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtos.map((produto) => (
          <Card key={produto.id} className="flex flex-col">
            <CardHeader className="p-0">
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="flex-1 p-4">
              <CardTitle className="text-lg">{produto.nome}</CardTitle>
              <p className="text-2xl font-bold text-primary mt-2">
                R$ {produto.preco.toFixed(2)}
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button
                className="w-full"
                onClick={() => adicionarAoCarrinho(produto)}
              >
                Adicionar ao Carrinho
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {carrinho.length > 0 && (
        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Carrinho</h2>
          <ul className="space-y-4">
            {carrinho.map((item) => (
              <li
                key={item.produto.id}
                className="flex items-center justify-between bg-card p-4 rounded-lg shadow-sm"
              >
                <div>
                  <p className="font-semibold text-foreground">
                    {item.produto.nome}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Quantidade: {item.quantidade}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-bold text-primary">
                    R$ {(item.produto.preco * item.quantidade).toFixed(2)}
                  </p>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removerDoCarrinho(item.produto.id)}
                  >
                    Remover
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-right">
            <p className="text-xl font-bold text-foreground">
              Total: R$ {total.toFixed(2)}
            </p>
            <Button className="mt-2">Finalizar Compra</Button>
          </div>
        </div>
      )}
    </div>
  );
}
