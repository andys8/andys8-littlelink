"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";

type LinkData = { title: string; href: string };

const linkData: LinkData[] = [
  { title: "GitHub", href: "https://github.com/andys8" },
  { title: "X", href: "https://twitter.com/_andys8" },
  { title: "Discord", href: "https://discordapp.com/users/236926669649084426" },
  { title: "Mail", href: "mailto:andys8@99n.de" },
];

function LinkButton({ title, href }: LinkData) {
  return (
    <a
      className="p-[2px] relative min-w-40"
      href={href}
      target="_blank"
      rel="noopener"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-slate-500 rounded-lg" />
      <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent flex items-center justify-center">
        {title}
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="w-full bg-black flex flex-col items-center justify-center overflow-hidden absolute inset-0">
      <h1 className="md:text-7xl text-5xl font-bold text-center text-slate-100 relative z-20 select-none">
        andys8
      </h1>

      <div className="w-[40rem] h-40 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-slate-300 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-slate-300 to-transparent h-[2px] w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-slate-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-slate-500 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={500}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[-6rem]">
        {linkData.map((link, i) => (
          <LinkButton key={i} {...link} />
        ))}
      </div>
    </div>
  );
}
