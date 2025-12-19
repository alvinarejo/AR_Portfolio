import { Briefcase, Lightbulb, Users, Rocket } from "lucide-react";

const Services = () => {
  const opportunities = [
    {
      icon: Briefcase,
      title: "Internships",
      description: "Seeking opportunities to apply my skills in real-world projects and gain industry experience.",
    },
    {
      icon: Lightbulb,
      title: "Learning",
      description: "Always eager to learn new technologies, methodologies, and best practices from experienced mentors.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Open to collaborating on innovative projects that challenge and expand my capabilities.",
    },
    {
      icon: Rocket,
      title: "Growth",
      description: "Committed to continuous improvement and contributing meaningfully to any team I join.",
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      {/* Decorative Stars */}
      <div className="absolute top-20 right-20 text-primary text-2xl animate-float">✦</div>
      <div className="absolute bottom-20 left-20 text-amber text-xl animate-float animation-delay-400">✦</div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 flex items-center gap-2 justify-center">
            <span>✦</span> What I'm looking for
          </p>
          <h2 className="section-heading">Opportunities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Open to internships, learning opportunities, and project collaborations that help me grow as a developer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((item, index) => (
            <div
              key={item.title}
              className="group bg-card p-6 rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-secondary/50 rounded-2xl p-8 border border-border">
            <p className="text-lg text-foreground mb-4">
              Interested in working together?
            </p>
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
