'use client'

interface Challenge {
  id: number
  title: string
  description: string
  image: string
  liveWebsite: string
  code: string
  contract: string
}

interface TimelineProps {
  challenges: Challenge[]
}


export default function Timeline({ challenges }: TimelineProps) {
  return (
    <section id="quests" className="pb-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-mint via-purple to-yellow transform -translate-x-1/2" />

          {/* Quest Cards */}
          <div className="space-y-12">
            {challenges.map((challenge, index) => (
              <div
                key={challenge.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-stretch`}
              >
                {/* Left/Right Content */}
                <div className="flex-1 lg:w-1/2">
                  <div className="p-6 rounded border-4 border-mint bg-opacity-10 bg-black">
                    {/* Title */}
                    <h3 className="font-arcade text-2xl md:text-3xl font-bold mb-3 text-yellow">
                      {challenge.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg mb-6 text-gray-100">
                      {challenge.description}
                    </p>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      {challenge.liveWebsite && (
                        <a
                          href={challenge.liveWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-retro text-sm"
                        >
                          Live Site
                        </a>
                      )}
                      {challenge.code && (
                        <a
                          href={challenge.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-retro-purple text-sm"
                        >
                          Code
                        </a>
                      )}
                      {challenge.contract && challenge.contract !== "0x..." && (
                        <a
                          href={`https://sepolia.etherscan.io/address/${challenge.contract}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-retro-yellow text-sm"
                        >
                          Contract
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Image Box */}
                <div className="flex-1 lg:w-1/2">
                  <div className="w-full h-full rounded flex items-center justify-center p-6">
                    {challenge.image.includes(".") ||
                    challenge.image.startsWith("/") ? (
                      <img
                        src={challenge.image}
                        alt={challenge.title}
                        className="max-h-48 w-auto object-contain"
                      />
                    ) : (
                      <span className="text-8xl">{challenge.image}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
