
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <span className="eyebrow">THE ART OF MOTION</span>
            <h2>Move beyond.</h2>
          </div>

          <Link href="/collection" className="footer-cta">
            DISCOVER AURELION
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="footer-bottom">
          <Link href="/" className="brand">
            AURELION<span>®</span>
          </Link>

          <p>© 2026 AURELION. A fictional automotive concept.</p>

          <span>DESIGNED WITHOUT COMPROMISE.</span>
        </div>
      </div>
    </footer>
  );
}
