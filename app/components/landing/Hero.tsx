"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { User, Pill, Clock, Dna, Package, MessageCircle } from "lucide-react";
const Image = ({src, alt, width, height, className, ...props}) => <img src={src} alt={alt} width={width} height={height} className={className} {...props} />;

export function Hero() {
    return (
        <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden bg-background">
            <div className="container mx-auto px-4">
                {/* Top Text Content Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-start max-w-6xl mx-auto">

                    {/* Left Column: Heading & Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-4 md:gap-8"
                    >
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight font-sans text-balance leading-[1.15]">
                            Hair regrowth that actually works
                        </h1>

                        {/* Desktop Button Location */}
                        <div className="hidden md:block">
                            <Button size="lg" className="rounded-full h-11 w-64 text-base font-bold bg-black text-white hover:bg-neutral-800 relative overflow-hidden">
                                <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 w-full h-full" />
                                <span className="relative z-20">Get My Free Diagnosis</span>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column: Benefits List */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-2 md:gap-4 md:pl-12"
                    >
                        <div className="flex items-center gap-3 py-2 border-b border-gray-100">
                            <User className="w-5 h-5 text-neutral-600" />
                            <span className="text-sm md:text-base font-medium text-neutral-800">Expert Doctors, 100% Online</span>
                        </div>
                        <div className="flex items-center gap-3 py-2 border-b border-gray-100">
                            <Pill className="w-5 h-5 text-neutral-600" />
                            <span className="text-sm md:text-base font-medium text-neutral-800">Clinically proven, Globally Prescribed meds</span>
                        </div>
                        <div className="flex items-center gap-3 py-2 border-b border-gray-100">
                            <Clock className="w-5 h-5 text-neutral-600" />
                            <span className="text-sm md:text-base font-medium text-neutral-800">Visible results in 3–6 months</span>
                        </div>

                        {/* Mobile Button Location */}
                        <div className="block md:hidden mt-4">
                            <Button size="lg" className="w-full rounded-full h-11 text-base font-bold bg-black text-white hover:bg-neutral-800 shadow-lg relative overflow-hidden">
                                <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 w-full h-full" />
                                <span className="relative z-20">Get My Free Diagnosis</span>
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative max-w-7xl mx-auto"
                >
                    {/* Mobile-only Image Container */}
                    <div className="bg-gray-300 block md:hidden h-[450px] w-full overflow-hidden rounded-sm relative">
                        <Image
                            src="https://res.cloudinary.com/ddzotdvev/image/upload/v1767404971/ADAM_5_cpdtkf.jpg"
                            alt="ADAM hair treatment - mobile hero"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Desktop-only 3-Panel Grid */}
                    <div className="hidden md:grid grid-cols-3 h-[550px] w-full overflow-hidden rounded-sm relative">
                        {/* Panel 1: Man spraying hair */}
                        <div className="bg-gray-200 relative h-full">
                            <Image
                                src="https://res.cloudinary.com/ddzotdvev/image/upload/v1767405484/ADAM_6_mghqit.jpg"
                                alt="Man using hair treatment spray"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Panel 2: Product Bottle */}
                        <div className="bg-gray-300 relative h-full">
                            <Image
                                src="https://res.cloudinary.com/ddzotdvev/image/upload/v1767404971/ADAM_5_cpdtkf.jpg"
                                alt="ADAM hair treatment product bottle"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Panel 3: Texture/Hair */}
                        <div className="bg-gray-200 relative h-full">
                            <Image
                                src="https://res.cloudinary.com/ddzotdvev/image/upload/v1767405484/ADAM_6_mghqit.jpg"
                                alt="Hair texture close-up"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Floating Info Card */}
                    {/* 
                      Start: Overlapping desktop.
                      Mobile: Stacked below or overlapping? Image 1 shows it overlapping bottom on mobile too maybe?
                      Let's stick to overlapping centered for desktop, and maybe integrated or stacked for mobile.
                      Actually mobile image shows it seemingly part of the flow below the image? No, it looks like it might be overlapping.
                      I'll make it overlap centrally.
                    */}
                    <div className="absolute bottom-4 left-4 right-4 md:-bottom-10 md:left-1/2 md:right-auto md:-translate-x-1/2 w-auto md:w-[90%] lg:w-[80%] bg-white shadow-xl rounded-sm md:rounded-t-lg p-6 md:p-8 border border-gray-100 md:border-none z-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">

                            <div className="flex flex-row md:flex-col items-start md:items-center gap-4 text-left md:text-center">
                                <Dna className="w-6 h-6 md:w-8 md:h-8 text-neutral-600 stroke-1 shrink-0 mt-1 md:mt-0" />
                                <span className="text-sm font-medium text-neutral-700">
                                    Sprays, serums & tablets – choose what suits you
                                </span>
                            </div>

                            <div className="flex flex-row md:flex-col items-start md:items-center gap-4 text-left md:text-center">
                                <Package className="w-6 h-6 md:w-8 md:h-8 text-neutral-600 stroke-1 shrink-0 mt-1 md:mt-0" />
                                <span className="text-sm font-medium text-neutral-700">
                                    Discreet doorstep delivery
                                </span>
                            </div>

                            <div className="flex flex-row md:flex-col items-start md:items-center gap-4 text-left md:text-center">
                                <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-neutral-600 stroke-1 shrink-0 mt-1 md:mt-0" />
                                <span className="text-sm font-medium text-neutral-700">
                                    Chat with ADAM doctors anytime via WhatsApp
                                </span>
                            </div>

                        </div>
                    </div>

                </motion.div>

                {/* Spacer for the overlapping card on desktop */}
                <div className="hidden md:block h-20" />
            </div>
        </section>
    );
}
