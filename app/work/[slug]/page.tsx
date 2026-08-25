import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyView from "@/components/case/CaseStudyView";
import { projects } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const title = `${project.name} — ${project.type}`;
  const description = project.tagline;
  const canonicalUrl = `/work/${project.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      title: `${title} | Akhtar Raza`,
      description,
      url: canonicalUrl,
      siteName: "Akhtar Raza",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Akhtar Raza`,
      description,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();

  const project = projects[idx];
  const next = projects[(idx + 1) % projects.length];
  return <CaseStudyView project={project} next={next} />;
}
