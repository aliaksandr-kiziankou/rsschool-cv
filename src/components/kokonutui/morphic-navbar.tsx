import clsx from 'clsx';

import { useState } from 'react';

interface NavItem {
  name: string;
}

interface MorphicNavbarProps {
  items?: Record<string, NavItem>;
  defaultPath?: string;
  activePath?: string;
  onNavigate?: (path: string) => void;
  className?: string;
}

const DEFAULT_NAV_ITEMS: Record<string, NavItem> = {
  '#about': { name: 'About' },
  '#skills': { name: 'Skills' },
  '#courses': { name: 'Courses' },
  '#portfolio': { name: 'Portfolio' },
  '#code': { name: 'Code Example' },
  '#languages': { name: 'Languages' },
  '#contact': { name: 'Contact' },
};

export function MorphicNavbar({
  items = DEFAULT_NAV_ITEMS,
  defaultPath = '#about',
  activePath: controlledActivePath,
  onNavigate,
  className,
}: MorphicNavbarProps) {
  const [internalActivePath, setInternalActivePath] =
    useState(defaultPath);

  const activePath =
    controlledActivePath ?? internalActivePath;

  const setActivePath = (path: string) => {
    setInternalActivePath(path);
    onNavigate?.(path);
  };

  const isActiveLink = (path: string) => {
    return activePath === path;
  };

  return (
    <nav
      className={clsx(
        'mx-auto max-w-4xl px-4 py-2',
        className
      )}
      aria-label="Main navigation"
    >
      <ul className="glass flex items-center justify-between overflow-hidden rounded-xl m-0 p-0 list-none">
        {Object.entries(items).map(
          ([path, { name }], index, array) => {
            const isActive = isActiveLink(path);
            const isFirst = index === 0;
            const isLast = index === array.length - 1;

            const prevPath =
              index > 0 ? array[index - 1][0] : null;

            const nextPath =
              index < array.length - 1
                ? array[index + 1][0]
                : null;

            return (
              <li
                key={path}
                className="m-0 p-0 list-none"
              >
                <a
                  className={clsx(
                    'flex items-center justify-center bg-black p-1.5 px-4 text-sm text-white transition-all duration-300 dark:bg-white dark:text-black',
                    isActive
                      ? 'mx-2 rounded-xl font-semibold'
                      : clsx(
                          (isActiveLink(prevPath || '') ||
                            isFirst) &&
                            'rounded-l-xl',
                          (isActiveLink(nextPath || '') ||
                            isLast) &&
                            'rounded-r-xl'
                        )
                  )}
                  href={path}
                  onClick={() => setActivePath(path)}
                >
                  {name}
                </a>
              </li>
            );
          }
        )}
      </ul>
    </nav>
  );
}

export default MorphicNavbar;