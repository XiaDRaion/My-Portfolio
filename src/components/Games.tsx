import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gamepad2, Trophy, Star } from 'lucide-react';

const games = [
  {
    id: 'ice-cream-stack',
    title: 'Ice Cream Stack',
    description: 'Stack ice cream scoops as high as you can without dropping them!',
    icon: '🍦',
    difficulty: 'Easy',
    status: 'Coming Soon'
  },
  {
    id: 'pastel-match',
    title: 'Pastel Match',
    description: 'Match beautiful pastel colors in this relaxing puzzle game.',
    icon: '🎨',
    difficulty: 'Medium',
    status: 'Coming Soon'
  },
  {
    id: 'sweet-runner',
    title: 'Sweet Runner',
    description: 'Run through a candy-filled world collecting ice cream treats!',
    icon: '🏃‍♀️',
    difficulty: 'Hard',
    status: 'Coming Soon'
  }
];

const Games = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-ice-cream-mint';
      case 'Medium': return 'bg-ice-cream-vanilla';
      case 'Hard': return 'bg-ice-cream-strawberry';
      default: return 'bg-ice-cream-lavender';
    }
  };

  return (
    <section id="games" className="section-lavender">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Sweet <span className="bg-gradient-vanilla bg-clip-text text-transparent">Games</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a break and enjoy some delightful games! Each one is crafted with the same 
            attention to detail as my development projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {games.map((game, index) => (
            <Card 
              key={game.id}
              className={`bg-white/60 backdrop-blur-sm border-0 shadow-soft hover:shadow-dreamy transition-all duration-300 cursor-pointer transform hover:scale-105 animate-fade-in-up ${
                selectedGame === game.id ? 'ring-2 ring-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedGame(selectedGame === game.id ? null : game.id)}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4 animate-bounce-gentle">
                  {game.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {game.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {game.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Difficulty:</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getDifficultyColor(game.difficulty)}`}>
                      {game.difficulty}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Status:</span>
                    <span className="px-3 py-1 bg-ice-cream-peach rounded-full text-sm font-medium text-foreground">
                      {game.status}
                    </span>
                  </div>

                  {selectedGame === game.id && (
                    <div className="animate-fade-in-up pt-4 border-t border-border">
                      <div className="text-center space-y-4">
                        <div className="flex justify-center space-x-4 text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Trophy className="h-4 w-4" />
                            <span className="text-sm">High Score: ---</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4" />
                            <span className="text-sm">Best: ---</span>
                          </div>
                        </div>
                        <Button 
                          className="btn-strawberry w-full"
                          disabled={game.status === 'Coming Soon'}
                        >
                          <Gamepad2 className="mr-2 h-4 w-4" />
                          {game.status === 'Coming Soon' ? 'Coming Soon' : 'Play Now'}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-soft max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Game Development Progress
              </h3>
              <p className="text-muted-foreground mb-6">
                These games are currently in development! They'll feature the same delightful 
                design and smooth animations you see throughout this portfolio.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Games Planned</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">Q2 2024</div>
                  <div className="text-sm text-muted-foreground">Expected Launch</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">Free</div>
                  <div className="text-sm text-muted-foreground">To Play</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Ice Cream Melt Effect */}
      {/* <div className="melt-overlay"></div>
      <div className="melt-drops">
        <div className="melt-drop"></div>
        <div className="melt-drop"></div>
        <div className="melt-drop"></div>
        <div className="melt-drop"></div>
      </div> */}

      {/* Floating Melt Elements */}
      {/* <div className="floating-melt" style={{ top: '10%', right: '5%', animationDelay: '0.5s' }}></div>
      <div className="floating-melt" style={{ bottom: '35%', left: '10%', animationDelay: '3.5s' }}></div> */}
    </section>
  );
};

export default Games;