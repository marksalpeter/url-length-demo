"use client"
import InjectDependencies from "@/app/dependencies"
import { Experiment } from "@/app/core/views/components/experiment";

export default function Home() {
  return (
    <InjectDependencies>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="w-[500px] justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Experiment/>
        </div>
      </div>
    </main>
    </InjectDependencies>
  );
}
