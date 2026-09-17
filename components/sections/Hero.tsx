"use client";
import {motion} from "framer-motion";
import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const words = [
  "Akhtar Raza",
  "Full Stack Developer",
  "Web Developer",
  "Software Engineer",
];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("Akhtar Raza");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
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
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section id="about" className='container mx-auto px-4 pt-32 pb-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <motion.div
            initial={{opacity:0 , x:-20}}
            animate={{opacity:1 , x:0}}
            transition={{duration:0.5}}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Hi , I&apos;m <span className="text-primary">{currentText}</span><span className="animate-pulse text-primary">|</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">BCA student and Full-Stack Developer building full-stack web applications — crafting responsive frontends, backend APIs, and database architectures.</p>
                <div className="flex gap-4">
                <Button variant={"default"} className="gap-2">
                    <Mail className="w-4 h-4"/>
                    Contact Me
                </Button>
                <Link href={"https://github.com/AkhtarRazaMirza"} target="_blank">
                <Button variant={"outline"} className="gap-2">
                    <Github className="w-4 h-4"/>
                    Github
                </Button>
                </Link>
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
                alt="Developer Illustration"
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