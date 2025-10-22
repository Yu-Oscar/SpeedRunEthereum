"use client";

export default function Hero() {
  return (
    <section className="relative py-20 flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Main Title */}
        <h1 className="font-pixel text-4xl md:text-6xl lg:text-7xl font-bold glow-text leading-tight">
          <a
            href="https://speedrunethereum.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-200"
          >
            SPEEDRUN
            <br />
            ETHEREUM
          </a>
        </h1>
      </div>
    </section>
  );
}
