"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";

interface Challenge {
  id: number;
  title: string;
  description: string;
  image: string;
  liveWebsite: string;
  code: string;
  contract: string;
  difficulty: string;
}

export default function Home() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/challenges.json")
      .then((res) => res.json())
      .then((data) => {
        setChallenges(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load challenges:", err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-teal-900">
      <Hero />
      {!loading && <Timeline challenges={challenges} />}
    </main>
  );
}
