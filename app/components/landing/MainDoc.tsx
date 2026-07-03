"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
const Image = ({src, alt, width, height, className, ...props}) => <img src={src} alt={alt} width={width} height={height} className={className} {...props} />;

export function MainDoc() {
    return (
        <section className="py-20 md:py-32 bg-background border-t border-border/50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Image Column */}
                    <div className="relative rounded-3xl overflow-hidden aspect-[3/4] md:aspect-[4/3.75]">
                        {/* Background Image Placeholder */}
                        <div className="absolute inset-0 bg-neutral-200" />
                        <Image
                            src="https://media.istockphoto.com/id/1277526053/photo/hair-transplant.jpg?s=612x612&w=0&k=20&c=WG5oQaOgrcu7VgAPrv_xzdMgtCc9e-DPz3jqsr21oTQ="
                            alt="Dr Furqan Raja performing a transplant"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Logos Overlay */}
                        <div className="absolute top-6 right-6 flex gap-4">
                            {/* Placeholder for logos */}
                            <div className="bg-white/90 p-2 rounded text-[10px] font-bold">
                                SLMC Registered
                            </div>
                            <div className="bg-white/90 p-2 rounded text-[10px] font-bold">
                                10+ Years Experience
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-8"
                    >
                        <blockquote className="text-xl md:text-3xl font-medium leading-relaxed font-sans text-black">
                            "Most of my patients wait too long before seeking treatment. The truth is, the earlier you start, the more hair you save. Finasteride and Minoxidil aren’t magic—they’re proven science. And for advanced cases, a hair transplant can give you results that last a lifetime."
                        </blockquote>

                        {/* Signature Placeholder */}
                        <div className="w-40 h-16 relative grayscale bg-neutral-100/50">
                            <Image
                                src="/placeholder-signature.png"
                                alt="Signature"
                                fill
                                className="object-contain object-left"
                            />
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-black">
                                Dr Tharindu Samarajeewa
                            </h3>
                            <p className="text-sm text-foreground/70 mb-1">
                                MBChB, MRCS
                            </p>
                            <p className="text-sm text-foreground/70">
                                Lead Hair Transplant Surgeon
                            </p>
                        </div>

                        <div>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-black text-black font-bold hover:bg-black hover:text-white transition-colors px-8 py-6 h-auto text-base rounded-md relative overflow-hidden"
                            >
                                <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 w-full h-full" />
                                <span className="relative z-20">Learn About Hair Transplants</span>
                            </Button>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
