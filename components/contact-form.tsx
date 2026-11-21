"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  RefreshCw,
  Send,
} from "lucide-react";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(100, "Email cannot exceed 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(3000, "Message cannot exceed 3,000 characters"),
  _gotcha: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      _gotcha: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setErrorMessage(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "Unable to send your message right now. Please email directly at akhtarrazamirza111@gmail.com."
        );
      }

      setSubmittedName(values.name.trim());
      setIsSubmitted(true);
      toast.success("Message submitted successfully.");
      form.reset();
    } catch (error) {
      const errorText =
        error instanceof Error
          ? error.message
          : "Unable to send your message right now. Please email directly at akhtarrazamirza111@gmail.com.";
      setErrorMessage(errorText);
      toast.error(errorText);
    }
  }

  // Persistent in-card success state
  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center space-y-5 animate-in">
        <div className="p-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground">
            Message Submitted Successfully
          </h3>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            Thank you{submittedName ? `, ${submittedName}` : ""}. Your message has
            been submitted successfully. I will review your note and get back to
            you soon.
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 text-xs border-border/60 hover:border-primary/50"
          onClick={() => {
            setIsSubmitted(false);
            setErrorMessage(null);
            form.reset();
          }}
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/* Honeypot anti-spam field: hidden from human view, screen readers, and tab order */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="_gotcha">Leave this field blank</label>
          <input
            id="_gotcha"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...form.register("_gotcha")}
          />
        </div>

        {/* User-friendly error message with mailto fallback */}
        {errorMessage && (
          <div
            role="alert"
            className="p-3.5 rounded-lg bg-destructive/10 border border-destructive/20 text-xs text-destructive-text flex flex-col gap-1.5"
          >
            <div className="flex items-start gap-2 font-medium">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-destructive-text" />
              <span className="leading-relaxed">{errorMessage}</span>
            </div>
            <p className="text-muted-foreground text-[11px] pl-6">
              Prefer direct email? Send a message to{" "}
              <a
                href="mailto:akhtarrazamirza111@gmail.com"
                className="text-primary hover:underline font-medium underline-offset-2"
              >
                akhtarrazamirza111@gmail.com
              </a>
              .
            </p>
          </div>
        )}

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-semibold">Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your Name"
                  autoComplete="name"
                  maxLength={100}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-semibold">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  autoComplete="email"
                  inputMode="email"
                  maxLength={100}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-semibold">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me about your project, timeline, or requirements..."
                  maxLength={3000}
                  className="min-h-[120px] resize-y text-sm leading-relaxed"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full gap-2 font-medium"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send message
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
