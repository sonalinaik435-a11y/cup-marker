interface GameStatsProps {
  correctGuesses: number;
  totalGuesses: number;
  gameStarted: boolean;
  onReset: () => void;
}

export default function GameStats({
  correctGuesses,
  totalGuesses,
  gameStarted,
  onReset,
}: GameStatsProps) {
  const accuracy = totalGuesses > 0 ? Math.round((correctGuesses / totalGuesses) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-6">📈 Game Statistics</h2>

        {/* Correct Guesses */}
        <div className="mb-6 bg-green-500 bg-opacity-10 rounded-xl p-4 border border-green-500 border-opacity-30">
          <p className="text-green-300 text-sm font-semibold mb-1">Correct Predictions</p>
          <p className="text-4xl font-bold text-green-400">{correctGuesses}</p>
          <p className="text-green-200 text-xs mt-2">Accurate cup position guesses</p>
        </div>

        {/* Total Guesses */}
        <div className="mb-6 bg-blue-500 bg-opacity-10 rounded-xl p-4 border border-blue-500 border-opacity-30">
          <p className="text-blue-300 text-sm font-semibold mb-1">Total Attempts</p>
          <p className="text-4xl font-bold text-blue-400">{totalGuesses}</p>
          <p className="text-blue-200 text-xs mt-2">Total games played</p>
        </div>

        {/* Accuracy */}
        <div className="bg-purple-500 bg-opacity-10 rounded-xl p-4 border border-purple-500 border-opacity-30">
          <p className="text-purple-300 text-sm font-semibold mb-1">Accuracy Rate</p>
          <div className="flex items-baseline gap-2">
            <p className="text-4xl font-bold text-purple-400">{accuracy}%</p>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2 mt-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-full transition-all duration-300"
              style={{ width: `${accuracy}%` }}
            ></div>
          </div>
          <p className="text-purple-200 text-xs mt-2">{totalGuesses > 0 ? 'Based on all attempts' : 'No games yet'}</p>
        </div>
      </div>

      {/* Performance Level */}
      <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 shadow-2xl">
        <h3 className="text-lg font-bold text-white mb-4">🏃 Performance Level</h3>
        <div className="space-y-3">
          {accuracy === 0 && totalGuesses === 0 && (
            <p className="text-gray-400 text-center py-4">Start a game to see your performance</p>
          )}
          {accuracy >= 80 && (
            <div className="bg-amber-500 bg-opacity-10 rounded-lg p-3 border border-amber-500 border-opacity-30">
              <p className="text-amber-300 font-bold">🏆 Expert Level</p>
              <p className="text-amber-200 text-sm">Outstanding tracking accuracy!</p>
            </div>
          )}
          {accuracy >= 60 && accuracy < 80 && (
            <div className="bg-green-500 bg-opacity-10 rounded-lg p-3 border border-green-500 border-opacity-30">
              <p className="text-green-300 font-bold">⭐ Advanced Level</p>
              <p className="text-green-200 text-sm">Great job tracking cup positions!</p>
            </div>
          )}
          {accuracy >= 40 && accuracy < 60 && (
            <div className="bg-blue-500 bg-opacity-10 rounded-lg p-3 border border-blue-500 border-opacity-30">
              <p className="text-blue-300 font-bold">📊 Intermediate Level</p>
              <p className="text-blue-200 text-sm">Keep practicing to improve your accuracy</p>
            </div>
          )}
          {accuracy < 40 && totalGuesses > 0 && (
            <div className="bg-red-500 bg-opacity-10 rounded-lg p-3 border border-red-500 border-opacity-30">
              <p className="text-red-300 font-bold">🌱 Beginner Level</p>
              <p className="text-red-200 text-sm">Keep tracking to improve your skills!</p>
            </div>
          )}
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="w-full px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
      >
        🔄 Reset Statistics
      </button>

      {/* Tips */}
      <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700">
        <h3 className="text-lg font-bold text-white mb-4">💡 Pro Tips</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>• Focus on watching each cup's movement</li>
          <li>• Mark positions immediately after shuffle</li>
          <li>• Track rapid movements carefully</li>
          <li>• Review your past predictions</li>
          <li>• Practice regularly to improve accuracy</li>
        </ul>
      </div>
    </div>
  );
}