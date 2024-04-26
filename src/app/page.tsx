import { Github } from "lucide-react";
import Image from "next/image";

import Motion from "@/components/ui/Motion";

export default function Home() {
  return (
    <main className="container flex grow flex-col items-center justify-center py-8 text-center">
      <Motion>
        <Image
          src="/images/footboy.webp"
          width={133}
          height={205}
          alt="Footboy Logo"
          className="mb-4 h-auto w-[75px] sm:w-[100px] md:w-[133px]"
          priority
        />
      </Motion>
      <Motion delay={0.25}>
        <h1 className="mb-2 text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Track Paris Saint-Germain
        </h1>
      </Motion>
      <Motion delay={0.5}>
        <p className="mx-auto mb-6 max-w-2xl sm:text-lg md:text-xl lg:text-2xl">
          Stay updated with the upcoming fixtures, past results and current
          league standings of the french football club.
        </p>
      </Motion>
      <Motion delay={0.75}>
        <a
          href="https://github.com/ldgni/pulse"
          className="inline-flex h-9 items-center gap-2 self-center rounded-md border border-slate-400 px-4 py-2 font-semibold shadow transition-colors hover:bg-primary"
          target="_blank">
          <Github size={18} />
          GitHub
        </a>
      </Motion>
    </main>
  );
}
