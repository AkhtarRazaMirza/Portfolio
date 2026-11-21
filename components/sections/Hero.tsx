"use client";
import { motion, useReducedMotion } from "framer-motion";
import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import Image from "next/image";

const words = [
  "Akhtar Raza",
  "a Full-Stack Developer",
  "a Software Engineer",
  "a Web Developer",
];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("Akhtar Raza");
  const [isDeleting, setIsDeleting] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCurrentText("Akhtar Raza");
      return;
    }

    const fullText = words[currentWordIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (currentText !== fullText) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, 100);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      }
    } else {
      if (currentText !== "") {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }, 50);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 300);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, shouldReduceMotion]);

  return (
    <section id="hero" className='container mx-auto px-4 pt-28 sm:pt-32 pb-16 sm:pb-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <motion.div
            initial={{opacity:0 , x:-20}}
            animate={{opacity:1 , x:0}}
            transition={{duration:0.5}}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    <span className="sr-only">Hi, I&apos;m Akhtar Raza, a Full-Stack Developer</span>
                    <span aria-hidden="true">
                        Hi, I&apos;m <span className="text-primary">{currentText}</span>
                        <span className={shouldReduceMotion ? "text-primary" : "animate-pulse text-primary"}>|</span>
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">BCA student and Full-Stack Developer crafting responsive frontends, backend APIs, and scalable database architectures.</p>
                <div className="flex gap-4">
                <Button variant={"default"} className="gap-2" asChild>
                    <a href="#contact">
                        <Mail className="w-4 h-4"/>
                        Contact Me
                    </a>
                </Button>
                <Button variant={"outline"} className="gap-2" asChild>
                    <a
                        href="https://github.com/AkhtarRazaMirza"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile (opens in new tab)"
                    >
                        <Github className="w-4 h-4"/>
                        Github
                    </a>
                </Button>
                </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center"
            >
              <div className="relative group w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]">
                {/* Subtle muted emerald ambient aura backdrop */}
                <div
                  className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-primary/20 via-emerald-500/10 to-primary/10 opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-75"
                  aria-hidden="true"
                />
                {/* Portrait frame */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-border/60 bg-card shadow-2xl transition-all duration-300 group-hover:border-primary/40">
                  <Image
                    src="/homepage-avatar.png"
                    alt="Akhtar Raza — Full-Stack Developer"
                    fill
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 400px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Hero