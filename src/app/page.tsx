import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF8EF] text-[#3B2F2A]">
      <SiteNav />
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact />
      <SiteFooter />
    </main>
  );
}