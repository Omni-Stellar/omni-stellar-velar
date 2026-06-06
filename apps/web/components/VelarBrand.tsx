type omni-stellar-omni-stellar-velarBrandProps = {
  className?: string;
  darkSurface?: boolean;
  markOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const wordmarkSizes = {
  sm: 'h-8 w-[116px]',
  md: 'h-10 w-[145px]',
  lg: 'h-12 w-[174px]',
};

const markSizes = {
  sm: 'h-8 w-9',
  md: 'h-10 w-11',
  lg: 'h-12 w-[54px]',
};

export function omni-stellar-omni-stellar-velarBrand({ className = '', darkSurface = false, markOnly = false, size = 'md' }: omni-stellar-omni-stellar-velarBrandProps) {
  const imageClass = markOnly ? markSizes[size] : wordmarkSizes[size];
  const src = markOnly ? '/omni-stellar-velar-mark.png' : '/omni-stellar-velar-wordmark.png';
  const surfaceClass = darkSurface ? 'rounded-md bg-white px-2 py-1' : '';

  return (
    <span className={`inline-flex shrink-0 items-center ${surfaceClass} ${className}`}>
      <img src={src} alt="VELAR" className={`${imageClass} object-contain`} />
    </span>
  );
}
