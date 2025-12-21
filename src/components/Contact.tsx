import { useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alvinarejo@gmail.com",
      href: "mailto:alvinarejo@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/alvina-rejo-a-f-b4445a329/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@alvinarejo",
      href: "https://github.com/alvinarejo",
    },
  ];

  return (
    <section id="contact" className="py-24 relative" style={{ backgroundColor: '#e8e0d3' }}>
      {/* Decorative Stars */}
      <div className="absolute top-20 right-10 text-3xl animate-float" style={{ color: '#eba627' }}>✦</div>
      <div className="absolute bottom-40 left-10 text-2xl animate-float animation-delay-600" style={{ color: '#ac693c' }}>✦</div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-medium mb-2 flex items-center gap-2 justify-center" style={{ color: '#ac693c' }}>
            <span>✦</span> Get in touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: '#eba627' }}>Contact Me</h2>
          <p className="max-w-2xl mx-auto mt-4" style={{ color: '#394b36' }}>
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-4" style={{ color: '#050504' }}>
                Let's Connect
              </h3>
              <p className="leading-relaxed" style={{ color: '#394b36' }}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 group"
                  style={{ backgroundColor: '#394b36', borderColor: '#394b36' }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors" style={{ backgroundColor: 'rgba(235, 166, 39, 0.2)' }}>
                    <item.icon className="w-5 h-5" style={{ color: '#eba627' }} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: 'rgba(232, 224, 211, 0.7)' }}>{item.label}</p>
                    <p className="font-medium transition-colors" style={{ color: '#e8e0d3' }}>
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center gap-3" style={{ color: '#394b36' }}>
              <MapPin className="w-5 h-5" style={{ color: '#eba627' }} />
              <span>Chennai, India</span>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="p-8 rounded-2xl border" style={{ backgroundColor: '#394b36', borderColor: '#394b36' }}>
            <h3 className="font-display text-xl font-semibold mb-6" style={{ color: '#e8e0d3' }}>
              Send a Message
            </h3>

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#e8e0d3' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-1 transition-all"
                  style={{ backgroundColor: '#050504', borderColor: '#050504', color: '#e8e0d3' }}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#e8e0d3' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-1 transition-all"
                  style={{ backgroundColor: '#050504', borderColor: '#050504', color: '#e8e0d3' }}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#e8e0d3' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-1 transition-all resize-none"
                  style={{ backgroundColor: '#050504', borderColor: '#050504', color: '#e8e0d3' }}
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#eba627', color: '#050504' }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: '#050504' }} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
