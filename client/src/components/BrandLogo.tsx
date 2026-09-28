type BrandLogoProps = {
  className?: string;
};

export default function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <a className={`brand ${className}`} href="#top" aria-label="MUDDAKIR home">
      <span className="brand-mark" aria-hidden="true">
        <svg className="brand-symbol" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 24.2C11.4 21.9 15.5 22 20 24.7V32C15.6 29.7 11.5 29.4 7.5 31.7V24.2Z" fill="currentColor" opacity=".98" />
          <path d="M32.5 24.2C28.6 21.9 24.5 22 20 24.7V32C24.4 29.7 28.5 29.4 32.5 31.7V24.2Z" fill="currentColor" opacity=".72" />
          <path d="M20 24.8V32" stroke="#274D40" strokeWidth="1.15" strokeLinecap="round" />
          <path d="M11.2 18.7C13.4 12.8 18.1 9.4 24.5 10.6C20.4 12.8 18.1 16.1 18.7 20.6C16.4 19.3 14 18.7 11.2 18.7Z" fill="currentColor" />
          <path d="M27.7 12.9C28.7 13.8 29.6 14.9 30.2 16.3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".75" />
          <circle cx="29.3" cy="10.2" r="1.25" fill="currentColor" />
        </svg>
      </span>
      <span className="brand-name">MUDDAKIR</span>
    </a>
  );
}
