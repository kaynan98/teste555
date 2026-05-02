import { useState } from 'react';
import { Heart, Sparkles, Star, Moon, Sun, Cloud, Flame, Droplets } from 'lucide-react';

const moods = [
  { icon: Heart, label: 'Romântico', color: 'text-pink-400' },
  { icon: Flame, label: 'Fogoso', color: 'text-red-500' },
  { icon: Droplets, label: 'Sensual', color: 'text-blue-400' },
  { icon: Sparkles, label: 'Aventureiro', color: 'text-purple-400' },
  { icon: Star, label: 'Estrelado', color: 'text-yellow-400' },
  { icon: Moon, label: 'Noturno', color: 'text-indigo-400' },
  { icon: Sun, label: 'Solar', color: 'text-orange-400' },
  { icon: Cloud, label: 'Suave', color: 'text-gray-300' },
];

const challenges = [
  'Beije o pescoço do parceiro por 30 segundos',
  'Toque suavemente as costas do parceiro',
  'Sussurre algo picante no ouvido',
  'Massageie os ombros do parceiro',
  'Dê um beijo demorado',
  'Toque a coxa do parceiro lentamente',
  'Faça um elogio sensual',
  'Morda levemente o lábio inferior',
  'Deslize a mão pelo peito do parceiro',
  'Beije a nuca do parceiro',
  'Toque a barriga do parceiro suavemente',
  'Sussurre o nome do parceiro',
  'Dê um beijo no ombro',
  'Toque o rosto do parceiro com carinho',
  'Abrace por trás e beije a orelha',
];

export default function Index() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [currentChallenge, setCurrentChallenge] = useState<string>('');
  const [showChallenge, setShowChallenge] = useState(false);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleMoodSelect = (index: number) => {
    setSelectedMood(index);
    setShowChallenge(false);
    setCurrentChallenge('');
    setShowScore(false);
  };

  const generateChallenge = () => {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    setCurrentChallenge(challenges[randomIndex]);
    setShowChallenge(true);
    setShowScore(false);
  };

  const handleComplete = () => {
    setScore(score + 1);
    setShowScore(true);
    setTimeout(() => {
      setShowScore(false);
      generateChallenge();
    }, 1500);
  };

  const handleSkip = () => {
    generateChallenge();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Jogo do Amor
          </h1>
          <p className="text-xl text-gray-300">
            Escolha seu mood e embarque em uma jornada sensual
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {moods.map((mood, index) => {
            const Icon = mood.icon;
            return (
              <button
                key={index}
                onClick={() => handleMoodSelect(index)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  selectedMood === index
                    ? 'border-purple-400 bg-purple-900/50 shadow-lg shadow-purple-500/20'
                    : 'border-gray-700 bg-gray-800/50 hover:border-gray-500'
                }`}
              >
                <Icon className={`w-8 h-8 mx-auto mb-2 ${mood.color}`} />
                <span className="block text-sm font-medium">{mood.label}</span>
              </button>
            );
          })}
        </div>

        {selectedMood !== null && (
          <div className="max-w-lg mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              {!showChallenge ? (
                <div className="text-center">
                  <p className="text-gray-300 mb-6">
                    Mood selecionado: <span className="text-purple-400 font-semibold">{moods[selectedMood].label}</span>
                  </p>
                  <button
                    onClick={generateChallenge}
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/30"
                  >
                    Iniciar Desafio
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="mb-6">
                    <p className="text-sm text-gray-400 mb-2">Seu desafio:</p>
                    <p className="text-2xl font-semibold text-purple-300">{currentChallenge}</p>
                  </div>
                  
                  {showScore && (
                    <div className="mb-4 text-green-400 font-semibold text-lg animate-bounce">
                      +1 ponto! 🎉
                    </div>
                  )}

                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={handleComplete}
                      className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-green-500/30"
                    >
                      Completar ✓
                    </button>
                    <button
                      onClick={handleSkip}
                      className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300"
                    >
                      Pular
                    </button>
                  </div>

                  <div className="mt-6 text-gray-400">
                    Pontuação: <span className="text-purple-400 font-bold text-xl">{score}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
