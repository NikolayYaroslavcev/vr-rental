import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Hero } from "@/sections/Hero";
import { TrustStats } from "@/sections/TrustStats";
import { WhyVR } from "@/sections/WhyVR";
import { Experiences } from "@/sections/Experiences";
import { PopularGames } from "@/sections/PopularGames";
import { HowItWorks } from "@/sections/HowItWorks";
import { Pricing } from "@/sections/Pricing";
import { WhatsIncluded } from "@/sections/WhatsIncluded";
import { Testimonials } from "@/sections/Testimonials";
import { FAQ } from "@/sections/FAQ";
import { FinalCTA } from "@/sections/FinalCTA";
import { faqItems } from "@/lib/faq";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cosmic-violet focus:text-white focus:rounded-[20px] focus:text-[10px] focus:uppercase focus:tracking-[0.15em]"
      >
        К содержимому
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <TrustStats />
        <WhyVR />
        <Experiences />
        <PopularGames />
        <HowItWorks />
        <Pricing />
        <WhatsIncluded />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
