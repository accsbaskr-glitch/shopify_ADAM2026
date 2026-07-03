"use client";

// Trigger deployment check

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, ArrowRight, ShieldAlert, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const stages = [
  {
    id: 1,
    title: "Phase 1: Healthy & Active",
    description: "The follicle is deep in the scalp, fully vascularized, and producing thick, robust hair. DHT has not yet begun its destructive cycle.",
    status: "Reversible & Preventable",
    statusColor: "text-emerald-600 bg-emerald-50",
    hairThickness: "100%",
    follicleHealth: "Optimal",
    actionRequired: "Maintain",
    visualClass: "h-20 w-6 bg-emerald-500 rounded-t-full shadow-lg shadow-emerald-500/20",
    depth: "100% depth",
  },
  {
    id: 2,
    title: "Phase 2: Early Thinning",
    description: "DHT starts binding to receptors. The hair growth cycle shortens, and individual strands become noticeably thinner and lighter.",
    status: "Highly Reversible",
    statusColor: "text-amber-600 bg-amber-50",
    hairThickness: "70%",
    follicleHealth: "Vulnerable",
    actionRequired: "Intervene immediately",
    visualClass: "h-16 w-4 bg-amber-500 rounded-t-full shadow-lg shadow-amber-500/20",
    depth: "80% depth",
  },
  {
    id: 3,
    title: "Phase 3: Advanced Miniaturization",
    description: "Follicles shrink near the scalp surface. Hair is reduced to fine, peach-fuzz 'vellus' hair. Follicle viability is severely compromised.",
    status: "Last Chance for Recovery",
    statusColor: "text-orange-600 bg-orange-50",
    hairThickness: "25%",
    follicleHealth: "Critical Decay",
    actionRequired: "Aggressive rescue required",
    visualClass: "h-10 w-2.5 bg-orange-500 rounded-t-full shadow-lg shadow-orange-500/20",
    depth: "45% depth",
  },
  {
    id: 4,
    title: "Phase 4: Scarring & Inactivity",
    description: "The follicle dies, and is replaced by scar tissue. The scalp becomes smooth and shiny. No topical spray or pill can restore a dead follicle.",
    status: "Permanently Irreversible",
    statusColor: "text-rose-600 bg-rose-50",
    hairThickness: "0% (Bald)",
    follicleHealth: "Extinct",
    actionRequired: "Surgical transplant only (Rs 800k+)",
    visualClass: "h-2 w-2 bg-neutral-300 rounded-full",
    depth: "0% (Surface scar)",
  },
];

export function FutureRegret({ title, subtitle }) {
  const [activeStage, setActiveStage] = useState(0);

  const currentStage = stages[activeStage];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-32 bg-[#FDFBF7] border-t border-[#F1EBE3]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-rose-50 border border-rose-100 rounded-full text-xs font-semibold text-rose-600 mb-4 uppercase tracking-wider">
              The Cost of Inaction
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-sans text-black mb-6 tracking-tight leading-tight">
              {title || "Hair Loss is a One-Way Street"}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              {subtitle || "In biology, doing nothing is an active choice. Once a follicle dies, it is gone forever. The cheapest time to save your hair is right now."}
            </p>
          </div>

          {/* Interactive Follicle Visualizer */}
          <div className="bg-white rounded-3xl border border-neutral-100 p-6 md:p-10 shadow-xl shadow-neutral-100/50 mb-12">
            <h3 className="font-sans font-bold text-xl text-black mb-6 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-500" />
              Interact: The Follicle Miniaturization Timeline
            </h3>

            {/* Stage Selector Tabs */}
            <div className="grid grid-cols-4 gap-2 mb-8">
              {stages.map((stage, idx) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`py-3 px-2 md:px-4 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 text-center flex flex-col items-center gap-2 ${
                    activeStage === idx
                      ? "bg-black text-white shadow-md shadow-black/10"
                      : "bg-neutral-50 hover:bg-neutral-100 text-neutral-500 hover:text-black"
                  }`}
                >
                  <span className="opacity-60">Phase {stage.id}</span>
                  <span className="hidden md:inline truncate w-full max-w-[120px]">
                    {stage.title.split(": ")[1]}
                  </span>
                </button>
              ))}
            </div>

            {/* Interactive Stage Panel */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-neutral-50/50 p-6 rounded-2xl border border-neutral-100">
              
              {/* Left Side: Visual Representation */}
              <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-neutral-100 h-64 relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-16 bg-amber-100/20 border-t border-amber-200/30 flex items-center justify-center">
                  <span className="text-[10px] text-amber-800 font-medium tracking-wider uppercase">Scalp Layer</span>
                </div>
                
                {/* Follicle Container */}
                <div className="flex flex-col items-center justify-end h-32 w-12 pb-4 relative z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStage.id}
                      initial={{ scaleY: 0.2, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 1 }}
                      exit={{ scaleY: 0.2, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="flex flex-col items-center origin-bottom"
                    >
                      <div className={currentStage.visualClass} />
                      <div className="w-8 h-8 rounded-full bg-red-400/10 border-2 border-red-500/20 flex items-center justify-center mt-2 shadow-inner">
                        <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="text-center mt-4 relative z-10">
                  <div className="text-xs text-neutral-400 font-medium">Hair Thickness</div>
                  <div className="text-lg font-bold text-black">{currentStage.hairThickness}</div>
                </div>
              </div>

              {/* Right Side: Psychological Data */}
              <div className="md:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${currentStage.statusColor}`}>
                      {currentStage.status}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-black mb-3">
                    {currentStage.title}
                  </h4>
                  
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {currentStage.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t pt-4 border-neutral-100">
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider">Follicle Health</span>
                    <p className="text-sm font-semibold text-black">{currentStage.follicleHealth}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider">Required Action</span>
                    <p className="text-sm font-semibold text-black">{currentStage.actionRequired}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Psychological Reframe & CTA */}
          <div className="bg-neutral-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute right-0 top-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute left-0 bottom-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-2xl">
              <h3 className="font-sans font-bold text-2xl md:text-3xl text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-amber-400" />
                "Preventing loss is 10x easier than regrowing what is gone."
              </h3>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-8">
                In clinical terms, follicles shrink over a 2 to 5 year cycle before shutting down permanently. When they scar over, hair transplant surgery becomes the only recourse. Active daily prevention is a fraction of the cost, effort, and discomfort.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <Button 
                  onClick={handleScrollToTop}
                  className="bg-white hover:bg-neutral-100 text-black font-bold py-6 px-8 rounded-full shadow-lg text-base flex items-center justify-center gap-2 group cursor-pointer animate-pulse hover:animate-none"
                >
                  Save Your Follicles Now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <div className="flex items-center gap-2 text-xs text-neutral-400 justify-center sm:justify-start">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  Free online clinical assessment included
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
