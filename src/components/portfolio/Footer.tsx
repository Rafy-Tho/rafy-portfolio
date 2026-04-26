import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border bg-surface/60 px-5 py-10 sm:px-8 lg:px-10">
    <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-display text-lg font-bold text-foreground">
          Rafyfolio
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Built with React, Tailwind, motion, and product-minded detail.
        </p>
      </div>
      <div className="flex items-center gap-3 text-muted-foreground">
        <a
          className="rounded-md p-2 transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          href="https://github.com"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          className="rounded-md p-2 transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          href="https://linkedin.com"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          className="rounded-md p-2 transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          href="mailto:hello@example.com"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </div>
  </footer>
);
