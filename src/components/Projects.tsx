import { ExternalLink, Code2, Cpu, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Attendance Management System",
      description: "A comprehensive Java-based application designed for efficient attendance marking, management, and report generation. Features an intuitive GUI for seamless user interaction.",
      technologies: ["Java", "Swing GUI", "MySQL", "JDBC"],
      icon: Code2,
      color: "from-primary to-amber",
    },
    {
      title: "Automatic Clothes Sheltering System",
      description: "An Arduino-based system that uses a rain sensor to automatically protect clothes from rain by triggering a sheltering mechanism.",
      technologies: ["Arduino", "Rain Sensor", "Servo Motor", "Embedded C"],
      icon: Cpu,
      color: "from-amber to-accent",
    },
    {
      title: "Smart Glasses",
      description: "A wearable assistive system designed to help visually impaired individuals detect nearby obstacles. Built using an ultrasonic sensor and Arduino Nano, the system provides real-time distance sensing to enhance user awareness and safety.",
      technologies: ["Arduino Nano", "Ultrasonic Sensor", "Embedded C"],
      icon: Eye,
      color: "from-accent to-primary",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#394b36' }}>
      {/* Large Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <span className="font-display text-[20rem] font-bold whitespace-nowrap" style={{ color: '#eba627' }}>
          PROJECTS
        </span>
      </div>

      {/* Decorative Stars */}
      <div className="absolute top-20 left-10 text-3xl animate-float" style={{ color: '#eba627' }}>✦</div>
      <div className="absolute bottom-20 right-10 text-2xl animate-float animation-delay-400" style={{ color: '#ac693c' }}>✦</div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="font-medium mb-2 flex items-center gap-2 justify-center" style={{ color: '#eba627' }}>
            <span>✦</span> My work
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: '#eba627' }}>Featured Projects</h2>
          <p className="max-w-2xl mx-auto mt-4" style={{ color: 'rgba(232, 224, 211, 0.7)' }}>
            A showcase of projects that demonstrate my skills in software development and IoT systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              style={{ backgroundColor: '#050504', borderColor: '#050504' }}
            >
              {/* Card Header with Gradient */}
              <div className="h-48 p-6 flex items-end relative overflow-hidden" style={{ background: `linear-gradient(135deg, #eba627, #ac693c)` }}>
                {/* Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 backdrop-blur-sm rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(5, 5, 4, 0.2)' }}>
                  <project.icon className="w-6 h-6" style={{ color: '#050504' }} />
                </div>
                
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 text-6xl font-display font-bold" style={{ color: '#050504' }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold relative z-10" style={{ color: '#050504' }}>
                  {project.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(232, 224, 211, 0.8)' }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full border"
                      style={{ backgroundColor: '#394b36', borderColor: '#394b36', color: 'rgba(232, 224, 211, 0.7)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/alvinarejo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 font-semibold px-6 py-3 rounded-full transition-all duration-300"
            style={{ borderColor: '#eba627', color: '#eba627' }}
          >
            <ExternalLink className="w-4 h-4" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
