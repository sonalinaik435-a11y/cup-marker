'use client';

import { useState } from 'react';
import CupTracker from '@/components/cups/CupTracker';
import GameStats from '@/components/cups/GameStats';

interface CupPosition {
  id: number;
  position: number | null;
  color: string;
  label: string;
}

interface GameState {
  cups: CupPosition[];
  gameStarted: boolean;
  correctGuesses: number;
  totalGuesses: number;
}

export default function CupsPage() {
  const [gameState, setGameState] = useState<GameState>({
    cups: [
      { id: 1, position: null, color: 'bg-red-500', label: 'Cup 1' },
      { id: 2, position: null, color: 'bg-blue-500', label: 'Cup 2' },
      { id: 3, position: null, color: 'bg-green-500', label: 'Cup 3' },
    ],
    gameStarted: false,
    correctGuesses: 0,
    totalGuesses: 0,
  });

  const startGame = () => {
    setGameState(prev => ({
      ...prev,
      gameStarted: true,
      cups: prev.cups.map(cup => ({ ...cup, position: null })),
    }));
  };

  const markCupPosition = (cupId: number, position: number) => {
    setGameState(prev => ({
      ...prev,
      cups: prev.cups.map(cup =>
        cup.id === cupId ? { ...cup, position } : cup
      ),
    }));
  };

  const recordGuess = (isCorrect: boolean) => {
    setGameState(prev => ({
      ...prev,
      correctGuesses: isCorrect ? prev.correctGuesses + 1 : prev.correctGuesses,
      totalGuesses: prev.totalGuesses + 1,
    }));
  };

  const resetGame = () => {
    setGameState({
      cups: [
        { id: 1, position: null, color: 'bg-red-500', label: 'Cup 1' },
        { id: 2, position: null, color: 'bg-blue-500', label: 'Cup 2' },
        { id: 3, position: null, color: 'bg-green-500', label: 'Cup 3' },
      ],
      gameStarted: false,
      correctGuesses: 0,
      totalGuesses: 0,
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-2 animate-fadeIn">
          🥤 Cup Position Tracker
        </h1>
        <p className="text-blue-200 text-center mb-12 text-lg">
          Track cup movements and improve your prediction accuracy
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Tracker */}
          <div className="lg:col-span-2">
            <CupTracker
              gameState={gameState}
              onMarkCup={markCupPosition}
              onStartGame={startGame}
              onRecordGuess={recordGuess}
            />
          </div>

          {/* Stats Sidebar */}
          <div>
            <GameStats
              correctGuesses={gameState.correctGuesses}
              totalGuesses={gameState.totalGuesses}
              gameStarted={gameState.gameStarted}
              onReset={resetGame}
            />
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">📖 How to Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h3 className="text-blue-400 font-bold mb-2">1. Start Tracking</h3>
              <p>Click "Start New Game" to begin tracking cup positions.</p>
            </div>
            <div>
              <h3 className="text-blue-400 font-bold mb-2">2. Mark Positions</h3>
              <p>Click on cup numbers to mark which position each cup is in after the shuffle.</p>
            </div>
            <div>
              <h3 className="text-blue-400 font-bold mb-2">3. Track Movements</h3>
              <p>Update positions as cups move. The system keeps track of all changes.</p>
            </div>
            <div>
              <h3 className="text-blue-400 font-bold mb-2">4. Verify Results</h3>
              <p>Record if your prediction was correct and track your accuracy over time.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}