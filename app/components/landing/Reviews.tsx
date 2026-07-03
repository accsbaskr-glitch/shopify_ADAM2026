"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Image = ({src, alt, width, height, className, ...props}) => <img src={src} alt={alt} width={width} height={height} className={className} {...props} />;

const reviews = [
    {
        name: "Kavinda R.",
        location: "Colombo",
        text: "I was embarrassed to see a doctor face-to-face about my hair loss. It was fully private and online with ADAM. The meds are the real deal—my barber noticed before I did.",
        initials: "KR"
    },
    {
        name: "Malik A.",
        location: "Kandy",
        text: "I was skeptical at first about online treatments. But connecting with a real doctor who explained everything gave me confidence. 3 months in, and my crown is filling in.",
        initials: "MA"
    },
    {
        name: "Prasad J.",
        location: "Galle",
        text: "My wife noticed my hair looking thicker before I even saw it myself. I've tried everything before, nothing worked. Glad I found this clinic.",
        initials: "PJ"
    }
];


export function Reviews() {
    return (
        <section className="pt-20 pb-8 md:py-20 relative overflow-hidden text-white">
            {/* Desktop Background Image */}
            <div className="hidden md:block absolute inset-0 w-full h-full">
                <Image
                    src="https://res.cloudinary.com/ddzotdvev/image/upload/v1767409880/IMG_3431_az8zme.jpg"
                    alt="Reviews desktop background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Mobile Background Image */}
            <div className="block md:hidden absolute inset-0 w-full h-full">
                <Image
                    src="https://res.cloudinary.com/ddzotdvev/image/upload/v1767412510/IMG_3432_dsx7ta.jpg"
                    alt="Reviews mobile background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>


            <div className="container mx-auto px-2 relative z-10">
                <div className="text-center mb-60 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 font-sans">
                        Don't just take our word for it
                    </h2>
                    <p className="text-white/80 max-w-2xl mx-auto text-lg">
                        See what our members have to say about their experience with ADAM.
                    </p>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <Avatar className="h-12 w-12 border-2 border-white/20">
                                    <AvatarFallback className="bg-white text-black font-bold">{review.initials}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-bold">{review.name}</div>
                                    <div className="text-sm text-white/60">{review.location}</div>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed italic opacity-90">
                                "{review.text}"
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Auto-Scrolling Carousel */}
                <div className="md:hidden overflow-hidden relative w-full">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-black/0 to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-black/0 to-transparent pointer-events-none" />

                    <div
                        className="flex gap-4 w-max animate-marquee pause-on-hover"
                    >
                        {[...reviews, ...reviews, ...reviews, ...reviews].map((review, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 w-[300px] flex-shrink-0"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <Avatar className="h-10 w-10 border-2 border-white/20">
                                        <AvatarFallback className="bg-white text-black font-bold text-xs">{review.initials}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-bold text-sm">{review.name}</div>
                                        <div className="text-xs text-white/60">{review.location}</div>
                                    </div>
                                </div>
                                <p className="text-base leading-relaxed italic opacity-90">
                                    "{review.text}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
