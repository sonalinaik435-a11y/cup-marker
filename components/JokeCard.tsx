import React from 'react';

interface Joke {
  id: number;
  type: string;
  setup?: string;
  delivery?: string;
  joke?: string;
}

export default function JokeCard({ joke }: { joke: Joke }) {
  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 mb-6">
      {joke.joke ? (
        <p className="text-white text-lg">{joke.joke}</p>
      ) : (
        <div>
          <p className="text-white font-semibold text-lg mb-2">{joke.setup}</p>
          <p className="text-white text-md">{joke.delivery}</p>
        </div>
      )}
    </div>
  );
}
