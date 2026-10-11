import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Currently } from "@/components/Currently";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": site.url,
  url: site.url,
  name: site.title,
  description: site.description,
  mainEntity: {
    "@type": "Person",
    "@id": `${site.url}#person`,
    name: site.name,
    url: site.url,
    jobTitle: "Full Stack Developer",
    description: site.description,
    sameAs: site.profiles,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-primary selection:text-on-primary bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main className="max-w-[800px] w-full mx-auto px-5 md:px-0 flex flex-col gap-24 md:gap-section-gap pt-32 pb-24">
        <Hero />
        <Currently />
        <Projects />
        <Stack />
      </main>
      <Footer />
    </div>
  );
}
