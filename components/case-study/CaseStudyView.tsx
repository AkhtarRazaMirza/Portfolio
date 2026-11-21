"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Briefcase,
  CheckCircle2,
  AlertCircle,
  Layers,
  Sparkles,
  ShieldCheck,
  Cpu,
  HelpCircle,
  Lightbulb,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CaseStudyData } from "@/lib/case-studies-data";

interface Props {
  data: CaseStudyData;
}

export default function CaseStudyView({ data }: Props) {
  return (
    <article id="main-content" tabIndex={-1} className="min-h-screen bg-background pt-28 pb-24 outline-none">
      {/* Top Breadcrumb & Navigation */}
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm px-1 py-0.5"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Header Section */}
        <header className="space-y-6 pb-12 border-b border-border/40">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="text-primary border-primary/30">
              {data.category}
            </Badge>

            {data.projectType === "source-verified" ? (
              <Badge variant="secondary" className="gap-1.5 text-xs bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                Source-Verified Implementation
              </Badge>
            ) : (
              <Badge variant="secondary" className="gap-1.5 text-xs bg-muted text-muted-foreground">
                <Briefcase className="w-3.5 h-3.5" />
                Commercial Client Platform
              </Badge>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {data.title}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {data.tagline}
          </p>

          {/* Project Metadata Strip */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-2">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              <span>
                <strong className="text-foreground">Role:</strong> {data.role}
              </span>
            </div>
            {data.timeline && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>
                  <strong className="text-foreground">Timeline:</strong> {data.timeline}
                </span>
              </div>
            )}
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {data.liveUrl && (
              <Button asChild size="default" className="gap-2">
                <a
                  href={data.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${data.title} Live Application`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Application
                </a>
              </Button>
            )}

            {data.githubUrl && (
              <Button asChild variant="outline" size="default" className="gap-2">
                <a
                  href={data.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${data.title} Source Code`}
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </Button>
            )}
          </div>
        </header>

        {/* Confidentiality Notice for Client Work */}
        {data.confidentialityNote && (
          <div className="mt-8 p-4 rounded-lg bg-card border border-border/40 text-sm text-muted-foreground flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="leading-relaxed">{data.confidentialityNote}</p>
          </div>
        )}

        {/* Hero Visual */}
        <section className="my-12">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/40 bg-card shadow-2xl">
            <Image
              src={data.heroImage}
              alt={`${data.title} Interface Preview`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
              className="object-cover"
            />
          </div>
        </section>

        {/* Section: Overview */}
        <section className="py-10 space-y-6 border-b border-border/40">
          <div className="flex items-center gap-3 text-primary">
            <Sparkles className="w-5 h-5" />
            <h2 className="text-2xl font-bold text-foreground">Project Overview</h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
            {data.overview.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Section: Problem & Solution */}
        <section className="py-12 border-b border-border/40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-card border-border/40 space-y-4">
              <div className="flex items-center gap-2.5 text-destructive-text font-semibold">
                <HelpCircle className="w-5 h-5" />
                <h3 className="text-lg text-foreground font-semibold">
                  The Problem & Motivation
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                {data.problemAndMotivation.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-destructive-text shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-card border-border/40 space-y-4">
              <div className="flex items-center gap-2.5 text-primary font-semibold">
                <Lightbulb className="w-5 h-5" />
                <h3 className="text-lg text-foreground font-semibold">
                  Architectural Solution
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                {data.solution.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* Section: Technology Stack & Evidence */}
        <section className="py-12 space-y-6 border-b border-border/40">
          <div className="flex items-center gap-3 text-primary">
            <Cpu className="w-5 h-5" />
            <h2 className="text-2xl font-bold text-foreground">
              Technology Stack & Evidence
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Technologies categorized by source verification and documented implementation scope:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.verifiedTechnologies.map((group) => (
              <Card
                key={group.category}
                className="p-5 bg-card border-border/40 space-y-3"
              >
                <h3 className="text-sm font-semibold text-foreground">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/60 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Section: Architecture Overview */}
        <section className="py-12 space-y-6 border-b border-border/40">
          <div className="flex items-center gap-3 text-primary">
            <Layers className="w-5 h-5" />
            <h2 className="text-2xl font-bold text-foreground">
              Architecture & System Flow
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {data.architectureLayers.map((layer, index) => (
              <Card
                key={layer.name}
                className="p-6 bg-card border-border/40 hover:border-primary/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">
                      {index + 1}
                    </span>
                    <h3 className="text-base font-semibold text-foreground">
                      {layer.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {layer.technologies.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="text-[11px] font-normal"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-9">
                  {layer.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Section: Core Features */}
        <section className="py-12 space-y-6 border-b border-border/40">
          <div className="flex items-center gap-3 text-primary">
            <CheckCircle2 className="w-5 h-5" />
            <h2 className="text-2xl font-bold text-foreground">
              Core Implemented Features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.coreFeatures.map((feat) => (
              <Card
                key={feat.title}
                className="p-5 bg-card border-border/40 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                  <h3 className="text-base font-semibold text-foreground">
                    {feat.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                  {feat.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Section: Engineering Challenges */}
        <section className="py-12 space-y-6 border-b border-border/40">
          <div className="flex items-center gap-3 text-primary">
            <Sparkles className="w-5 h-5" />
            <h2 className="text-2xl font-bold text-foreground">
              Technical Challenges & Trade-Offs
            </h2>
          </div>
          <div className="space-y-6">
            {data.engineeringChallenges.map((item, index) => (
              <Card
                key={item.title}
                className="p-6 bg-card border-border/40 space-y-4"
              >
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <span className="text-primary font-mono text-sm">
                    0{index + 1}.
                  </span>
                  {item.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm pt-2">
                  <div className="p-3.5 rounded-lg bg-destructive/5 border border-destructive/10 space-y-1">
                    <span className="text-xs uppercase tracking-wider font-semibold text-destructive-text">
                      Challenge
                    </span>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {item.problem}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-primary/5 border border-primary/10 space-y-1">
                    <span className="text-xs uppercase tracking-wider font-semibold text-primary">
                      Engineering Approach
                    </span>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {item.solution}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10 space-y-1">
                    <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
                      Result
                    </span>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {item.result}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Section: Outcomes & Learnings */}
        <section className="py-12 space-y-6 border-b border-border/40">
          <h2 className="text-2xl font-bold text-foreground">
            Key Engineering Takeaways
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {data.outcomesAndLearnings.map((learning, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border/40 text-sm text-muted-foreground leading-relaxed"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{learning}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Navigation CTA */}
        <footer className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button asChild variant="outline" className="gap-2 w-full sm:w-auto">
            <Link href="/#projects">
              <ArrowLeft className="w-4 h-4" />
              Back to All Projects
            </Link>
          </Button>

          <Button asChild className="gap-2 w-full sm:w-auto">
            <Link href="/#contact">
              Discuss a Project
            </Link>
          </Button>
        </footer>
      </div>
    </article>
  );
}
