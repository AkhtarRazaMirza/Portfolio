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
             initial={{opacity:0 , x:20}}
             animate={{opacity:1 , x:0}}
             transition={{duration:0.5}}
             className="flex justify-center"
            >
                <Image 
                src={"/hero.svg"}
                alt=""
                aria-hidden="true"
                width={500}
                height={500}
                priority
                />
            </motion.div>
        </div>
    </section>
  )
}

export default Hero