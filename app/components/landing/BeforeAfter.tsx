"use client";

import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const Image = ({src, alt, width, height, className, ...props}) => <img src={src} alt={alt} width={width} height={height} className={className} {...props} />;

const results = [
    {
        id: 1,
        treatment: "Minoxidil 5%, Finasteride 0.25%, Ketoconazole Shampoo",
        duration: "3 months",
        before: "https://res.cloudinary.com/ddzotdvev/image/upload/v1767457643/1_bwaz7c.jpg", // Replaced with SVG placeholder in real impl if needed or just use div
        after: "https://res.cloudinary.com/ddzotdvev/image/upload/v1767457645/2_k0jdhp.jpg"
    },
    {
        id: 2,
        treatment: "Minoxidil 5%, Finasteride 0.25%, Ketoconazole Shampoo",
        duration: "3 months",
        before: "https://res.cloudinary.com/ddzotdvev/image/upload/v1767556946/3_qrldis.jpg",
        after: "https://res.cloudinary.com/ddzotdvev/image/upload/v1767556946/4_vgb8xb.jpg"
    },
    {
        id: 3,
        treatment: "Minoxidil 5%",
        duration: "4 months",
        before: "https://res.cloudinary.com/ddzotdvev/image/upload/v1767556946/7_uhntnj.jpg",
        after: "https://res.cloudinary.com/ddzotdvev/image/upload/v1767556946/8_l24k6f.jpg"
    },
    {
        id: 4,
        treatment: "Topical Spray Minoxidil, Finasteride Oral",
        duration: "6 months",
        before: "https://res.cloudinary.com/ddzotdvev/image/upload/v1767556946/5_s7d9wu.jpg",
        after: "https://res.cloudinary.com/ddzotdvev/image/upload/v1767556946/6_ri9esr.jpg"
    }
];

export function BeforeAfter() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <section className="py-20 bg-background text-foreground overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans">
                        Real results from real Sri Lankan men
                    </h2>
                    <p className="text-muted-foreground/80 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                        These aren't stock photos. See actual transformations from men who started with ADAM—same treatments, same doctors, same results you can expect.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "center",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 md:-ml-8">
                            {results.map((result, index) => (
                                <CarouselItem key={result.id} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3">
                                    <div className="flex flex-col h-full select-none">
                                        {/* Images Container */}
                                        <div className="grid grid-cols-2 gap-2 mb-6">
                                            <div className="aspect-[4/5] bg-neutral-200 rounded-2xl overflow-hidden relative">
                                                <Image
                                                    src={result.before}
                                                    alt="Before treatment"
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 text-xs rounded-md font-medium">Before</div>
                                            </div>
                                            <div className="aspect-[4/5] bg-neutral-200 rounded-2xl overflow-hidden relative">
                                                <Image
                                                    src={result.after}
                                                    alt="After treatment"
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 text-xs rounded-md font-medium">After</div>
                                            </div>
                                        </div>

                                        {/* Info Box */}
                                        <div className="border border-neutral-300 rounded-xl p-4 mb-6 flex-grow flex flex-col justify-center">
                                            <div className="mb-4 pb-4 border-b border-neutral-200">
                                                <span className="font-bold text-foreground">Treatments: </span>
                                                <span className="text-muted-foreground">{result.treatment}</span>
                                            </div>
                                            <div>
                                                <span className="font-bold text-foreground">Length of treatment: </span>
                                                <span className="text-muted-foreground">{result.duration}</span>
                                            </div>
                                        </div>

                                        {/* Action Button */}
                                        <Button className="w-full rounded-full h-12 text-base bg-black hover:bg-black text-white relative overflow-hidden">
                                            <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 w-full h-full" />
                                            <span className="relative z-20">See My Treatment Options</span>
                                        </Button>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Navigation Arrows for Desktop */}
                        <div className="hidden md:block">
                            <CarouselPrevious className="left-[-50px] h-12 w-12 border-none bg-transparent hover:bg-transparent text-neutral-800" />
                            <CarouselNext className="right-[-50px] h-12 w-12 border-none bg-transparent hover:bg-transparent text-neutral-800" />
                        </div>
                    </Carousel>

                    {/* Pagination Dots for Mobile */}
                    <div className="flex justify-center gap-2 mt-8 md:hidden">
                        {Array.from({ length: count }).map((_, i) => (
                            <button
                                key={i}
                                className={`h-1 rounded-full transition-all duration-300 ${i === current - 1 ? "w-8 bg-neutral-900" : "w-8 bg-neutral-200"
                                    }`}
                                onClick={() => api?.scrollTo(i)}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
