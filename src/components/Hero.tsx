import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-primary text-4xl animate-float">✦</div>
      <div className="absolute top-40 right-20 text-primary text-2xl animate-float animation-delay-400">✦</div>
      <div className="absolute bottom-40 left-20 text-amber text-3xl animate-float animation-delay-600">✦</div>
      <div className="absolute top-1/3 right-10 text-primary/50 text-xl animate-pulse-glow">★</div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-amber rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="animate-fade-in-up">
              <p className="text-primary font-medium mb-4 flex items-center gap-2 justify-center lg:justify-start">
                <span className="text-xl">✦</span> Hello, I'm
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
                Alvina
                <br />
                <span className="text-primary text-shadow-glow">Rejo A F</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8">
                A budding CSE engineer passionate about crafting clean, functional, and beautifully designed projects. Always learning, always creating.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-200">
              <a href="#projects" className="btn-primary inline-flex items-center gap-2">
                View My Work
              </a>
              <a href="#contact" className="btn-outline inline-flex items-center gap-2">
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
              <a
                href="https://github.com/alvinarejo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/alvina-rejo-a-f-b4445a329/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:alvinarejo@gmail.com"
                className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="order-1 lg:order-2 flex justify-center animate-slide-in-right">
            <div className="relative">
              {/* Photo Frame */}
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                <img
                  src={profilePhoto}
                  alt="Alvina Rejo A F - CSE Engineer"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              
              {/* Decorative Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium text-sm shadow-lg">
                CSE 2028
              </div>

              {/* Floating Stars */}
              <div className="absolute -top-4 -right-4 text-primary text-3xl animate-float">✦</div>
              <div className="absolute -bottom-8 -left-4 text-amber text-2xl animate-float animation-delay-400">✦</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll down</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
