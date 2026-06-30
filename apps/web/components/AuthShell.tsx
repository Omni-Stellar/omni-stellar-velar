'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { AuthBranding } from './AuthBranding';
import Aurora from './Aurora';

type AuthShellProps = {
  mode: 'login' | 'signup';
  cardClassName?: string;
  children: ReactNode;
};

function AuthTabs({ active }: { active: AuthShellProps['mode'] }) {
  const tabs = [
    { href: '/login', label: 'Iniciar sesion', value: 'login' },
    { href: '/signup', label: 'Crear cuenta', value: 'signup' },
  ] as const;

  return (
    <nav className="omni-stellar-velar-auth-tabs" aria-label="Acceso">
      {tabs.map((tab) => (
        <Link
          key={tab.value}
          href={tab.href}
          aria-current={active === tab.value ? 'page' : undefined}
          className="omni-stellar-velar-auth-tab"
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}

export function AuthShell({ mode, cardClassName = '', children }: AuthShellProps) {
  return (
    <div className="omni-stellar-velar-auth-shell">
      <div className="omni-stellar-velar-auth-frame">
        <div className="omni-stellar-velar-auth-aurora" aria-hidden="true">
          <Aurora />
        </div>

        <AuthBranding />

        <section className="omni-stellar-velar-auth-form-panel">
          <div
            className={`omni-stellar-velar-auth-card omni-stellar-velar-auth-card--${mode} ${cardClassName}`}
          >
            <AuthTabs active={mode} />
            {children}
          </div>
          <p className="omni-stellar-velar-auth-legal">
            Al iniciar sesion, aceptas nuestros{' '}
            <Link href="/terminos" className="omni-stellar-velar-auth-link">
              Terminos de uso
            </Link>{' '}
            y{' '}
            <Link href="/privacidad" className="omni-stellar-velar-auth-link">
              Politica de privacidad.
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
