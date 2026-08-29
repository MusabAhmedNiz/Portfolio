import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Currently } from "@/components/Currently";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-primary selection:text-on-primary bg-background">
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
