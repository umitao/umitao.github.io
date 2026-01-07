"use client";

import { useEffect, useState } from "react";
import { seedDatabase } from "../db/seed";

export default function DatabaseLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    seedDatabase().then(() => setReady(true));
  }, []);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-950 text-neutral-400">
        <div className="animate-pulse">Initializing Archive...</div>
      </div>
    );
  }

  return <>{children}</>;
}
