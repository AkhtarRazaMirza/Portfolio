"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/constants";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  GraduationCap,
  Trophy,
  Calendar,
  CheckCircle2,
  Building2,
  Award,
} from "lucide-react";

const Experience = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="w-5 h-5 text-primary" />;
      case "freelance":
        return <Building2 className="w-5 h-5 text-emerald-400" />;
      case "achievement":
        return <Trophy className="w-5 h-5 text-primary" />;
      case "education":
        return <GraduationCap className="w-5 h-5 text-primary" />;
      default:
        return <Award className="w-5 h-5 text-primary" />;
    }
  };

  const workAndFreelance = experiences.filter(
    (e) => e.type === "work" || e.type === "freelance"
  );
  const achievementsAndEducation = experiences.filter(
    (e) => e.type === "achievement" || e.type === "education"
  );

  return (
    <section id="about" className="container mx-auto px-4 py-20 scroll-mt-16">
      {/* Anchor helper for #experience links */}
      <span id="experience" className="block -mt-16 pt-16" aria-hidden="true" />

      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
            <Award className="w-3.5 h-3.5" />
            Verified Background & Achievements
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Experience & <span className="text-primary">Background</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Demonstrated engineering experience across project-based development,
            commercial freelance delivery, hackathon achievements, and academic foundations.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Column 1: Commercial & Freelance Work */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-2 border-b border-border/40">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Professional Experience & Client Work
              </h3>
              <p className="text-xs text-muted-foreground">
                Commercial feature delivery & production client platforms
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {workAndFreelance.map((item, index) => (
              <motion.div
                key={item.organization}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-card border-border/40 hover:border-primary/40 transition-all duration-300 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-md bg-secondary/80 mt-0.5">
                        {getIcon(item.type)}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-foreground">
                          {item.role}
                        </h4>
                        <p className="text-sm font-medium text-primary">
                          {item.organization}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <Badge
                          variant="secondary"
                          className={
                            item.type === "freelance"
                              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs"
                              : "bg-secondary text-xs"
                          }
                        >
                          {item.badge}
                        </Badge>
                      )}
                      <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                        <Calendar className="w-3 h-3 text-muted-foreground" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-2 pt-1">
                    {item.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {item.technologies && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/30">
                      {item.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-[11px] font-normal py-0"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Column 2: Hackathons & Academic Foundations */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-2 border-b border-border/40">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Achievements & Education
              </h3>
              <p className="text-xs text-muted-foreground">
                CodeEra Hackathon 1st place win & degree studies
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {achievementsAndEducation.map((item, index) => (
              <motion.div
                key={item.organization}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`p-6 bg-card border-border/40 hover:border-primary/40 transition-all duration-300 space-y-4 ${
                    item.type === "achievement"
                      ? "ring-1 ring-primary/20 bg-primary/[0.02]"
                      : ""
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-md bg-secondary/80 mt-0.5">
                        {getIcon(item.type)}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-foreground">
                          {item.role}
                        </h4>
                        <p className="text-sm font-medium text-primary">
                          {item.organization}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <Badge
                          variant="secondary"
                          className={
                            item.type === "achievement"
                              ? "bg-primary/20 text-primary border-primary/30 text-xs font-semibold"
                              : "bg-secondary text-xs"
                          }
                        >
                          {item.badge}
                        </Badge>
                      )}
                      <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                        <Calendar className="w-3 h-3 text-muted-foreground" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-2 pt-1">
                    {item.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                      >
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            item.type === "achievement"
                              ? "text-primary font-bold"
                              : "text-primary"
                          }`}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {item.technologies && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/30">
                      {item.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-[11px] font-normal py-0"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
