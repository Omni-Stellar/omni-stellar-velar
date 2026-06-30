'use client';

export function AuthDivider({ text }: { text: string }) {
  return (
    <div className="omni-stellar-velar-auth-divider">
      <span />
      <p>{text}</p>
      <span />
    </div>
  );
}

export { AuthDivider as Divider };
