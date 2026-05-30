import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Joke Generator - Fun Zone - Cup Marker',
  description: 'Get random jokes instantly with our joke generator powered by the Official Joke API.',
};

export default function JokeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}