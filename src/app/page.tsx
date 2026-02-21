
'use client';

import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { PageHeader } from "./components/page-header";
import PageLayout from "./components/page-layout";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  return (
    <PageLayout>
      <PageHeader title="Tidy Web Tools" hideHomeButton />
      <h2 className="text-xl text-gray-500 leading-none mb-3">Select a tool</h2>
      <div className="flex flex-col gap-3">
        <Button
          variant="outline"
          className="cursor-pointer"
          onClick={() => router.push("/abv-calculator")}
        >
          ABV Calculator
        </Button>
        <Button
          variant="outline"
          className="cursor-pointer"
          onClick={() => router.push("/base-64")}
        >
          Base 64 encode/decode
        </Button>
        <Button
          variant="outline"
          className="cursor-pointer"
          onClick={() => router.push("rng")}
        >
          Random Number Generator
        </Button>
      </div>
    </PageLayout>
  );
}
