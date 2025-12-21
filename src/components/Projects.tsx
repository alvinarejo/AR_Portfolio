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
      description: "An innovative Arduino-based IoT solution that uses rain sensors to automatically protect clothes from unexpected weather. Combines hardware and software for smart automation.",
      technologies: ["Arduino", "Rain Sensor", "Servo Motors", "C++"],
      icon: Cpu,
      color: "from-amber to-accent",
    },
    {
      title: "Automatic Rain Protection System",
      description: "An Arduino-based system that uses a rain sensor to automatically protect clothes from rain by triggering a sheltering mechanism.",
      technologies: ["Arduino", "Rain Sensor", "Servo Motor", "Embedded C"],
      icon: Eye,
      color: "from-accent to-primary",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <span className="font-display text-[20rem] font-bold text-primary whitespace-nowrap">
          PROJECTS
        </span>
      </div>

      {/* Decorative Stars */}
      <div className="absolute top-20 left-10 text-primary text-3xl animate-float">✦</div>
      <div className="absolute bottom-20 right-10 text-amber text-2xl animate-float animation-delay-400">✦</div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 flex items-center gap-2 justify-center">
            <span>✦</span> My work
          </p>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            A showcase of projects that demonstrate my skills in software development and IoT systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Header with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.color} p-6 flex items-end relative overflow-hidden`}>
                {/* Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-background/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 text-6xl font-display font-bold text-primary-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-primary-foreground relative z-10">
                  {project.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground border border-border"
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
            className="btn-outline inline-flex items-center gap-2"
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
