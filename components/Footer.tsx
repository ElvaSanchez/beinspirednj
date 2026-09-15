import Link from "next/link";
import { nav } from "@/lib/content";
import { Brand } from "./Header";
export function Footer() {
  // Legal mail/EIN on file: 676 E 25th St, Paterson, NJ. Public location remains New Jersey.
  return <footer className="site-footer"><div className="container"><div className="footer-grid"><div><Brand/><p>Empowering women through education, mentorship, leadership development, and community support.</p></div><div><h2>Contact</h2><p>New Jersey</p><a href="mailto:info@beinspirednj.com">info@beinspirednj.com</a><p><Link href="/contact">Get in touch ↗</Link></p></div><div><h2>Connect With Us</h2><div className="socials"><span aria-disabled="true" title="Facebook link coming soon">Facebook <small>Coming soon</small></span><span aria-disabled="true" title="Instagram link coming soon">Instagram <small>Coming soon</small></span><a href="https://www.linkedin.com/in/beinspirednj" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div></div></div><nav aria-label="Footer navigation">{nav.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/our-leadership">Our Leadership</Link><Link href="/contact">Contact</Link></nav><div className="footer-bottom"><span>Copyright © 2026 Be Inspired NJ — All Rights Reserved.</span><span>Rooted in community. Inspired by possibility.</span></div></div></footer>;
}
