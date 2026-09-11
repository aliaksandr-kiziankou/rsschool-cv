import { useEffect, useState } from 'react';
import MorphicNavbar from '../kokonutui/morphic-navbar';
import { navigation } from '../../data/cv';
import './Header.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [activeNavPath, setActiveNavPath] = useState('#about');

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen);

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  useEffect(() => {
  const sections = document.querySelectorAll<HTMLElement>(
    'main > section, footer'
  );

  const updateHeader = () => {
    const headerOffset = 100;
    let currentSection: HTMLElement | null = null;

    for (const section of sections) {
      const rect = section.getBoundingClientRect();

      if (rect.top <= headerOffset) {
        currentSection = section;
      }
    }

    if (!currentSection) return;

    const sectionId = currentSection.id;

    

    const dark =
      sectionId === 'courses' ||
      sectionId === 'code' ||
      sectionId === 'contact';

    setIsDarkSection(dark);

    if (sectionId) {
      setActiveNavPath(`#${sectionId}`);
    }
  };

  updateHeader();

  window.addEventListener('scroll', updateHeader, {
    passive: true,
  });

  window.addEventListener('resize', updateHeader);

  return () => {
    window.removeEventListener('scroll', updateHeader);
    window.removeEventListener('resize', updateHeader);
  };
}, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__inner">
        <a
          className={`header__logo ${
            isDarkSection ? 'header__logo--light' : ''
          }`}
          href="#about"
          onClick={closeMenu}
          aria-label="Aliaksandr Kiziankou"
        >
          AK
        </a>

        <div className="header__desktop-nav">
          <MorphicNavbar
            activePath={activeNavPath}
            onNavigate={setActiveNavPath}
          />
        </div>

        <button
          className={`header__burger ${
            isMenuOpen ? 'header__burger--active' : ''
          } ${isDarkSection ? 'header__burger--light' : ''}`}
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`header__overlay ${
          isMenuOpen ? 'header__overlay--visible' : ''
        }`}
        onClick={closeMenu}
      />

      <aside
        className={`header__mobile-menu ${
          isMenuOpen ? 'header__mobile-menu--open' : ''
        }`}
      >
        <nav className="header__mobile-nav">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="header__mobile-link"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </header>
  );
}