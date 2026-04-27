import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { forwardRef } from "react";

type ProjectCardProps = {
  project: {
    title: string;
    summary: string;
    stack: string[];
    demo: string;
    github: string;
    image: string;
  };
};

export const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project }, ref) => (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
    >
      <Card
        ref={ref}
        className="group h-full overflow-hidden border-border/80 bg-gradient-surface shadow-card transition-all duration-300 hover:border-primary/50"
      >
        <div className="relative min-h-48 overflow-hidden border-b border-border bg-surface-strong p-5">
          <div className="absolute inset-0 bg-gradient-hero opacity-10 transition-opacity group-hover:opacity-20" />
          <div className="relative rounded-lg border border-border bg-card/80 p-4 shadow-card">
            <div>
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-foreground">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {project.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-bold text-secondary-foreground"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <Button variant="hero" size="sm" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live <ArrowUpRight />
              </a>
            </Button>
            <Button variant="premium" size="sm" asChild>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code <Github />
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </motion.article>
  ),
);
