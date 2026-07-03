"use client";

import { motion } from "framer-motion";
import { ClipboardList, UserRound, PackageCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
    {
        icon: ClipboardList,
        title: "1. Quick online assessment",
        description: "Answer a few simple questions about your hair loss and health history. Takes less than 3 minutes."
    },
    {
        icon: UserRound,
        title: "2. Doctor reviews within 24 hours",
        description: "A licensed, SLMC-registered doctor reviews your case and creates a personalised treatment plan."
    },
    {
        icon: PackageCheck,
        title: "3. Discreet doorstep delivery",
        description: "Your medication arrives in plain packaging—no logos, no labels. Nobody knows what's inside but you."
    }
];

export function HowItWorks() {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 font-sans">
                        How it works – 3 simple steps
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        No clinic visits. No awkward conversations. Get prescription-strength treatment from the privacy of your home.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-primary/20 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center mb-6 border-4 border-white shadow-sm">
                                    <step.icon className="w-10 h-10 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
