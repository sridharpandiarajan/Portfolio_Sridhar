'use client';

import { useEffect, useState } from 'react';

const links = [['About', '#about'], ['Skills', '#skills'], ['Experience', '#experience'], ['Projects', '#projects'], ['Contact', '#contact']];

export default function SiteHeader() {
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 36);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <header className={`site-header ${compact ? 'is-compact' : ''}`}>
    <nav className="nav-shell" aria-label="Main navigation">
      <a className="brand" href="/#home"><span>Sridhar P.</span><small>Developer</small></a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}</button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</div>
      <a className="nav-cta" href="mailto:sridhar.pan05@gmail.com">Let’s talk <span aria-hidden="true">↗</span></a>
    </nav>
  </header>;
}
