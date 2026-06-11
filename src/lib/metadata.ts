import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  description,
  path,
  title,
}: PageMetadataOptions): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalPath,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
  };
}
