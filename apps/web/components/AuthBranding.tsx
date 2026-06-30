import type { ReactNode } from 'react';
import { FileText, Landmark, ShieldCheck } from 'lucide-react';
import { omni-stellar-omni-stellar-velarBrand } from './omni-stellar-omni-stellar-velarBrand';

function Feature({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div className="omni-stellar-velar-auth-feature">
      <span className="omni-stellar-velar-auth-feature-icon">
        {icon}
      </span>
      <p>{title}</p>
    </div>
  );
}

export function AuthBranding() {
  return (
    <section className="omni-stellar-velar-auth-branding">
      <omni-stellar-omni-stellar-velarBrand size="lg" className="omni-stellar-velar-auth-logo" />

      <div className="omni-stellar-velar-auth-copy">
        <h1>Transparencia que se puede verificar.</h1>
        <p>Accede a la plataforma publica de trazabilidad disenada para instituciones y ciudadanos.</p>

        <div className="omni-stellar-velar-auth-features">
          <Feature icon={<FileText size={22} strokeWidth={1.9} aria-hidden />} title="Historial auditable" />
          <Feature icon={<Landmark size={22} strokeWidth={1.9} aria-hidden />} title="Consulta institucional" />
          <Feature icon={<ShieldCheck size={22} strokeWidth={1.9} aria-hidden />} title="Registro verificable" />
        </div>
      </div>
    </section>
  );
}
