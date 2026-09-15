"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { nav } from "@/lib/content";
import { PlaceholderImage } from "./PlaceholderImage";

export function Brand() { return <Link href="/" className="brand" aria-label="Be Inspired NJ home"><PlaceholderImage id="brand/logo" className="logo-slot"/><span>Be Inspired<span className="brand-sub">NEW JERSEY</span></span></Link>; }
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (open) { dialog.current?.showModal(); const previous = document.body.style.overflow; document.body.style.overflow = "hidden"; return () => { document.body.style.overflow = previous; }; } else { dialog.current?.close(); } }, [open]);
  const close = () => { setOpen(false); trigger.current?.focus(); };
  const trapFocus = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== "Tab") return;
    const elements = event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    const first = elements[0], last = elements[elements.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  };
  const links = nav.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)) ? "page" : undefined} className={item.href === "/donate" ? "nav-donate" : ""} onClick={close}>{item.label}{item.href === "/donate" && <span aria-hidden="true"> ↗</span>}</Link>);
  return <><div className="announcement"><span>Empowering women. Creating possibilities.</span><Link href="/events#legacy-collective">The Legacy Collective · October 14–15 <span aria-hidden="true">↗</span></Link></div><header className="site-header"><div className="container header-inner"><Brand/><nav className="desktop-nav" aria-label="Main navigation">{links}</nav><button ref={trigger} className="menu-toggle" aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)}><span/> <span/> <span/></button></div></header><dialog ref={dialog} id="mobile-navigation" className="mobile-dialog" onKeyDown={trapFocus} onCancel={close} onClose={() => setOpen(false)} aria-label="Main navigation"><div className="mobile-menu-top"><span className="eyebrow">Be Inspired NJ</span><button autoFocus aria-label="Close navigation" onClick={close}>Close ×</button></div><nav>{links}</nav><p>Opportunity starts with connection.</p><Link href="/contact" onClick={close}>Let’s connect ↗</Link></dialog></>;
}
