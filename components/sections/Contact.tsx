"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import ContactForm from "../contact-form";
import { toast } from "sonner";
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [copyStatusMessage, setCopyStatusMessage] = useState("");
  const emailAddress = "akhtarrazamirza111@gmail.com";

  const copyUsingExecCommand = (text: string): boolean => {
    if (typeof document === "undefined") {
      return false;
    }
    let textArea: HTMLTextAreaElement | null = null;
    try {
      textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.top = "0";
      textArea.style.left = "-9999px";
      textArea.setAttribute("readonly", "");
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return document.execCommand("copy");
    } catch {
      return false;
    } finally {
      if (textArea && textArea.parentNode) {
        textArea.parentNode.removeChild(textArea);
      }
    }
  };

  const handleCopyEmail = async () => {
    let success = false;

    // 1. Attempt modern Clipboard API if available
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(emailAddress);
        success = true;
      } catch {
        // Clipboard API unavailable or permission denied; fall back to execCommand
        success = false;
      }
    }

    // 2. Fall back to execCommand if Clipboard API was unavailable or failed
    if (!success) {
      success = copyUsingExecCommand(emailAddress);
    }

    // 3. Only show "Copied" if copying actually succeeded; otherwise show appropriate error
    if (success) {
      setCopied(true);
      setCopyStatusMessage("Email address copied to clipboard.");
      toast.success("Email address copied to clipboard.");
      setTimeout(() => {
        setCopied(false);
        setCopyStatusMessage("");
      }, 2500);
    } else {
      setCopyStatusMessage(`Could not copy automatically. Email: ${emailAddress}`);
      toast.error(`Could not copy automatically. Email: ${emailAddress}`);
    }
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-20 scroll-mt-16">
      {/* Screen-reader live region for copy confirmation without visual disruption */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {copyStatusMessage}
      </div>

      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Let&apos;s <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Have a project in mind, an engineering opportunity, or a freelance
            inquiry? Reach out through the form below or connect directly through
            verified channels.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
        {/* Left Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <Card className="p-6 sm:p-8 bg-card border-border/40">
            <div className="mb-6 space-y-1">
              <h3 className="text-lg font-bold text-foreground">
                Send a Message
              </h3>
              <p className="text-xs text-muted-foreground">
                Fill out the form and I will receive your note directly in my inbox.
              </p>
            </div>
            <ContactForm />
          </Card>
        </motion.div>

        {/* Right Column: Direct Contact & Verification Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <Card className="p-6 sm:p-8 bg-card border-border/40 space-y-6">
            <div className="space-y-1 pb-4 border-b border-border/40">
              <h3 className="text-lg font-bold text-foreground">
                Direct Channels & Information
              </h3>
              <p className="text-xs text-muted-foreground">
                Verified contact details, location, and professional links.
              </p>
            </div>

            {/* Direct Email with 1-Click Copy */}
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Direct Email
              </span>
              <div className="p-3.5 rounded-lg bg-secondary/50 border border-border/40 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors truncate"
                    title={`Send email to ${emailAddress}`}
                  >
                    {emailAddress}
                  </a>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleCopyEmail}
                    className="h-8 gap-1.5 text-xs border-border/60 hover:border-primary/50"
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-primary"
                    asChild
                  >
                    <a
                      href={`mailto:${emailAddress}`}
                      aria-label="Open in default email app"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Direct Phone / Line */}
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Phone / Direct Line
              </span>
              <div className="p-3.5 rounded-lg bg-secondary/50 border border-border/40 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a
                    href="tel:+919129403422"
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors truncate"
                  >
                    +91 9129403422
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Timezone */}
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Location & Timezone
              </span>
              <div className="p-3.5 rounded-lg bg-secondary/50 border border-border/40 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Fatehpur, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="gap-1 text-xs border-primary/30 text-primary bg-primary/5"
                >
                  <Globe className="w-3 h-3" />
                  IST (UTC+5:30)
                </Badge>
              </div>
            </div>

            {/* Professional Profiles & Resume */}
            <div className="space-y-3 pt-2 border-t border-border/40">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Profiles & Resume
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 text-xs justify-center border-border/60 hover:border-primary/50"
                  asChild
                >
                  <a
                    href="https://github.com/AkhtarRazaMirza"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 text-xs justify-center border-border/60 hover:border-primary/50"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/akhtarraza-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-primary" />
                    LinkedIn
                  </a>
                </Button>

                <Button
                  variant="default"
                  size="sm"
                  className="gap-2 text-xs justify-center"
                  asChild
                >
                  <a
                    href="/Akhtar_Raza_Resume.pdf"
                    download="Akhtar_Raza_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Resume PDF"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Resume PDF
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
