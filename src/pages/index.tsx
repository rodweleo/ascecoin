"use client"

import { Button } from "@/components/ui/button";
import { FaqSection } from "@/components/ui/faq-section";
import Features from "@/components/ui/features";
import Hero from "@/components/ui/hero";
import { HowToBuySection } from "@/components/ui/how-to-buy-section";
import Link from "next/link";
import { useEffect } from "react";


export default function Home() {

  useEffect(() => {
    document.title = "Home | ASCE"
  }, [])
  return (
    <>
      <main >
        <Hero />
        <div className="h-14 w-full bg-black border-2 border-t-white border-b-white overflow-hidden overflow-x-auto  flex items-center justify-between gap-10 px-5">
          <span className="text-primary">$ASCE</span>
          <span className="text-white">$ASCE</span>
          <span className="text-primary">$ASCE</span>
          <span className="text-white">$ASCE</span>
          <span className="text-primary">$ASCE</span>
          <span className="text-white">$ASCE</span>
          <span className="text-primary">$ASCE</span>
          <span className="text-white">$ASCE</span>
          <span className="text-primary">$ASCE</span>
          <span className="text-white">$ASCE</span>
          <span className="text-primary">$ASCE</span>
          <span className="text-white">$ASCE</span>
          <span className="text-primary">$ASCE</span>
          <span className="text-white">$ASCE</span>
        </div>
        <Features />
        <HowToBuySection />
        <FaqSection />
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid place-items-center">
            <h2 className="text-3xl font-bold text-center mb-8">Join the ASCE Ecosystem</h2>
            <p className="text-xl text-center mb-8">Be part of the revolution in SME operations and blockchain technology</p>
            <Button className="bg-primary">
              <Link href="/community">
                Join Our Community
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>

  );
}
