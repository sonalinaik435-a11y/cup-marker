import React from 'react';

interface Props {
  loading: boolean;
  onGenerateJoke: () => Promise<void> | void;
}

export default function JokeGenerator({ loading, onGenerateJoke }: Props) {
  return (
    <div className="flex justify-center mb-6">
      <button
        onClick={() => onGenerateJoke()}
        disabled={loading}
        className={`px-6 py-3 rounded-lg font-semibold text-white transition-colors ${
          loading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'
        }`}
      >
        {loading ? 'Loading…' : 'Generate Joke'}
      </button>
    </div>
  );
}
