'use client';

import { useState } from 'react';

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

interface CupTrackerProps {
  gameState: GameState;
  onMarkCup: (cupId: number, position: number) => void;
  onStartGame: () => void;
  onRecordGuess: (isCorrect: boolean) => void;
}

export default function CupTracker({
  gameState,
  onMarkCup,
  onStartGame,
  onRecordGuess,
}: CupTrackerProps) {
  const [selectedCupId, setSelectedCupId] = useState<number | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);

  const handlePositionClick = (position: number) => {
    if (selectedCupId !== null) {
      onMarkCup(selectedCupId, position);
      setSelectedCupId(null);
      setSelectedPosition(null);
    } else {
      setSelectedPosition(position);
    }
  };

  const handleCupClick = (cupId: number) => {
    setSelectedCupId(cupId);
    setSelectedPosition(null);
  };

  const handleVerify = (isCorrect: boolean) => {
    onRecordGuess(isCorrect);
  };

  const allPositionsMarked = gameState.cups.every(cup => cup.position !== null);

  return (
    <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 shadow-2xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">Position Tracker</h2>
        {gameState.gameStarted ? (
          <button
            onClick={onStartGame}
            className="px-6 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-all"
          >
            🔄 New Game
          </button>
        ) : (
          <button
            onClick={onStartGame}
            className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all"
          >
            ▶️ Start Game
          </button>
        )}
      </div>

      {!gameState.gameStarted ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🥤</div>
          <p className="text-gray-300 text-lg">Click "Start Game" to begin tracking cup positions</p>
        </div>
      ) : (
        <>
          {/* Cup Selection Panel */}
          <div className="mb-8">
            <p className="text-blue-300 font-semibold mb-4">Step 1: Select a Cup</p>
            <div className="grid grid-cols-3 gap-4">
              {gameState.cups.map(cup => (
                <button
                  key={cup.id}
                  onClick={() => handleCupClick(cup.id)}
                  className={`p-6 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
                    selectedCupId === cup.id
                      ? `${cup.color} text-white ring-4 ring-yellow-300 scale-105`
                      : `${cup.color} text-white hover:shadow-lg`
                  }`}
                >
                  {cup.label}
                </button>
              ))}
            </div>
          </div>

          {/* Position Selection Panel */}
          <div className="mb-8">
            <p className="text-blue-300 font-semibold mb-4">Step 2: Select Final Position</p>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(position => (
                <button
                  key={position}
                  onClick={() => handlePositionClick(position)}
                  disabled={!selectedCupId}
                  className={`p-6 rounded-xl font-bold text-lg transition-all transform ${
                    selectedCupId
                      ? 'hover:scale-105 cursor-pointer'
                      : 'opacity-50 cursor-not-allowed'
                  } ${
                    selectedPosition === position && selectedCupId
                      ? 'bg-yellow-400 text-slate-900 ring-4 ring-yellow-300 scale-105'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Position {position}
                </button>
              ))}
            </div>
          </div>

          {/* Current Tracking Status */}
          <div className="bg-slate-700 bg-opacity-50 rounded-xl p-6 mb-8">
            <p className="text-blue-300 font-semibold mb-4">📊 Current Tracking</p>
            <div className="space-y-3">
              {gameState.cups.map(cup => (
                <div key={cup.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded ${cup.color}`}></div>
                    <span className="text-white font-medium">{cup.label}</span>
                  </div>
                  <span className={`px-4 py-1 rounded font-bold ${
                    cup.position !== null
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-600 text-gray-300'
                  }`}>
                    {cup.position !== null ? `Position ${cup.position}` : 'Not Marked'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          {allPositionsMarked && (
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleVerify(true)}
                className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg"
              >
                ✅ Correct Prediction
              </button>
              <button
                onClick={() => handleVerify(false)}
                className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-all transform hover:scale-105 shadow-lg"
              >
                ❌ Incorrect Prediction
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}