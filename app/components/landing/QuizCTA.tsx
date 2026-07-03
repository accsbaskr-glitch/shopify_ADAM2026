"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Clock } from "lucide-react";

// Add specific styles for the shine effect
const shineStyle = `
@keyframes shine {
    from { transform: translateX(-100%) skew(-12deg); }
    to { transform: translateX(200%) skew(-12deg); }
}
.animate-shine {
    animation: shine 1.5s infinite linear;
}
`;

export function QuizCTA() {
    return (
        <section className="py-20 md:py-32 bg-white border-t border-border/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">

                    {/* Image Column (Desktop: Left, Mobile: Hidden) */}
                    <div className="hidden md:flex w-full md:w-1/2 justify-center md:order-1">
                        <PhoneMockup />
                    </div>

                    {/* Content Column (Desktop: Right, Mobile: Top via order) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 order-1 md:order-2"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-sans text-black mb-6 leading-tight">
                            Not sure where to start? Take our 2-minute quiz.
                        </h2>
                        <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                            Answer a few questions about your hair loss and get a personalised treatment recommendation—completely free, no strings attached.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "100% free – no payment required",
                                "Reviewed by SLMC-registered doctors",
                                "Get your results in under 24 hours"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="rounded-full border border-black/20 p-0.5">
                                        <Check className="w-4 h-4 text-black" />
                                    </div>
                                    <span className="text-black font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col items-start gap-4">
                            <style jsx global>{shineStyle}</style>
                            <Button
                                size="lg"
                                className="w-full md:w-auto bg-black hover:bg-black/90 text-white font-bold h-14 px-8 text-lg rounded-full shadow-lg relative overflow-hidden"
                            >
                                <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 w-full h-full" />
                                <span className="relative z-20">Start My Free Assessment</span>
                            </Button>

                            <div className="flex items-center gap-2 text-sm text-foreground/60 font-medium">
                                <Clock className="w-4 h-4 text-green-600" />
                                Takes approximately 2 mins
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function PhoneMockup() {
    return (
        <div className="relative w-[300px] h-[600px] bg-white rounded-[3rem] shadow-2xl border-8 border-gray-100 overflow-hidden">
            {/* Notch/Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-14 bg-white z-10 flex items-center justify-center border-b border-gray-50">
                <div className="w-20 h-5 bg-gray-100 rounded-full" />
            </div>

            {/* Screen Content */}
            <div className="p-6 pt-20 h-full bg-[#FAFAFA] flex flex-col">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Your hair loss
                </div>
                <h3 className="text-lg font-bold text-[#003B5C] mb-8 leading-tight">
                    Which image best matches your hair loss?
                </h3>

                <div className="grid grid-cols-2 gap-4">
                    <QuizOption label="Receding hairline" stage={0} />
                    <QuizOption label="Thinning at the crown" stage={1} />
                    <QuizOption label="Moderate" stage={2} />
                    <QuizOption label="Extensive" stage={3} />
                </div>

                {/* Form Navigation Mockup */}
                <div className="mt-auto flex justify-between items-center opacity-30 pointer-events-none">
                    <div className="w-10 h-2 bg-gray-300 rounded-full" />
                </div>
            </div>
        </div>
    )
}

function QuizOption({ label, stage }: { label: string, stage: number }) {
    return (
        <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center gap-3 aspect-square justify-center hover:border-blue-500/30 transition-colors cursor-pointer">
            <div className="w-16 h-16">
                {/* Reusing Logic for Face Icons but simplified */}
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                    <path d="M20,40 C20,75 35,90 50,90 C65,90 80,75 80,40 C80,25 65,10 50,10 C35,10 20,25 20,40 Z" stroke="#003B5C" strokeWidth="2" fill="white" />
                    <path d="M20,45 C15,45 15,55 20,55" stroke="#003B5C" strokeWidth="2" fill="white" />
                    <path d="M80,45 C85,45 85,55 80,55" stroke="#003B5C" strokeWidth="2" fill="white" />
                    <circle cx="35" cy="50" r="2" fill="#003B5C" />
                    <circle cx="65" cy="50" r="2" fill="#003B5C" />
                    <path d="M50,55 L48,65 L52,65" stroke="#003B5C" strokeWidth="2" />
                    <path d="M40,75 Q50,80 60,75" stroke="#003B5C" strokeWidth="2" fill="none" />

                    {/* Different Hair Variations */}
                    {stage === 0 && <path d="M22,35 Q22,15 35,15 Q50,25 65,15 Q78,15 78,35" stroke="#003B5C" strokeWidth="3" strokeLinecap="round" fill="none" />}
                    {stage === 1 && <path d="M22,35 Q22,15 35,18 Q50,28 65,18 Q78,15 78,35" stroke="#003B5C" strokeWidth="3" strokeLinecap="round" fill="none" />}
                    {stage === 2 && <path d="M20,40 Q25,25 35,25 Q50,30 65,25 Q75,25 80,40" stroke="#003B5C" strokeWidth="3" strokeLinecap="round" fill="none" className="opacity-50" />} {/* Balding top */}
                    {stage === 3 && <path d="M20,40 Q25,35 25,25 M80,40 Q75,35 75,25" stroke="#003B5C" strokeWidth="3" strokeLinecap="round" fill="none" />} {/* Just sides */}
                </svg>
            </div>
            <span className="text-[10px] font-bold text-center leading-tight text-gray-700">
                {label}
            </span>
        </div>
    )
}
