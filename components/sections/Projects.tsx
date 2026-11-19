"use client";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/constants";
import { Card } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, BookOpen, Check, ExternalLink, Github } from "lucide-react";
import { Badge } from "../ui/badge";

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my latest projects showcasing my expertise in full-stack
            development, from e-commerce platforms to AI-powered applications.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group overflow-hidden border-border/5 bg-card hover:shadow-xl transition-all duration-300 ">
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 md:flex hidden items-center justify-center gap-3 px-4">
                  {project.liveUrl && (
                    <Button asChild variant={"secondary"} size={"sm"}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-1.5"
                        aria-label={`${project.title} Live Demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}

                  {project.githubUrl && (
                    <Button asChild variant={"secondary"} size={"sm"}>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-1.5"
                        aria-label={`${project.title} Source Code`}
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {
                            project.technologies.map((tech)=>(
                                <Badge key={tech} variant={"secondary"} className="bg-secondary/50">
                                      {tech}  
                                </Badge>
                            ))
                        }
                    </div>
                    <ul className="space-y-2">
                        {
                            project.features.map((feature)=>(
                                <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Check className="w-4 h-4 text-green-500"/>
                                    {feature}
                                </li>
                            ))
                        }
                    </ul>

                    {/* Desktop Case Study link */}
                    {project.caseStudyUrl && (
                      <div className="pt-2 hidden md:block">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full gap-2 text-xs border-primary/30 hover:border-primary text-foreground hover:text-primary transition-colors"
                        >
                          <Link href={project.caseStudyUrl} aria-label={`View ${project.title} Case Study`}>
                            <BookOpen className="w-3.5 h-3.5 text-primary" />
                            Read Case Study
                            <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                          </Link>
                        </Button>
                      </div>
                    )}

                    {/* Mobile Actions: Accessible on touch screens without requiring hover */}
                    {(project.liveUrl || project.githubUrl || project.caseStudyUrl) && (
                      <div className="flex flex-col gap-2 pt-2 md:hidden">
                        {project.caseStudyUrl && (
                          <Button asChild variant="default" size="sm" className="w-full gap-2">
                            <Link
                              href={project.caseStudyUrl}
                              aria-label={`${project.title} Case Study`}
                            >
                              <BookOpen className="w-4 h-4" />
                              Read Case Study
                            </Link>
                          </Button>
                        )}
                        {(project.liveUrl || project.githubUrl) && (
                          <div className="flex items-center gap-2">
                            {project.liveUrl && (
                              <Button asChild variant={"secondary"} size={"sm"} className="flex-1 gap-2">
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${project.title} Live Demo`}
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  Live Demo
                                </a>
                              </Button>
                            )}
                            {project.githubUrl && (
                              <Button asChild variant={"secondary"} size={"sm"} className="flex-1 gap-2">
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${project.title} Source Code`}
                                >
                                  <Github className="w-4 h-4" />
                                  Source Code
                                </a>
                              </Button>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
