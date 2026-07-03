"use client";

import React from "react";
import { Check, X, Shield, Coffee, Activity, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AnchoringPrice({ dailyPrice, alternativePrice, alternativeName }) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-32 bg-white border-t border-[#F1EBE3]">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block px-3 py-1 bg-amber-50 border border-amber-100 rounded-full text-xs font-semibold text-amber-700 mb-4 uppercase tracking-wider">
            Comparative Value
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-sans text-black mb-6 tracking-tight leading-tight">
            How much is your hair worth?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Value is entirely context-dependent. When anchored against clinical surgery or basic daily expenses, saving your hair is one of the most efficient investments you can make.
          </p>
        </div>

        {/* Pricing Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Card 1: Surgical Option */}
          <div className="border border-neutral-100 bg-neutral-50/50 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-neutral-200">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-600 mb-6">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-bold text-xl text-neutral-950 mb-1">
                {alternativeName || "Surgical Hair Transplant"}
              </h3>
              <p className="text-xs text-neutral-500 mb-6">In-clinic surgery</p>
              
              <div className="mb-8">
                <span className="text-3xl font-extrabold text-neutral-900">
                  {alternativePrice || "Rs 800,000"}
                </span>
                <span className="text-sm text-neutral-500"> avg. cost</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-neutral-600">
                  <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Invasive surgical procedure with weeks of downtime</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-neutral-600">
                  <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Does not stop ongoing hair loss behind the transplant area</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-neutral-600">
                  <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Risk of scarring, pain, and unnatural hairline placement</span>
                </li>
              </ul>
            </div>
            <div className="text-xs text-neutral-400 font-medium">
              High commitment, high pain threshold
            </div>
          </div>

          {/* Card 2: Reframing Option (Coffee) */}
          <div className="border border-neutral-100 bg-neutral-50/50 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-neutral-200">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-600 mb-6">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-bold text-xl text-neutral-950 mb-1">
                The Daily Latte Reframe
              </h3>
              <p className="text-xs text-neutral-500 mb-6">Transitory consumption</p>
              
              <div className="mb-8">
                <span className="text-3xl font-extrabold text-neutral-900">
                  Rs 150
                </span>
                <span className="text-sm text-neutral-500"> / day</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-neutral-600">
                  <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Temporary cognitive buzz lasting 20-30 minutes</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-neutral-600">
                  <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Zero compounding long-term health benefit</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-neutral-600">
                  <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Costs over Rs 13,500 every quarter in micro-transactions</span>
                </li>
              </ul>
            </div>
            <div className="text-xs text-neutral-400 font-medium">
              Low commitment, zero return on investment
            </div>
          </div>

          {/* Card 3: The Target Option (ADAM Treatment) - Highlit */}
          <div className="border-2 border-black bg-neutral-950 text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-black/10">
            <div className="absolute top-0 right-0 bg-white text-black font-extrabold text-[10px] tracking-widest uppercase px-6 py-2 rounded-bl-2xl">
              SMART CHOICE
            </div>
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 flex items-center justify-center text-amber-400 mb-6 border border-neutral-800">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-bold text-xl text-white mb-1">
                ADAM Compounded Treatment
              </h3>
              <p className="text-xs text-neutral-400 mb-6">Prescription-grade compound</p>
              
              <div className="mb-8">
                <span className="text-4xl font-black text-white">
                  Rs {dailyPrice || "66"}
                </span>
                <span className="text-sm text-neutral-400"> / day</span>
                <div className="text-xs text-neutral-400 mt-1">
                  (Rs 5,960 billed quarterly)
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-neutral-300">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Compounded topical formulation (Finasteride + Minoxidil)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-neutral-300">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>94% clinical success rate in halting loss & regrowing hair</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-neutral-300">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Delivered discreetly to your door with doctor consultation</span>
                </li>
              </ul>
            </div>

            <div>
              <Button
                onClick={handleScrollToTop}
                className="w-full bg-white hover:bg-neutral-100 text-black font-bold py-6 rounded-xl text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                Get Started for Rs {dailyPrice || "66"}/Day
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
