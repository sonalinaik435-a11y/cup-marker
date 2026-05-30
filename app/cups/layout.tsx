import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cup Position Tracker - Cup Marker',
  description: 'Advanced cup position tracking system for Thimble online game. Track cup movements and improve your prediction accuracy.',
};

export default function CupsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}