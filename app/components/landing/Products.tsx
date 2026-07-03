"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
const Image = ({src, alt, width, height, className, ...props}) => <img src={src} alt={alt} width={width} height={height} className={className} {...props} />;

// Product Data
const products = [
    {
        id: "hair-growth-complex",
        title: "2-in-1 Compounded Spray",
        image: "https://res.cloudinary.com/ddzotdvev/image/upload/v1767476979/ADAM_15_g2fzok.jpg", // Placeholder
        bgColor: "bg-[#EAEAEA]", // Light gray background for the card/image area
        freeGift: true,
        features: ["Finasteride 0.25% + Minoxidil 5% - 60ml", "94% success rate", "ISO:GMP certified"],
        price: "Rs 5,960",
        plans: "3, 6 months"
    },
    {
        id: "biotin",
        title: "Biotin Plus",
        image: "https://res.cloudinary.com/ddzotdvev/image/upload/v1767499093/ADAM_20_gdttf6.jpg", // Placeholder

        bgColor: "bg-[#EAEAEA]",
        freeGift: false,
        features: ["Pharmaceutical-grade minoxidil", "accerlerated hair growth", "ISO:GMP certified"],
        price: "Rs 4,960",
        plans: "3, 6, 12 months"
    }
];

export function Products() {
    return (
        <section id="products" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4">

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                    {/* Left Side: Text Content */}
                    <div className="lg:w-1/3 lg:sticky lg:top-24 self-start">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-6 font-sans tracking-tight text-black"
                        >
                            Prescription-strength treatments
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground leading-relaxed"
                        >
                            The same medications prescribed worldwide—now available in Sri Lanka with a doctor's prescription, and delivered to your door.
                        </motion.p>
                    </div>

                    {/* Right Side: Product Cards (Grid on Desktop, Carousel on Mobile) */}
                    <div className="lg:w-2/3 w-full">
                        {/* Mobile: Horizontal Scroll / Desktop: Grid */}
                        <div className="flex flex-row md:grid md:grid-cols-2 gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">

                            {products.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="min-w-[92vw] md:min-w-0 snap-center flex flex-col"
                                >
                                    {/* Card Top: Image & Title */}
                                    <div className={`relative ${product.bgColor} rounded-[2.5rem] min-h-[400px] mb-6 overflow-hidden flex flex-col`}>
                                        {/* Image Background */}
                                        <div className="absolute inset-0 z-0">
                                            <Image
                                                src={product.image}
                                                alt={product.title}
                                                fill
                                                className="object-cover object-top"
                                            />

                                        </div>



                                        {/* Free Gift Badge */}
                                        {product.freeGift && (
                                            <div className="absolute bottom-6 left-6 z-10 bg-[#1A1A1A] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                                                Rx Only
                                            </div>
                                        )}
                                    </div>

                                    {/* Card Bottom: Details */}
                                    <div className="border border-border rounded-[2rem] p-6 bg-white">

                                        {/* Features Pills */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {product.features.map((feature, i) => (
                                                <div key={i} className="bg-[#F2F2F2] px-3 py-1.5 rounded-full text-xs font-medium text-black flex items-center">
                                                    <Plus className="w-3 h-3 mr-1" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Price Info */}
                                        <div className="flex border-t border-gray-100 pt-6 mb-8">
                                            <div className="w-1/2 pr-4 border-r border-gray-200">
                                                <div className="text-xs text-muted-foreground font-semibold mb-1">Starting price from</div>
                                                <div className="text-lg font-bold text-black">{product.price} <span className="text-sm font-normal text-muted-foreground">per month</span></div>
                                            </div>
                                            <div className="w-1/2 pl-4">
                                                <div className="text-xs text-muted-foreground font-semibold mb-1">Available plans</div>
                                                <div className="text-lg font-medium text-black">{product.plans}</div>
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <Button className="w-full bg-[#303030] hover:bg-black text-white h-14 md:h-12 rounded-full font-bold text-base md:text-sm relative overflow-hidden group">
                                            <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 w-full h-full" />
                                            <span className="relative z-20">Get Started – Free Consult</span>
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}

                        </div>

                        {/* Mobile Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="flex md:hidden items-center justify-center gap-2 mt-4 text-muted-foreground"
                        >
                            <span className="text-sm font-medium">Swipe to see more</span>
                            <motion.div
                                animate={{ x: [0, 8, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
