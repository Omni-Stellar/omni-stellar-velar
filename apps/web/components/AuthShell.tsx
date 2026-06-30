'use client';

import { useEffect, useState, type ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { AuthBranding } from './AuthBranding';
import Link from 'next/link';

const Aurora = dynamic(() => import('./Aurora'), {
  ssr: false,
});

type AuthShellProps = {
  mode: 'login' | 'signup';
  onModeChange: (mode: 'login' | 'signup') => void;
  cardClassName?: string;
  children: ReactNode;
};

function AuthTabs({
  active,
  onModeChange,
}: {
  active: AuthShellProps['mode'];
  onModeChange: AuthShellProps['onModeChange'];
}) {
  const tabs = [
    { label: 'Iniciar sesion', value: 'login' },
    { label: 'Crear cuenta', value: 'signup' },
  ] as const;

  return (
    <nav className="omni-stellar-velar-auth-tabs" aria-label="Acceso">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          onClick={() => onModeChange(tab.value)}
          aria-current={active === tab.value ? 'page' : undefined}
          className="omni-stellar-velar-auth-tab"
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

export function AuthShell({ mode, onModeChange, cardClassName = '', children }: AuthShellProps) {
  const [showAurora, setShowAurora] = useState(false);

  useEffect(() => {
    const run = () => setShowAurora(true);
    const browser = window as Window & {
      requestIdleCallback?: (
        callback: IdleRequestCallback,
        options?: IdleRequestOptions,
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (browser.requestIdleCallback) {
      const idleId = browser.requestIdleCallback(run, { timeout: 250 });
      return () => browser.cancelIdleCallback?.(idleId);
    }

    const timeoutId = browser.setTimeout(run, 80);
    return () => browser.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="omni-stellar-velar-auth-shell">
      <div className="omni-stellar-velar-auth-frame">
        <div className="omni-stellar-velar-auth-aurora" aria-hidden="true">
          {showAurora ? <Aurora /> : null}
        </div>

        <AuthBranding />

        <section className="omni-stellar-velar-auth-form-panel">
          <div
            className={`omni-stellar-velar-auth-card omni-stellar-velar-auth-card--${mode} ${cardClassName}`}
          >
            <AuthTabs active={mode} onModeChange={onModeChange} />
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
