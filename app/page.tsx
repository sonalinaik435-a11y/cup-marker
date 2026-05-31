import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-950 bg-opacity-50 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
            🥤 Cup Marker
          </Link>
          <div className="flex gap-8 items-center">
            <Link href="/" className="text-white hover:text-blue-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/cups" className="text-white hover:text-blue-400 transition-colors font-medium">
              Cup Tracker
            </Link>
            <Link href="#" className="text-white hover:text-blue-400 transition-colors font-medium">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fadeIn">
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              Track Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Cup Positions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Master the Thimble cup game with our advanced tracking system. Mark cups, predict positions, and improve your game accuracy in real-time.
            </p>
            <div className="flex gap-4">
              <Link href="/cups" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105">
                Start Tracking 🏃
              </Link>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-bold rounded-lg hover:bg-blue-400 hover:text-slate-900 transition-all">
                How It Works
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center items-center relative h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl shadow-2xl opacity-10 animate-pulse-slow"></div>
            <div className="relative z-10 text-center">
              <div className="text-8xl animate-bounce mb-4">🥤</div>
              <p className="text-2xl text-blue-300 font-bold">Cup Position Tracker</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          How Cup Tracking Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-blue-400 transition-all h-full">
              <div className="absolute -top-6 left-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">1</div>
              <h3 className="text-2xl font-bold text-white mb-4 mt-4">Watch & Mark</h3>
              <p className="text-gray-400">
                Observe the cup movements carefully. Click on the cup tracker interface to mark the initial position of each cup.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-blue-400 transition-all h-full">
              <div className="absolute -top-6 left-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">2</div>
              <h3 className="text-2xl font-bold text-white mb-4 mt-4">Track Movement</h3>
              <p className="text-gray-400">
                As cups shuffle and move, update their positions in real-time. Our system keeps track of all movements and position changes.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-blue-400 transition-all h-full">
              <div className="absolute -top-6 left-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">3</div>
              <h3 className="text-2xl font-bold text-white mb-4 mt-4">Predict & Win</h3>
              <p className="text-gray-400">
                Use the tracking data to predict final cup positions. Our advanced tracking helps improve your prediction accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Smart Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-500/20">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-white mb-4">Real-Time Tracking</h3>
            <p className="text-gray-400">
              Track cup positions as they move. Get instant updates and visual feedback for every cup movement.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-500/20">
            <div className="text-4xl mb-4">🏃</div>
            <h3 className="text-2xl font-bold text-white mb-4">Accuracy Meter</h3>
            <p className="text-gray-400">
              See your prediction accuracy in real-time. Track your improvement over multiple games and sessions.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-500/20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4">Fast & Responsive</h3>
            <p className="text-gray-400">
              Instant response times for cup tracking. Built with next-generation web technology for smooth performance.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-500/20">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-2xl font-bold text-white mb-4">Mobile Friendly</h3>
            <p className="text-gray-400">
              Track cups on any device. Works seamlessly on phone, tablet, and desktop screens.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-500/20">
            <div className="text-4xl mb-4">💾</div>
            <h3 className="text-2xl font-bold text-white mb-4">Save Progress</h3>
            <p className="text-gray-400">
              Your tracking sessions are automatically saved. Review past games and track your improvement.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-500/20">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-white mb-4">Secure & Private</h3>
            <p className="text-gray-400">
              Your tracking data is private and secure. No external tracking or data collection.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Master the Cup Game?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Start tracking cup positions and improve your game accuracy with our advanced tracking system.
          </p>
          <Link href="/cups" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:shadow-lg transition-all transform hover:scale-105">
            🥤 Open Cup Tracker
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-950 bg-opacity-50 backdrop-blur-lg mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Cup Marker</h3>
              <p className="text-gray-400">Advanced cup tracking system for Thimble online game. Master the game with precision tracking.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Features</h4>
              <ul className="space-y-2">
                <li><Link href="/cups" className="text-gray-400 hover:text-blue-400 transition-colors">Cup Tracker</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">Next.js</a></li>
                <li><a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">TypeScript</a></li>
                <li><a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">Tailwind CSS</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="https://github.com/sonalinaik435-a11y" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">GitHub</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Cup Marker. All rights reserved. | Master your game with precision tracking.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}