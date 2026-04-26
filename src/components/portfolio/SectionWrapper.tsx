import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

type SectionWrapperProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export const SectionWrapper = ({
  id,
  eyebrow,
  title,
  children,
  className,
}: SectionWrapperProps) => (
  <motion.section
    id={id}
    className={cn(
      "relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10",
      className,
    )}
    initial={{ opacity: 0, y: 26 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.22 }}
    transition={{ duration: 0.65, ease: "easeOut" }}
  >
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-primary">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
    {children}
  </motion.section>
);
