import { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyView from "@/components/case-study/CaseStudyView";
import { caseStudies, getCaseStudy } from "@/lib/case-studies-data";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {
      title: "Case Study Not Found | Akhtar Raza",
    };
  }

  return {
    title: `${study.title} — Case Study`,
    description: study.tagline,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${study.title} — Case Study | Akhtar Raza`,
      description: study.tagline,
      type: "article",
      url: `/projects/${slug}`,
      images: [
        {
          url: study.heroImage,
          width: study.imageWidth,
          height: study.imageHeight,
          alt: `${study.title} Case Study Preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} — Case Study | Akhtar Raza`,
      description: study.tagline,
      images: [study.heroImage],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyView data={study} />;
}
