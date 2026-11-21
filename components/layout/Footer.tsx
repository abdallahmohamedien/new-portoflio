import { ArrowUp } from "lucide-react";
import { PROFILE } from "@/constants";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-4 py-8 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg">
          Back to top <ArrowUp size={14} aria-hidden />
        </a>
      </div>
    </footer>
  );
}
