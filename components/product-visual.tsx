export function ProductVisual({ kind = "driver", compact = false }: { kind?: "dimmer" | "driver"; compact?: boolean }) {
  return (
    <div className={`product-visual ${compact ? "product-visual--compact" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 640 430" role="img">
        {kind === "dimmer" ? (
          <g transform="translate(155 40)">
            <rect x="20" y="18" width="280" height="330" fill="#f4f1e8" stroke="#111111" strokeWidth="2" />
            <rect x="58" y="58" width="204" height="228" fill="#ffffff" stroke="#111111" />
            <rect x="128" y="91" width="64" height="110" fill="#111111" />
            <circle cx="160" cy="245" r="18" fill="#da291c" />
            <circle cx="51" cy="44" r="7" fill="#111111" />
            <circle cx="269" cy="44" r="7" fill="#111111" />
            <circle cx="51" cy="322" r="7" fill="#111111" />
            <circle cx="269" cy="322" r="7" fill="#111111" />
          </g>
        ) : (
          <g transform="translate(68 115)">
            <path d="M30 68H510V250H30Z" fill="#f4f1e8" stroke="#111111" strokeWidth="2" />
            <rect x="82" y="72" width="315" height="16" fill="#111111" />
            <rect x="82" y="111" width="188" height="12" fill="#da291c" />
            <rect x="82" y="139" width="232" height="12" fill="#111111" />
            <circle cx="437" cy="150" r="29" fill="#ffffff" stroke="#111111" />
            <path d="M0 113H30M510 113H544" stroke="#111111" strokeWidth="9" />
          </g>
        )}
      </svg>
    </div>
  );
}
