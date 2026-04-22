import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface CopyRevealProps {
  before: string;
  after: string;
  className?: string;
}

const CopyReveal = ({ before, after, className }: CopyRevealProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isHovered || isFocused;

  return (
    <div
      role="button"
      tabIndex={0}
      className={cn("relative cursor-pointer select-none", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsFocused((prev) => !prev);
        }
      }}
    >
      <AnimatePresence mode="wait">
        {!isActive ? (
          <motion.div
            key="before"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-4"
          >
            <span className="text-muted-foreground line-through decoration-2">
              {before}
            </span>
            <span className="text-xs uppercase tracking-wider text-muted-foreground/50">
              <span className="hidden [@media(hover:hover)]:inline">hover</span>
              <span className="[@media(hover:hover)]:hidden">tap</span>
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="after"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="text-primary font-semibold"
          >
            {after}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CopyReveal;
