'use client'

import { useEffect, useState } from 'react'

export default function OnboardingBatches() {
  const [trainPosition, setTrainPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTrainPosition((prev) => (prev + 2) % 120)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="onboarding" className="py-20 px-4 bg-yellow text-teal-900 relative overflow-hidden">
      {/* Train animation */}
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 text-6xl md:text-8xl opacity-20 pointer-events-none">
        <div
          style={{
            transform: `translateX(${trainPosition}%)`,
          }}
        >
          🚂
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <h2 className="font-pixel text-4xl md:text-5xl text-center mb-4 font-bold">
          ONBOARDING BATCHES
        </h2>
        <p className="font-arcade text-center text-lg mb-12 max-w-2xl mx-auto">
          Join a cohort of developers and accelerate your Web3 journey together
        </p>

        {/* Batches Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Batch 1 */}
          <div className="p-8 border-4 border-teal-900 bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="font-arcade text-2xl font-bold mb-3">
              Batch 1: Foundations
            </h3>
            <p className="mb-6 text-base">
              Master the basics of smart contracts, Solidity, and blockchain fundamentals. Perfect for beginners.
            </p>
            <button className="px-6 py-3 bg-teal-900 text-white font-arcade font-bold rounded hover:shadow-lg transition-all">
              Join Now
            </button>
          </div>

          {/* Batch 2 */}
          <div className="p-8 border-4 border-teal-900 bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="font-arcade text-2xl font-bold mb-3">
              Batch 2: Advanced
            </h3>
            <p className="mb-6 text-base">
              Deep dive into DeFi, NFTs, and complex contract architectures. For experienced developers.
            </p>
            <button className="px-6 py-3 bg-teal-900 text-white font-arcade font-bold rounded hover:shadow-lg transition-all">
              Join Now
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 border-4 border-teal-900 bg-mint bg-opacity-30">
            <div className="font-pixel text-3xl font-bold mb-2">5</div>
            <p className="font-arcade">Challenges</p>
          </div>
          <div className="text-center p-6 border-4 border-teal-900 bg-mint bg-opacity-30">
            <div className="font-pixel text-3xl font-bold mb-2">500+</div>
            <p className="font-arcade">Developers</p>
          </div>
          <div className="text-center p-6 border-4 border-teal-900 bg-mint bg-opacity-30">
            <div className="font-pixel text-3xl font-bold mb-2">100%</div>
            <p className="font-arcade">Open Source</p>
          </div>
        </div>
      </div>
    </section>
  )
}
