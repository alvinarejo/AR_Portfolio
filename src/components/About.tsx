import { GraduationCap, Code2, Lightbulb, Heart } from "lucide-react";
const About = () => {
  const highlights = [{
    icon: GraduationCap,
    title: "Education",
    description: "B.E. Computer Science and Engineering, Easwari Engineering College, 2028"
  }, {
    icon: Code2,
    title: "Passion",
    description: "Programming, problem-solving, and building functional solutions"
  }, {
    icon: Lightbulb,
    title: "Philosophy",
    description: "Clean, thoughtful design combined with practical functionality"
  }, {
    icon: Heart,
    title: "Approach",
    description: "Always learning, always creating, always growing"
  }];
  return <section id="about" className="py-24 relative">
      {/* Decorative Stars */}
      <div className="absolute top-20 right-10 text-primary text-2xl animate-float">✦</div>
      <div className="absolute bottom-20 left-10 text-amber text-xl animate-float animation-delay-400">✦</div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 flex items-center gap-2 justify-center">
            <span>✦</span> Get to know me
          </p>
          <h2 className="section-heading">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Text */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I'm <span className="text-primary font-semibold">Alvina Rejo A F</span>, a budding Computer Science and Engineering with a passion for creating clean, functional and visually thoughtful digital experiences. I enjoy working at the intersection of design and technology, where creativity meets logic and ideas turn into real, usable products.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am currently exploring front end, backend, databases and AI, building projects that help me understand how things work behind the scenes. Whether it is coding, designing or learning a new tool, I am always excited to grow my skills and experiment with new possibilities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach combines technical expertise with thoughtful design, always striving to build solutions that are both practical and elegant. Whether it's developing Java applications, exploring IoT systems, or diving into AI, I embrace every opportunity to learn and grow.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Skills</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Curiosity</div>
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => <div key={item.title} className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;