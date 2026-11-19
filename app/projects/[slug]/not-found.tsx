import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CaseStudyNotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-background px-4 py-28">
      <div className="text-center max-w-md space-y-6">
        <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <FileQuestion className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">
            Case Study Not Found
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The requested project case study could not be found or has been moved.
          </p>
        </div>
        <Button asChild className="gap-2">
          <Link href="/#projects">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </Button>
      </div>
    </main>
  );
}
