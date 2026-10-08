import { useId } from "react";

export function ProductVisual({ kind = "driver", compact = false }: { kind?: "dimmer" | "driver"; compact?: boolean }) {
  const id = useId();
  return (
    <div className={`product-visual ${compact ? "product-visual--compact" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 640 430" role="img">
        <defs>
          <linearGradient id={`body-${id}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#f9fbfa" />
            <stop offset="1" stopColor="#dce6e1" />
          </linearGradient>
          <filter id={`shadow-${id}`} x="-20%" y="-30%" width="140%" height="180%">
            <feDropShadow dx="0" dy="22" stdDeviation="18" floodColor="#092c22" floodOpacity=".18" />
          </filter>
        </defs>
        {kind === "dimmer" ? (
          <g filter={`url(#shadow-${id})`} transform="translate(155 40)">
            <rect x="20" y="18" width="280" height="330" rx="28" fill={`url(#body-${id})`} stroke="#bdcac4" />
            <rect x="58" y="58" width="204" height="228" rx="17" fill="#fdfefd" stroke="#cad4cf" />
            <rect x="128" y="91" width="64" height="110" rx="30" fill="#174f3d" />
            <circle cx="160" cy="245" r="18" fill="#d8e5df" />
            <circle cx="51" cy="44" r="7" fill="#a4b4ac" />
            <circle cx="269" cy="44" r="7" fill="#a4b4ac" />
            <circle cx="51" cy="322" r="7" fill="#a4b4ac" />
            <circle cx="269" cy="322" r="7" fill="#a4b4ac" />
          </g>
        ) : (
          <g filter={`url(#shadow-${id})`} transform="translate(68 115)">
            <path d="M30 68Q30 28 70 28H470Q510 28 510 68V210Q510 250 470 250H70Q30 250 30 210Z" fill={`url(#body-${id})`} stroke="#bdcac4" />
            <rect x="82" y="72" width="315" height="16" rx="8" fill="#174f3d" opacity=".9" />
            <rect x="82" y="111" width="188" height="12" rx="6" fill="#aabbb2" />
            <rect x="82" y="139" width="232" height="12" rx="6" fill="#ccd7d1" />
            <circle cx="437" cy="150" r="29" fill="#edf2ef" stroke="#bdcac4" />
            <path d="M0 113H30M510 113H544" stroke="#698278" strokeWidth="9" strokeLinecap="round" />
          </g>
        )}
      </svg>
    </div>
  );
}
