"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function SocialProof() {
    return (
        <section className="py-12 bg-muted/30 border-y border-border/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

                    {/* Stat 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                    >
                        <div className="text-4xl md:text-5xl font-extrabold text-primary font-sans">
                            5,000+
                        </div>
                        <div className="text-sm md:text-base font-medium text-muted-foreground">
                            Sri Lankan men<br />treated since 2024
                        </div>
                    </motion.div>

                    {/* Divider hidden on mobile */}
                    <div className="hidden md:block w-px h-12 bg-border" />

                    {/* Stat 2: Rating */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center md:items-start"
                    >
                        <div className="flex items-center gap-1 mb-1">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <div className="text-sm font-medium">
                            <span className="font-bold">4.8/5</span> from 500+ reviews
                        </div>
                    </motion.div>

                    {/* Divider hidden on mobile */}
                    <div className="hidden md:block w-px h-12 bg-border" />

                    {/* Stat 3: License */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                    >
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                        </div>
                        <div className="text-sm md:text-base font-medium">
                            SLMC & NMRA<br />Registered
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
