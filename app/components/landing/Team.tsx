"use client";

import { motion } from "framer-motion";


const team = [
    {
        name: "Dr Furqan Raja",
        role: "Lead Hair Transplant Surgeon",
        image: "/team/dr-furqan.jpg", // Placeholder
    },
    {
        name: "Earim Chaudry, MBBS",
        role: "Chief Medical Officer",
        image: "/team/earim.jpg", // Placeholder
    },
    {
        name: "Michael Sam-Yorke",
        role: "Pharmacist, Ind. Prescriber",
        image: "/team/michael.jpg", // Placeholder
    },
];

export function Team() {
    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h3 className="text-xs font-bold tracking-widest text-primary uppercase mb-4">
                        Our Specialist Team
                    </h3>
                    <h2 className="text-3xl md:text-5xl font-bold font-sans text-black">
                        Expert help for every level of hair loss
                    </h2>
                </div>

                {/* Mobile: Scrollable Horizontal Carousel */}
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 md:hidden -mx-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="min-w-[85%] sm:min-w-[60%] snap-center flex flex-col"
                        >
                            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#E5EAE0] mb-6">
                                {/* Placeholder for image */}
                                <div className="absolute inset-0 bg-neutral-200" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-1">
                                {member.name}
                            </h3>
                            <p className="text-sm text-foreground/70">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Desktop: Grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col"
                        >
                            <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-[#E5EAE0] mb-6">
                                {/* Placeholder for image */}
                                <div className="absolute inset-0 bg-neutral-200" />
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-2">
                                {member.name}
                            </h3>
                            <p className="text-base text-foreground/70">
                                {member.role}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
