"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function Science() {
    return (
        <section className="py-20 md:py-32 bg-background border-t border-border/50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Column (Desktop) */}
                    <div className="flex flex-col order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold font-sans text-black mb-8 md:mb-12 leading-[1.2]">
                                Clinically proven to be more effective when combined
                            </h2>
                        </motion.div>

                        {/* Chart Mobile Position: Between title and text */}
                        <div className="md:hidden order-2 mb-10 w-full">
                            <ChartComponent />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="order-3"
                        >
                            <p className="text-xl md:text-2xl text-black font-medium mb-12 max-w-lg leading-relaxed">
                                94% of men who used a combined treatment showed an improvement in their hair loss
                            </p>

                            <Accordion type="single" collapsible className="w-full mb-12">
                                <AccordionItem value="item-1" className="border-t border-b border-gray-200">
                                    <AccordionTrigger className="text-lg md:text-xl font-bold py-6 hover:no-underline text-black">
                                        How do these medications actually work?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base text-foreground/70 pb-6 leading-relaxed">
                                        <strong>Finasteride</strong> blocks DHT—the hormone that causes your hair follicles to shrink and eventually stop producing hair. By reducing DHT, it stops further loss and gives your follicles room to recover.
                                        <br /><br />
                                        <strong>Minoxidil</strong> works differently: it increases blood flow to your scalp, waking up dormant follicles and stimulating regrowth.
                                        <br /><br />
                                        When used together, they tackle hair loss from two angles—which is why the combined approach shows a 94% success rate.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2" className="border-b border-gray-200">
                                    <AccordionTrigger className="text-lg md:text-xl font-bold py-6 hover:no-underline text-black">
                                        Will this affect my sex drive or performance?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base text-foreground/70 pb-6 leading-relaxed">
                                        This is the most common question we get, and it's understandable. The truth: in clinical trials, <strong>only about 2% of men experienced any sexual side effects</strong>—which is nearly identical to the placebo group.
                                        <br /><br />
                                        Most men experience no issues at all. For the small percentage who do, side effects typically resolve quickly after stopping the medication. Your ADAM doctor will discuss your personal risk factors before prescribing.
                                        <br /><br />
                                        Furthermore, when using topical medications, <strong>systemic absorption is significantly lower compared to oral administration</strong>. Clinical data indicates this targeted delivery method <strong>further minimizes the risk of systemic side effects</strong> while maintaining efficacy.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <div className="text-[10px] md:text-xs text-muted-foreground hidden md:block">
                                <p className="leading-relaxed">
                                    ¹ Hu et al. 2015 / ² McClellan and Markham, 1999 / ³ Olsen et al. 2007 / 4 combined treatment in male androgenetic alopecia
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column (Desktop) */}
                    <div className="hidden md:flex flex-col order-2 h-full justify-end">
                        <div className="text-[10px] items-center font-bold tracking-widest text-[#003B5C] uppercase mb-8">
                            TREATMENT EFFECTIVENESS
                        </div>
                        <ChartComponent />
                    </div>

                </div>
                {/* Mobile Citations */}
                <div className="mt-8 md:hidden text-[10px] text-muted-foreground">
                    <p className="leading-relaxed">
                        ¹ Hu et al. 2015 / ² McClellan and Markham, 1999 / ³ Olsen et al. 2007 / 4 combined treatment in male androgenetic alopecia
                    </p>
                </div>
            </div>
        </section>
    );
}

function ChartComponent() {
    return (
        <div className="w-full">
            <div className="text-[10px] font-bold tracking-widest text-[#003B5C] uppercase mb-6 md:hidden">
                TREATMENT EFFECTIVENESS
            </div>

            <div className="relative h-[300px] md:h-[400px] w-full flex items-end justify-between gap-2 sm:gap-4 md:gap-8 px-2">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    <div className="w-full h-px bg-border/40 dashed"></div>
                    <div className="w-full h-px bg-border/40 dashed"></div>
                    <div className="w-full h-px bg-border/40 dashed"></div>
                    <div className="w-full h-px border-b border-border"></div>
                </div>

                {/* Bar 1 */}
                <div className="flex flex-col items-center justify-end h-full w-1/4 group relative z-10">
                    <div className="mb-3 text-2xl md:text-3xl font-bold text-[#003B5C]">94%</div>
                    <div className="text-xs text-center text-muted-foreground mb-2 whitespace-nowrap">Combined¹</div>
                    <div className="w-full bg-gradient-to-t from-[#1B4332] to-[#40916C] rounded-t-lg h-[100%] transition-all duration-1000 ease-out origin-bottom hover:opacity-90"></div>
                </div>

                {/* Bar 2 */}
                <div className="flex flex-col items-center justify-end h-full w-1/4 group relative z-10">
                    <div className="mb-3 text-2xl md:text-3xl font-bold text-[#003B5C]">83%</div>
                    <div className="text-xs text-center text-muted-foreground mb-2 whitespace-nowrap">Finasteride²</div>
                    <div className="w-full bg-gradient-to-t from-[#1B4332] to-[#74C69D] rounded-t-lg h-[70%] transition-all duration-1000 ease-out origin-bottom delay-100 hover:opacity-90"></div>
                </div>

                {/* Bar 3 */}
                <div className="flex flex-col items-center justify-end h-full w-1/4 group relative z-10">
                    <div className="mb-3 text-2xl md:text-3xl font-bold text-[#003B5C]">73%</div>
                    <div className="text-xs text-center text-muted-foreground mb-2 whitespace-nowrap">Minoxidil³</div>
                    <div className="w-full bg-gradient-to-t from-[#1B4332] to-[#95D5B2] rounded-t-lg h-[55%] transition-all duration-1000 ease-out origin-bottom delay-200 hover:opacity-90"></div>
                </div>

                {/* Bar 4 */}
                <div className="flex flex-col items-center justify-end h-full w-1/4 group relative z-10">
                    <div className="mb-3 text-lg md:text-xl font-bold text-foreground/60">2%</div>
                    <div className="text-xs text-center text-muted-foreground mb-2 whitespace-nowrap">Side effects</div>
                    <div className="w-full bg-neutral-200 rounded-t-lg h-[2%] transition-all duration-1000 ease-out origin-bottom delay-300"></div>
                </div>
            </div>
        </div>
    )
}
