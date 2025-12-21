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

  const internships = [
    { 
      title: "Software Developer Intern", 
      company: "Cognifyz Technologies",
      period: "Aug 2025 – Sep 2025",
      description: "Worked on multiple Java-based mini projects, including an Escape Room game, Notes Manager, Number Patterns Generator, and Temperature Converter. These projects allowed me to apply theoretical concepts in real-world scenarios, strengthen my problem-solving skills, and gain hands-on exposure to the software development lifecycle."
    },
    { 
      title: "Data Analysis and Visualization Intern", 
      company: "1M1B (1 Million for 1 Billion)",
      period: "Current",
      description: "Currently learning Tableau and exploring its core features while working on the planning and conceptualization of a digital carbon shadow dashboard. My focus is on understanding data, defining dashboard structure, and preparing to translate insights into meaningful and functional visualizations."
    },
  ];

  return (
    <section id="skills" className="py-24 relative" style={{ backgroundColor: '#394b36' }}>
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-2xl animate-float" style={{ color: '#eba627' }}>✦</div>
      <div className="absolute bottom-20 right-10 text-3xl animate-float animation-delay-600" style={{ color: '#ac693c' }}>✦</div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-medium mb-2 flex items-center gap-2 justify-center" style={{ color: '#eba627' }}>
            <span>✦</span> What I can do
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: '#eba627' }}>Technical Skills</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="p-8 rounded-2xl border" style={{ backgroundColor: '#050504', borderColor: '#050504' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(235, 166, 39, 0.2)' }}>
                <Code className="w-6 h-6" style={{ color: '#eba627' }} />
              </div>
              <h3 className="font-display text-xl font-semibold" style={{ color: '#e8e0d3' }}>Programming</h3>
            </div>
            <div className="space-y-5">
              {programmingSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium" style={{ color: '#e8e0d3' }}>{skill.name}</span>
                    <span className="font-semibold" style={{ color: '#eba627' }}>{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#394b36' }}>
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%`, background: 'linear-gradient(135deg, #eba627, #ac693c)' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="p-8 rounded-2xl border" style={{ backgroundColor: '#050504', borderColor: '#050504' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(235, 166, 39, 0.2)' }}>
                <Layers className="w-6 h-6" style={{ color: '#eba627' }} />
              </div>
              <h3 className="font-display text-xl font-semibold" style={{ color: '#e8e0d3' }}>Tools</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {toolsSkills.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center p-4 rounded-xl transition-colors group"
                  style={{ backgroundColor: '#394b36' }}
                >
                  <tool.icon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" style={{ color: '#eba627' }} />
                  <span className="text-sm text-center" style={{ color: 'rgba(232, 224, 211, 0.8)' }}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Internship Experience */}
          <div className="p-8 rounded-2xl border" style={{ backgroundColor: '#050504', borderColor: '#050504' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(235, 166, 39, 0.2)' }}>
                <Database className="w-6 h-6" style={{ color: '#eba627' }} />
              </div>
              <h3 className="font-display text-xl font-semibold" style={{ color: '#e8e0d3' }}>Experience</h3>
            </div>
            <div className="space-y-4">
              {internships.map((internship) => (
                <div
                  key={internship.title}
                  className="p-4 rounded-lg transition-colors group"
                  style={{ backgroundColor: '#394b36' }}
                >
                  <h4 className="text-sm font-semibold transition-colors" style={{ color: '#e8e0d3' }}>
                    {internship.title}
                  </h4>
                  <p className="text-xs font-medium mt-1" style={{ color: '#eba627' }}>{internship.company}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(232, 224, 211, 0.6)' }}>{internship.period}</p>
                  <p className="text-xs mt-2 leading-relaxed" style={{ color: 'rgba(232, 224, 211, 0.8)' }}>{internship.description}</p>
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
