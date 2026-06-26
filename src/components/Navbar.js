import React, { useEffect, useState } from 'react';
import './Navbar.css';

const LINKS = [
  { id: 'skills', label: 'Tech Stack' },
  { id: 'project', label: 'Projects' },
  { id: 'about', label: 'About' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  // Scroll progress bar + condensed nav state
  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY || document.documentElement.scrollTop;
      setScrolled(top > 40);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min((top / h) * 100, 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active-section highlight as you scroll
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toTop = (e) => {
    if (e) e.preventDefault();
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;

  return (
    <>
      <div className="scroll-progress" style={{ width: progress + '%' }} />

      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <a href="#top" className="nav__brand" onClick={toTop}>
          Arul<span>.</span>
        </a>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? 'is-active' : ''}
              onClick={(e) => go(e, l.id)}
            >
              {l.label}
            </a>
          ))}
          <a
            className="nav__resume"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
        </nav>
      </header>

      <button
        className={`to-top ${scrolled ? 'show' : ''}`}
        aria-label="Back to top"
        onClick={toTop}
      >
        ↑
      </button>
    </>
  );
}

export default Navbar;
