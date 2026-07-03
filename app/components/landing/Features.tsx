"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, Lock, FileText, Headphones, Pill, Clock } from "lucide-react";

const features = [
    {
        title: "Licensed Physicians",
        description: "Consult with SLMC registered doctors who specialize in men's health.",
        icon: Shield,
    },
    {
        title: "100% Discreet",
        description: "Your privacy is our priority. Packaging and billing are completely indistinguishable.",
        icon: Lock,
    },
    {
        title: "Online Prescriptions",
        description: "Get genuine medication prescribed and delivered directly to your doorstep.",
        icon: FileText,
    },
    {
        title: "Free Follow-ups",
        description: "Continuous care and adjustment of your treatment plan at no extra cost.",
        icon: Headphones,
    },
    {
        title: "Genuine Medication",
        description: "We only source from authorized distributors to ensure safety and efficacy.",
        icon: Pill,
    },
    {
        title: "Save Time",
        description: "Skip the waiting room. Consult a doctor from your phone in minutes.",
        icon: Clock,
    },
];

export function Features() {
    return (
        <section id="features" className="py-20 md:py-32 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans">
                        Why Choose ADAM?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We simplify men's healthcare with a process that is fast, affordable, and private.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow bg-background/50 border-primary/10">
                                <CardHeader>
                                    <feature.icon className="h-10 w-10 text-primary mb-2" />
                                    <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
