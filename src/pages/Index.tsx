import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Loader2,
  Mail,
  Send,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { z } from "zod";
import { Footer } from "../components/portfolio/Footer";
import { Navbar } from "../components/portfolio/Navbar";
import { ProjectCard } from "../components/portfolio/ProjectCard";
import { ScrollProgress } from "../components/portfolio/ScrollProgress";
import { SectionWrapper } from "../components/portfolio/SectionWrapper";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  highlights,
  projects,
  skillGroups,
  techIcons,
  timeline,
} from "../data/portfolio";
import { useTheme } from "../hooks/useTheme";
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .max(120, "Email is too long"),
  message: z
    .string()
    .trim()
    .min(12, "Message must be at least 12 characters")
    .max(800, "Message is too long"),
});

const Index = () => {
  const { theme, toggleTheme } = useTheme();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formEl = event.currentTarget; // ✅ keep reference
    const form = new FormData(formEl);

    const result = contactSchema.safeParse(Object.fromEntries(form.entries()));

    if (!result.success) {
      setSent(false);
      setErrors(
        Object.fromEntries(
          result.error.issues.map((issue) => [issue.path[0], issue.message]),
        ),
      );
      return;
    }

    setSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const name = form.get("name") as string;
      const email = form.get("email") as string;
      const message = form.get("message") as string;

      await emailjs.send(
        serviceId,
        templateId,
        { name, email, message },
        publicKey,
      );

      setErrors({});
      setSent(true);
      formEl.reset(); // ✅ FIXED HERE
      toast({
        title: "Message sent",
        description: "Your message has been sent successfully.",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description:
          "An error occurred while sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <section
          id="hero"
          className="relative min-h-screen overflow-hidden px-5 pt-28 sm:px-8 lg:px-10"
        >
          <div className="premium-grid pointer-events-none absolute inset-0" />
          <motion.div
            className="pointer-events-none absolute right-[-8rem] top-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
            animate={{ x: [0, -22, 0], y: [0, 18, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 pb-16 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-extrabold text-primary">
                Fullstack developer building modern web applications
              </span>
              <h1 className="mt-7 text-balance font-display text-5xl font-bold leading-tight text-foreground sm:text-6xl lg:text-7xl">
                I build modern, scalable web applications from frontend to
                backend.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Fullstack developer skilled in building responsive frontend
                interfaces and functional backend systems. I work with
                JavaScript, React, and backend technologies to create real-world
                applications with features like authentication, data management,
                and interactive user experiences.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button variant="hero" size="xl" asChild>
                  <a href="#projects">
                    View Resume <ArrowRight />
                  </a>
                </Button>
                <Button variant="premium" size="xl" asChild>
                  <a href="#contact">
                    Contact me <Mail />
                  </a>
                </Button>
                <Button variant="premium" size="xl" asChild>
                  <a href="/cv.pdf" download>
                    Download Resume <Download />
                  </a>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4 text-muted-foreground">
                <a
                  className="rounded-md p-2 transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  href="https://github.com"
                  aria-label="GitHub"
                >
                  <Github />
                </a>
                <a
                  className="rounded-md p-2 transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
                <a
                  className="rounded-md p-2 transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  href="mailto:hello@example.com"
                  aria-label="Email"
                >
                  <Mail />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="relative overflow-hidden border-border/80 bg-gradient-surface p-5 shadow-premium">
                <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <p className="text-sm font-bold text-muted-foreground">
                      Project highlights
                    </p>
                    <p className="font-display text-2xl font-bold">
                      Real applications I’ve built and improved
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {highlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border border-border bg-card/80 p-4"
                    >
                      <p className="font-display text-3xl font-bold text-primary">
                        {item.value}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-4 gap-3">
                  {techIcons.map((Icon, index) => (
                    <motion.div
                      key={index}
                      className="grid aspect-square place-items-center rounded-lg border border-border bg-secondary text-primary"
                      whileHover={{ rotate: -3, scale: 1.06 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <SectionWrapper
          id="about"
          eyebrow="About"
          title="A fullstack developer who turns ideas into real, user-friendly web applications."
        >
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="border-border bg-gradient-surface p-7 shadow-card">
              <p className="text-lg leading-8 text-muted-foreground">
                I build modern web applications using React, JavaScript, and
                backend technologies. I focus on creating responsive interfaces,
                handling real-world features like authentication and data
                management, and delivering smooth user experiences from frontend
                to backend.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  "Responsive UI",
                  "Fullstack development",
                  "Real-world features",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg bg-secondary p-3 text-sm font-bold text-secondary-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    {item}
                  </div>
                ))}
              </div>
            </Card>
            <Card className="border-border bg-card p-7 shadow-card">
              <h3 className="text-2xl font-bold">Current stack</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {["React", "Tailwind CSS", "MongoDB", "Nodejs", "Git"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-secondary px-3 py-2 text-sm font-bold text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </Card>
          </div>
        </SectionWrapper>

        <SectionWrapper
          id="projects"
          eyebrow="Projects"
          title="Selected projects showcasing real-world features, clean UI, and fullstack development."
        >
          <motion.div layout className="grid gap-6 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </SectionWrapper>

        <SectionWrapper
          id="skills"
          eyebrow="Skills"
          title="The tools I use to build and ship fullstack web applications."
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map(({ title, icon: Icon, skills }) => (
              <Card
                key={title}
                className="border-border bg-gradient-surface p-6 shadow-card transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <div className="mt-4 grid gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm font-semibold text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          id="experience"
          eyebrow="Experience"
          title="A timeline of fullstack development experience, projects, and growth."
        >
          <div className="relative grid gap-5">
            {timeline.map((item) => (
              <Card
                key={item.title}
                className="border-border bg-card p-6 shadow-card"
              >
                <div className="grid gap-3 md:grid-cols-[180px_1fr]">
                  <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-primary">
                    {item.period}
                  </p>
                  <div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="mt-1 font-bold text-muted-foreground">
                      {item.org}
                    </p>
                    <p className="mt-3 leading-7 text-muted-foreground">
                      {item.details}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          id="contact"
          eyebrow="Contact"
          title="Need a fullstack developer for your next project? Let’s talk."
        >
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="border-border bg-gradient-surface p-7 shadow-card">
              <h3 className="text-2xl font-bold">Reach me directly</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Tell me about your idea, requirements, and timeline. I’ll help
                you turn it into a working web application.
              </p>
              <div className="mt-7 grid gap-3">
                <a
                  className="flex items-center gap-3 rounded-lg bg-secondary p-4 font-bold transition-colors hover:bg-primary hover:text-primary-foreground"
                  href="mailto:hello@example.com"
                >
                  <Mail /> hello@example.com
                </a>
                <a
                  className="flex items-center gap-3 rounded-lg bg-secondary p-4 font-bold transition-colors hover:bg-primary hover:text-primary-foreground"
                  href="https://linkedin.com"
                >
                  <Linkedin /> LinkedIn profile
                </a>
              </div>
            </Card>
            <Card className="border-border bg-card p-7 shadow-card">
              <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
                <label className="grid gap-2 text-sm font-bold">
                  Name
                  <input
                    name="name"
                    className="rounded-lg border border-input bg-background px-4 py-3 font-medium outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                  {errors.name && (
                    <span className="text-destructive">{errors.name}</span>
                  )}
                </label>
                <label className="grid gap-2 text-sm font-bold">
                  Email
                  <input
                    name="email"
                    type="email"
                    className="rounded-lg border border-input bg-background px-4 py-3 font-medium outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                  {errors.email && (
                    <span className="text-destructive">{errors.email}</span>
                  )}
                </label>
                <label className="grid gap-2 text-sm font-bold">
                  Message
                  <textarea
                    name="message"
                    rows={5}
                    className="resize-none rounded-lg border border-input bg-background px-4 py-3 font-medium outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                  {errors.message && (
                    <span className="text-destructive">{errors.message}</span>
                  )}
                </label>
                {sent && (
                  <p className="rounded-lg bg-success/15 p-3 text-sm font-bold text-success">
                    Message sent successfully!
                  </p>
                )}
                <Button variant="hero" size="xl" type="submit">
                  Send message{" "}
                  {submitting ? <Loader2 className="animate-spin" /> : <Send />}
                </Button>
              </form>
            </Card>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
