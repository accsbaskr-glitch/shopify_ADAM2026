"use client";

import { motion } from "framer-motion";
const Image = ({src, alt, width, height, className, ...props}) => <img src={src} alt={alt} width={width} height={height} className={className} {...props} />;

const stages = [
    {
        period: "0 to 3 months",
        phase: "Reset phase",
        description: "Don't panic if nothing happens yet—or if you see some shedding. This is normal and a sign the treatment is working.",
        image: "https://res.cloudinary.com/ddzotdvev/image/upload/v1767454187/1_hkjwkg.jpg"
    },
    {
        period: "3 to 6 months",
        phase: "Stabilisation",
        description: "Hair loss slows noticeably. Some men start seeing new growth, especially at the hairline and crown.",
        image: "https://res.cloudinary.com/ddzotdvev/image/upload/v1767454187/2_r4fc6n.jpg"
    },
    {
        period: "6 to 12 months",
        phase: "Regrowth",
        description: "This is where results become visible. Expect improved density and coverage in thinning areas.",
        image: "https://res.cloudinary.com/ddzotdvev/image/upload/v1767454187/3_h9f4pt.jpg"
    }
];

export function Timeline() {
    return (
        <section className="py-20 md:py-32 bg-background border-t border-border/50">
            <div className="container mx-auto px-4">
                <div className="mb-12 md:mb-20">
                    <h3 className="text-xs font-bold tracking-widest text-black uppercase mb-4">
                        What to expect
                    </h3>
                    <h2 className="text-3xl md:text-5xl font-bold font-sans text-black">
                        The hair growth journey
                    </h2>
                </div>

                {/* Desktop View */}
                <div className="hidden md:grid grid-cols-3 relative">
                    {/* Horizontal Line */}
                    <div className="absolute bottom-0 left-0 w-full h-px bg-border sm:block hidden" />

                    {stages.map((stage, index) => (
                        <div
                            key={index}
                            className={`
                                relative pb-16 pr-8 
                                ${index !== stages.length - 1 ? 'border-r border-border/40' : ''}
                                ${index !== 0 ? 'pl-8' : ''}
                            `}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Image Container */}
                                <div className="relative w-32 h-32 mb-8 mx-auto md:mx-0">
                                    <div className="w-full h-full rounded-full border-2 border-black/10 overflow-hidden relative">
                                        <Image
                                            src={stage.image}
                                            alt={stage.phase}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-black mb-3">
                                    {stage.period}
                                </h3>

                                <div className="mb-4">
                                    <span className="inline-block bg-[#D1FAE5] text-[#065F46] font-bold px-3 py-1 rounded text-sm">
                                        {stage.phase}
                                    </span>
                                </div>

                                <p className="text-foreground/70 leading-relaxed font-medium">
                                    {stage.description}
                                </p>
                            </motion.div>

                            {/* Timeline Dot (Desktop) */}
                            <div className={`absolute bottom-[-5px] w-3 h-3 rounded-full bg-neutral-300 ${index === 0 ? 'left-0' : 'left-8'}`} />
                        </div>
                    ))}
                </div>

                {/* Mobile View */}
                <div className="md:hidden relative border-l border-border ml-3 pb-8">
                    {stages.map((stage, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 pb-12 last:pb-0"
                        >
                            {/* Dot */}
                            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-neutral-300" />

                            <div className="flex flex-row gap-6 items-start">
                                {/* Image (Left) */}
                                <div className="shrink-0 w-24 h-24 rounded-full border border-black/10 overflow-hidden relative">
                                    <Image
                                        src={stage.image}
                                        alt={stage.phase}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content (Right) */}
                                <div className="flex flex-col pt-2">
                                    <h3 className="text-lg font-bold text-black mb-2">
                                        {stage.period}
                                    </h3>
                                    <div className="mb-3">
                                        <span className="inline-block bg-[#D1FAE5] text-[#065F46] font-bold px-2 py-1 rounded text-xs">
                                            {stage.phase}
                                        </span>
                                    </div>
                                    <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                                        {stage.description}
                                    </p>
                                </div>
                            </div>

                            {/* Vertical Spacer/Divider if needed, though border-l handles the main line */}
                            {index !== stages.length - 1 && (
                                <div className="absolute bottom-0 left-8 right-0 h-px bg-border/40" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


