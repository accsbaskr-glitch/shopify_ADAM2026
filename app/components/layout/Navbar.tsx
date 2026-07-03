"use client";

import * as React from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, Variants } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/products/hair-regrowth-spray", label: "Hair Regrowth" },
        { href: "/sexual-health", label: "Sexual Health" },
        { href: "/blog", label: "Blog" },
        { href: "/about", label: "About Us" },
    ];

    const menuVariants: Variants = {
        hidden: { opacity: 0, x: 20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.4,
                ease: "easeOut",
            },
        }),
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-md border-b"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-bold text-2xl flex items-center gap-2 font-museo-moderno z-50 relative">
                    ADAM
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button className="rounded-full">Free Consultation</Button>
                </nav>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="relative z-50">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full sm:w-[400px] border-l-0 p-0">
                            <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                            <SheetDescription className="sr-only">Navigation links</SheetDescription>
                            <div className="flex flex-col h-full bg-background/95 backdrop-blur-xl pt-24 px-6 pb-6">
                                <div className="flex flex-col gap-8">
                                    {navLinks.map((link, i) => (
                                        <motion.div
                                            key={link.href}
                                            custom={i}
                                            initial="hidden"
                                            animate="visible"
                                            variants={menuVariants}
                                        >
                                            <SheetClose asChild>
                                                <Link
                                                    href={link.href}
                                                    className="block text-4xl font-light tracking-tight hover:text-primary transition-colors"
                                                >
                                                    {link.label}
                                                </Link>
                                            </SheetClose>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                    className="mt-auto"
                                >
                                    <SheetClose asChild>
                                        <Button size="lg" className="w-full mb-4 h-14 text-lg rounded-full">
                                            Free Consultation
                                        </Button>
                                    </SheetClose>
                                    <p className="text-center text-sm text-muted-foreground">
                                        © 2026 ADAM. All rights reserved.
                                    </p>
                                </motion.div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
