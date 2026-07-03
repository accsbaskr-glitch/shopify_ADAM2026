"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CTA() {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="relative rounded-3xl overflow-hidden bg-primary px-6 py-20 text-center md:px-20 lg:py-32">
                    {/* Video Background */}
                    <div className="absolute inset-0 z-0">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="https://www.pexels.com/download/video/4761738/" type="video/mp4" />
                        </video>
                        {/* Overlay for contrast */}
                        {/* <div className="absolute inset-0 bg-black/60" /> */}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 font-sans">
                            Ready to take back control?
                        </h2>
                        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
                            Join 150+ Sri Lankan men who've started their hair regrowth journey with ADAM.
                            Free consultation. Discreet delivery. Real results.
                        </p>
                        <Button
                            size="lg"
                            className="w-full md:w-auto bg-white hover:bg-white/90 text-black font-bold h-14 px-8 text-lg rounded-full shadow-lg relative overflow-hidden"
                        >
                            <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 w-full h-full" />
                            <span className="relative z-20">Get My Free Diagnosis</span>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
