
import type { Section, Subsection } from '../App';
import { submenus, submenuLabels } from '../App';
import './Navigation.css';

interface NavigationProps {
  width?: string;
  selectedSection: Section | null;
  selectedSubsection: Subsection | null;
  onSelectSection: (section: Section | null) => void;
  onSelectSubsection: (subsection: Subsection) => void;
}

function Navigation({
  width = '100%',
  selectedSection,
  selectedSubsection,
  onSelectSection,
  onSelectSubsection,
}: NavigationProps) {
  const base = import.meta.env.BASE_URL;
  const isCompact = selectedSection !== null;

  return (
    <nav
      className={`navigation ${isCompact ? 'navigation-compact' : ''}`}
      style={{ '--navigation-width': isCompact ? '32%' : width } as React.CSSProperties}
    >
      <img
        className="navigation-overlay"
        src={`${base}images/gui/overlay.gif`}
        alt=""
        aria-hidden="true"
      />
      <div className="navigation-layout">
        <div className="navigation-content">
          <img
            className="navigation-logo"
            src={`${base}images/gui/logo.svg`}
            alt="Lapys Studio"
          />

          <div className="navigation-brand">
            <span className="navigation-title">LAPYS</span>

            <span className="navigation-tagline">
              cute, cursed
              <br />
              &amp; handmade
            </span>
          </div>
        </div>

        <div className="navigation-socials">
          {[
            {
              name: 'Steam',
              icon: 'socials_steam.svg',
              url: 'https://store.steampowered.com/developer/lapysG',
            },
            {
              name: 'Discord',
              icon: 'socials_discord.svg',
              url: 'https://discord.com/invite/9US7Z7AzUq',
            },
            {
              name: 'TikTok',
              icon: 'socials_tiktok.svg',
              url: 'https://www.tiktok.com/@lapysgames',
            },
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="navigation-social-link"
              aria-label={social.name}
            >
              <img
                src={`${base}images/gui/${social.icon}`}
                alt=""
                className="navigation-social-icon"
              />

              <span className="navigation-tooltip">
                {social.name}
              </span>
            </a>
          ))}
        </div>

        <div className="navigation-bar">
          {([
            { name: 'Games', icon: 'menu_games.svg' },
            { name: 'Galleries', icon: 'menu_galleries.svg' },
            { name: 'About', icon: 'menu_about.svg' },
          ] as const).map((item) => (
            <button
              key={item.name}
              className="navigation-menu-button"
              type="button"
              aria-label={item.name}
              aria-pressed={selectedSection === item.name}
              onClick={() =>
                onSelectSection(selectedSection === item.name ? null : item.name)
              }
            >
              <img
                src={`${base}images/gui/${item.icon}`}
                alt=""
                className="navigation-menu-icon"
              />
              <span className="navigation-tooltip">{item.name}</span>
            </button>
          ))}
        </div>
        {selectedSection && (
          <div className="navigation-submenu">
            {submenus[selectedSection].map((item) => (
              <button
                key={item}
                type="button"
                className={`navigation-submenu-button ${
                  selectedSubsection === item ? 'active' : ''
                }`}
                aria-label={submenuLabels[item]}
                aria-pressed={selectedSubsection === item}
                onClick={() => onSelectSubsection(item)}
              >
                <img
                  src={`${base}images/gui/${item}.svg`}
                  alt=""
                  className="navigation-submenu-icon"
                />

                <span className="navigation-tooltip">
                  {submenuLabels[item]}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
