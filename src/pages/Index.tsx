import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Alvina Rejo A F | CSE Engineer & Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Alvina Rejo A F - A budding CSE engineer passionate about crafting clean, functional, and beautifully designed projects. Explore my skills in Java, Python, IoT, and more."
        />
        <meta
          name="keywords"
          content="Alvina Rejo, CSE Engineer, Portfolio, Java Developer, Python, IoT, Arduino, Software Developer, Chennai"
        />
        <meta property="og:title" content="Alvina Rejo A F | CSE Engineer Portfolio" />
        <meta
          property="og:description"
          content="A budding CSE engineer passionate about crafting clean, functional, and beautifully designed projects."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://alvinarejo.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
