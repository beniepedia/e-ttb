import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function DesktopNavigation({ navItems }) {
  return (
    <aside className="hidden md:block w-64  shadow-md dark:shadow-neutral-600 bg-neutral-800 dark:bg-transparent  text-neutral-600 ">
      <div className="p-4 text-2xl font-bold border-b border-neutral-600">TANDA TERIMA</div>
      <nav className="p-3 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2 rounded ${
              `/${route().current()}` == new URL(item.href).pathname
                ? 'bg-primary text-base-100'
                : ''
            }`}
          >
            <i className={`bi ${item.icon} text-xl`}></i>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
