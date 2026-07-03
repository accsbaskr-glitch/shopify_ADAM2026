"use client";

import React from "react";
import { Check, Minus } from "lucide-react";

const features = [
    { name: "Affordable treatments", us: true, others: false },
    { name: "Free consultation", us: true, others: false },
    { name: "Fully customizable plans", us: true, others: false },
    { name: "Door-Step Delivery", us: true, others: false },
    { name: "Ongoing clinical support", us: true, others: false },
    // { name: "Owner of pharmaceutical licenses", us: true, others: false },
];

export function Comparison() {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    React.useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Video play failed:", error);
            });
        }
    }, []);

    return (
        <section className="relative bg-[#121212] text-white overflow-hidden">
            <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Table */}
                    <div className="flex flex-col">
                        <h2 className="text-3xl md:text-5xl font-bold mb-12 font-sans">
                            How we stack up
                        </h2>

                        <div className="w-full">
                            {/* Header */}
                            <div className="grid grid-cols-[1fr_auto_auto] gap-8 md:gap-16 border-b border-white/10 pb-6 mb-6">
                                <div></div>
                                <div className="text-lg font-extrabold font-museo-moderno">ADAM</div>
                                <div className="text-lg font-medium text-white/60">Clinics</div>
                            </div>

                            {/* Rows */}
                            <div className="space-y-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="grid grid-cols-[1fr_auto_auto] gap-8 md:gap-16 items-center border-b border-white/5 pb-6 last:border-0 hover:bg-white/5 transition-colors rounded-lg px-2 -mx-2">
                                        <div className="text-base md:text-lg font-medium text-white/90">
                                            {feature.name}
                                        </div>
                                        <div className="flex justify-center w-[50px]">
                                            {feature.us ? (
                                                <div className="bg-white rounded-full p-1">
                                                    <Check className="w-4 h-4 text-black stroke-[3]" />
                                                </div>
                                            ) : (
                                                <Minus className="w-6 h-6 text-white/40" />
                                            )}
                                        </div>
                                        <div className="flex justify-center w-[55px]">
                                            {feature.others ? (
                                                <Check className="w-6 h-6 text-white" />
                                            ) : (
                                                <Minus className="w-6 h-6 text-white/40" />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column Spacer (Desktop only) */}
                    <div className="hidden lg:block"></div>
                </div>
            </div>

            <div className="relative w-full h-[360px] lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full z-0">
                <video
                    ref={videoRef}
                    width="100%"
                    height="100%"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="object-cover w-full h-full"
                >
                    <source src="https://www.pexels.com/download/video/4761738/" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
        </section>
    );
}
