import { SITE_CONFIG } from "@/lib/constants";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_CONFIG.siteUrl}/#person`,
        name: SITE_CONFIG.name,
        alternateName: [
          SITE_CONFIG.shortName,
          "Adam Rasyid Nur Muhammad",
          "Adam Rasyid",
        ],
        url: SITE_CONFIG.siteUrl,
        image: "https://avatars.githubusercontent.com/u/117847146?v=4",
        jobTitle: "Software Engineer & Frontend Developer",
        worksFor: {
          "@type": "Organization",
          name: "Independent / Freelance",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Electronic Engineering Polytechnic Institute of Surabaya (PENS)",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Surabaya",
          addressRegion: "East Java",
          addressCountry: "ID",
        },
        sameAs: [
          SITE_CONFIG.author.github,
          SITE_CONFIG.author.linkedin,
        ],
        description: SITE_CONFIG.description,
        knowsAbout: [
          "Frontend Development",
          "Software Engineering",
          "Next.js",
          "React",
          "TypeScript",
          "JavaScript",
          "Flutter",
          "Tailwind CSS",
          "Full Stack Development",
          "UI/UX Design",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.siteUrl}/#website`,
        url: SITE_CONFIG.siteUrl,
        name: `${SITE_CONFIG.name} Portfolio`,
        alternateName: "Adam Rasyid Portfolio",
        description: SITE_CONFIG.description,
        publisher: {
          "@id": `${SITE_CONFIG.siteUrl}/#person`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_CONFIG.siteUrl}/#webpage`,
        url: SITE_CONFIG.siteUrl,
        name: `${SITE_CONFIG.name} - Software Engineer & Frontend Developer`,
        isPartOf: {
          "@id": `${SITE_CONFIG.siteUrl}/#website`,
        },
        about: {
          "@id": `${SITE_CONFIG.siteUrl}/#person`,
        },
        mainEntity: {
          "@id": `${SITE_CONFIG.siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
