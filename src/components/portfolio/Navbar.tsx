import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { navItems } from "../../data/portfolio";
import { resume } from "../../assets";
type NavbarProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

export const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/82 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Primary navigation"
      >
        <a
          href="#hero"
          className="font-display text-lg font-bold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Rafy<span className="text-primary">folio</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Button key={item.href} asChild variant="nav" size="sm">
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="premium" size="sm" asChild>
            <a href={resume} download>
              <Download /> CV
            </a>
          </Button>
          <Button
            variant="premium"
            size="icon"
            onClick={onToggleTheme}
            aria-label="Toggle color mode"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
        </div>
        <Button
          className="md:hidden"
          variant="premium"
          size="icon"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </nav>
      {open && (
        <div className="border-t border-border bg-background px-5 py-4 md:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Button
                key={item.href}
                asChild
                variant="nav"
                onClick={() => setOpen(false)}
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
            <Button variant="premium" onClick={onToggleTheme}>
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
