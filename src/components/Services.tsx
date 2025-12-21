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
    <section id="services" className="py-24 relative" style={{ backgroundColor: '#e8e0d3' }}>
      {/* Decorative Stars */}
      <div className="absolute top-20 right-20 text-2xl animate-float" style={{ color: '#eba627' }}>✦</div>
      <div className="absolute bottom-20 left-20 text-xl animate-float animation-delay-400" style={{ color: '#ac693c' }}>✦</div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-medium mb-2 flex items-center gap-2 justify-center" style={{ color: '#ac693c' }}>
            <span>✦</span> What I'm looking for
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: '#eba627' }}>Opportunities</h2>
          <p className="max-w-2xl mx-auto mt-4" style={{ color: '#394b36' }}>
            Open to internships, learning opportunities, and project collaborations that help me grow as a developer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((item, index) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              style={{ backgroundColor: '#394b36', borderColor: '#394b36' }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg" style={{ background: 'linear-gradient(135deg, #eba627, #ac693c)' }}>
                <item.icon className="w-7 h-7" style={{ color: '#050504' }} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2" style={{ color: '#e8e0d3' }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(232, 224, 211, 0.8)' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block rounded-2xl p-8 border" style={{ backgroundColor: '#394b36', borderColor: '#394b36' }}>
            <p className="text-lg mb-4" style={{ color: '#e8e0d3' }}>
              Interested in working together?
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg" style={{ backgroundColor: '#eba627', color: '#050504' }}>
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
