'use client';

import { useState } from 'react';
import JokeCard from '@/components/JokeCard';
import JokeGenerator from '@/components/JokeGenerator';

interface Joke {
  id: number;
  type: string;
  setup?: string;
  delivery?: string;
  joke?: string;
  error?: boolean;
}

export default function JokePage() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      
      if (!response.ok) {
        throw new Error('Failed to fetch joke');
      }
      
      const data: Joke = await response.json();
      setJoke(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setJoke(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-2">
          😂 Joke Generator
        </h1>
        <p className="text-blue-100 text-center mb-8">
          Click the button below to get a random joke!
        </p>

        <JokeGenerator loading={loading} onGenerateJoke={fetchJoke} />

        {error && (
          <div className="bg-red-500 text-white p-4 rounded-lg mb-6">
            <p className="font-semibold">Error: {error}</p>
          </div>
        )}

        {joke && <JokeCard joke={joke} />}

        {!joke && !loading && !error && (
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-8 text-center">
            <p className="text-white text-lg">
              👉 Click the button above to generate a joke!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}