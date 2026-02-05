import {
  Navigation,
  Hero,
  Services,
  SelectedWork,
  WhyDSLabs,
  About,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <SelectedWork />
        <Services />
        <WhyDSLabs />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
