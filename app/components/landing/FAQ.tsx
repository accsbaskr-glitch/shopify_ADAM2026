"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "How do I talk to a doctor?",
        answer: "You can chat with a doctor in real-time or book an appointment for a video consultation. Our doctors are available to answer your questions and provide personalized advice."
    },
    {
        question: "Do I need a prescription?",
        answer: "You do not need an existing prescription. Our doctors will evaluate your condition and write a prescription if treatment is clinically appropriate."
    },
    {
        question: "How long does delivery take?",
        answer: "Most orders in Colombo are delivered within 24 hours. Island-wide delivery typically takes 2-3 business days."
    },
    {
        question: "Is my data private?",
        answer: "Absolutely. We comply with all relevant healthcare data privacy regulations. Your medical information is only shared with the doctor and pharmacy team treating you."
    },
    {
        question: "How do I pay for my order?",
        answer: "You can pay for your order using multiple payment methods including credit/debit cards, bank transfer, and cash on delivery (within colombo limits)."
    }
];

export function FAQ() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-sans">
                    Frequently asked questions
                </h2>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left text-lg font-medium py-6">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
