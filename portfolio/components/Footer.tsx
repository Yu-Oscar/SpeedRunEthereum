"use client";

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-50 border-t-4 border-mint py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Tiles */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* ETH Tech Tree */}
          <div className="p-8 border-4 border-purple bg-opacity-10 bg-black hover:border-mint transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
            <div className="text-5xl mb-4">🌳</div>
            <h3 className="font-arcade text-2xl font-bold text-purple mb-3">
              ETH Tech Tree
            </h3>
            <p className="text-gray-300 mb-6">
              Explore the complete learning path from blockchain basics to
              advanced protocol development.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-2 bg-purple text-black font-arcade font-bold rounded border-2 border-purple hover:shadow-lg transition-all"
            >
              Explore
            </a>
          </div>

          {/* Capture The Flag */}
          <div className="p-8 border-4 border-yellow bg-opacity-10 bg-black hover:border-mint transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
            <div className="text-5xl mb-4">🚩</div>
            <h3 className="font-arcade text-2xl font-bold text-yellow mb-3">
              Capture The Flag
            </h3>
            <p className="text-gray-300 mb-6">
              Test your security knowledge with real-world smart contract
              challenges and earn badges.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-2 bg-yellow text-black font-arcade font-bold rounded border-2 border-yellow hover:shadow-lg transition-all"
            >
              Start
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-transparent via-mint to-transparent mb-12" />

        {/* Bottom Info */}
        <div className="text-center">
          <p className="font-arcade text-sm text-mint mb-4">
            © 2024 Speedrun Ethereum. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-xl">
            <a
              href="#"
              className="text-purple hover:text-yellow transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-purple hover:text-yellow transition-colors"
            >
              Discord
            </a>
            <a
              href="#"
              className="text-purple hover:text-yellow transition-colors"
            >
              Twitter
            </a>
          </div>

          {/* Decorative pixel elements */}
          <div className="mt-6 flex justify-center gap-3 text-2xl opacity-50">
            <span>█</span>
            <span>▌</span>
            <span>▄</span>
            <span>▌</span>
            <span>█</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
