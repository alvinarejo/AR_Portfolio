import { Code, Database, Cpu, GitBranch, BarChart3, Layers } from "lucide-react";

const Skills = () => {
  const programmingSkills = [
    { name: "C", level: 75 },
    { name: "Java", level: 85 },
    { name: "Python", level: 70 },
  ];

  const toolsSkills = [
    { name: "Git & GitHub", icon: GitBranch },
    { name: "VS Code", icon: Code },
    { name: "Tableau", icon: BarChart3 },
    { name: "Arduino", icon: Cpu },
  ];

  const experienceAreas = [
    { title: "Java Applications", description: "Built complete applications with GUI and database integration" },
    { title: "IoT & Arduino", description: "Designed sensor-based automated systems" },
    { title: "Frontend Development", description: "Understanding of HTML, CSS, and JavaScript basics" },
    { title: "Backend Concepts", description: "Database design and API fundamentals" },
    { title: "Data Visualization", description: "Creating insights with Tableau" },
    { title: "AI Exploration", description: "Learning machine learning fundamentals" },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-primary text-2xl animate-float">✦</div>
      <div className="absolute bottom-20 right-10 text-amber text-3xl animate-float animation-delay-600">✦</div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 flex items-center gap-2 justify-center">
            <span>✦</span> What I can do
          </p>
          <h2 className="section-heading">Technical Skills</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-card p-8 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Programming</h3>
            </div>
            <div className="space-y-5">
              {programmingSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-card p-8 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Tools</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {toolsSkills.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors group"
                >
                  <tool.icon className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-muted-foreground text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Areas */}
          <div className="bg-card p-8 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Experience</h3>
            </div>
            <div className="space-y-3">
              {experienceAreas.map((area) => (
                <div
                  key={area.title}
                  className="p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors group"
                >
                  <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {area.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
