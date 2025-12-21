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
  return <section id="about" className="py-24 relative" style={{ backgroundColor: '#e8e0d3' }}>
      {/* Decorative Stars */}
      <div className="absolute top-20 right-10 text-2xl animate-float" style={{ color: '#eba627' }}>✦</div>
      <div className="absolute bottom-20 left-10 text-xl animate-float animation-delay-400" style={{ color: '#ac693c' }}>✦</div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-medium mb-2 flex items-center gap-2 justify-center" style={{ color: '#ac693c' }}>
            <span>✦</span> Get to know me
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: '#eba627' }}>About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center lg:px-8">
          {/* Bio Text */}
          <div className="space-y-6 pl-4 lg:pl-6">
            <p className="text-lg leading-relaxed" style={{ color: '#050504' }}>
              I'm <span className="font-semibold" style={{ color: '#ac693c' }}>Alvina Rejo A F</span>, a budding Computer Science and Engineering with a passion for creating clean, functional and visually thoughtful digital experiences. I enjoy working at the intersection of design and technology, where creativity meets logic and ideas turn into real, usable products.
            </p>
            <p className="leading-relaxed" style={{ color: '#394b36' }}>
              I am currently exploring front end, backend, databases and AI, building projects that help me understand how things work behind the scenes. Whether it is coding, designing or learning a new tool, I am always excited to grow my skills and experiment with new possibilities.
            </p>
            <p className="leading-relaxed" style={{ color: '#394b36' }}>
              Beyond academics, I love working on projects that feel meaningful, aesthetic and impactful. I believe in learning by building, step by step and iteration by iteration, and I am driven by curiosity, improvement and the desire to create things people genuinely enjoy using.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="font-display text-3xl font-bold" style={{ color: '#eba627' }}>3+</div>
                <div className="text-sm" style={{ color: '#394b36' }}>Projects</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold" style={{ color: '#eba627' }}>5+</div>
                <div className="text-sm" style={{ color: '#394b36' }}>Skills</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold" style={{ color: '#eba627' }}>∞</div>
                <div className="text-sm" style={{ color: '#394b36' }}>Curiosity</div>
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4 pr-4 lg:pr-6">
            {highlights.map((item, index) => <div key={item.title} className="p-6 rounded-xl border transition-all duration-300 hover:shadow-lg group" style={{ backgroundColor: '#394b36', borderColor: '#394b36' }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors" style={{ backgroundColor: 'rgba(235, 166, 39, 0.2)' }}>
                  <item.icon className="w-6 h-6" style={{ color: '#eba627' }} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2" style={{ color: '#e8e0d3' }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: 'rgba(232, 224, 211, 0.8)' }}>{item.description}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;