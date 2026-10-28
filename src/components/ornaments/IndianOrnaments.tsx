import React from "react";

/**
 * Bespoke Indian Wedding Ornamental SVG System
 * All decorative SVGs include aria-hidden="true" and focusable="false"
 * so they remain purely visual and do not clutter assistive technology.
 */

export function RoyalCrestMonogram({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer scalloped mandala ring */}
      <circle
        cx="32"
        cy="32"
        r="30"
        stroke="url(#goldGrad)"
        strokeWidth="1.5"
        strokeDasharray="3 2"
      />
      <circle
        cx="32"
        cy="32"
        r="26"
        fill="#43101B"
        stroke="url(#goldGrad)"
        strokeWidth="1.75"
      />
      {/* Cusped Indian Mehrab Arch inside crest */}
      <path
        d="M32 9C27 14 23 15 20 19C17 23 16 27 16 34V47H48V34C48 27 47 23 44 19C41 15 37 14 32 9Z"
        stroke="url(#goldGrad)"
        strokeWidth="1.2"
        fill="#641A27"
      />
      {/* Top Lotus Crown */}
      <path
        d="M32 12C30 15 28 17 28 19C28 20.5 29.8 21.5 32 21.5C34.2 21.5 36 20.5 36 19C36 17 34 15 32 12Z"
        fill="#E5C46A"
      />
      {/* Monogram Letters A S */}
      <text
        x="32"
        y="39"
        textAnchor="middle"
        fill="#FFF7E9"
        fontFamily="serif"
        fontWeight="700"
        fontSize="16"
        letterSpacing="1"
      >
        AS
      </text>
      {/* Bottom floral flourish */}
      <path
        d="M22 44C25 42.5 28.5 42 32 42C35.5 42 39 42.5 42 44"
        stroke="#E5C46A"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="32" cy="44.5" r="1.5" fill="#E5C46A" />
      <defs>
        <linearGradient id="goldGrad" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E5C46A" />
          <stop offset="50%" stopColor="#D9BE82" />
          <stop offset="100%" stopColor="#B89555" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CornerFlourish({
  position = "top-left",
  className = "w-10 h-10 text-[#D9BE82]",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}) {
  const rotationMap = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  };

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${rotationMap[position]} ${className}`}
    >
      <path
        d="M2 58V14C2 7.37258 7.37258 2 14 2H58"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M7 50V16C7 11.0294 11.0294 7 16 7H50"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.75"
      />
      {/* Paisley & Lotus Corner Jewel */}
      <path
        d="M7 22C13 22 18 17 22 7"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <circle cx="13" cy="13" r="3" fill="currentColor" />
      <circle cx="22" cy="11" r="1.5" fill="currentColor" />
      <circle cx="11" cy="22" r="1.5" fill="currentColor" />
      <path
        d="M17 17C21 21 26 21 29 18C32 15 30 11 26 11"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function OrnamentalFrameCorners({
  colorClass = "text-[#D9BE82]",
  sizeClass = "w-8 h-8 sm:w-10 sm:h-10",
}: {
  colorClass?: string;
  sizeClass?: string;
}) {
  return (
    <>
      <CornerFlourish
        position="top-left"
        className={`absolute top-2 left-2 ${sizeClass} ${colorClass}`}
      />
      <CornerFlourish
        position="top-right"
        className={`absolute top-2 right-2 ${sizeClass} ${colorClass}`}
      />
      <CornerFlourish
        position="bottom-left"
        className={`absolute bottom-2 left-2 ${sizeClass} ${colorClass}`}
      />
      <CornerFlourish
        position="bottom-right"
        className={`absolute bottom-2 right-2 ${sizeClass} ${colorClass}`}
      />
    </>
  );
}

export function DecorativeDivider({
  variant = "lotus",
  tone = "gold",
  className = "",
}: {
  variant?: "lotus" | "mandala" | "kalash" | "paisley";
  tone?: "gold" | "maroon" | "vermilion";
  className?: string;
}) {
  const colorClasses = {
    gold: "text-[#D9BE82]",
    maroon: "text-[#641A27]",
    vermilion: "text-[#B52632]",
  };

  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center gap-3 sm:gap-4 py-2 select-none ${colorClasses[tone]} ${className}`}
    >
      <span className="h-[1px] w-14 sm:w-28 bg-gradient-to-r from-transparent via-current to-current opacity-75" />
      <span className="w-1.5 h-1.5 rotate-45 bg-current opacity-80" />

      {variant === "lotus" && (
        <svg viewBox="0 0 64 32" fill="none" className="w-14 h-7 shrink-0">
          {/* Central Lotus */}
          <path
            d="M32 3C28 10 26 16 32 24C38 16 36 10 32 3Z"
            fill="currentColor"
          />
          <path
            d="M32 24C24 19 20 13 21 7C25 9 28 14 32 24Z"
            fill="currentColor"
            fillOpacity="0.8"
          />
          <path
            d="M32 24C40 19 44 13 43 7C39 9 36 14 32 24Z"
            fill="currentColor"
            fillOpacity="0.8"
          />
          <path
            d="M32 25C20 24 13 19 11 13C17 14 23 18 32 25Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M32 25C44 24 51 19 53 13C47 14 41 18 32 25Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M18 28H46"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}

      {variant === "mandala" && (
        <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9 shrink-0">
          <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
          <path
            d="M20 4L24 16L36 20L24 24L20 36L16 24L4 20L16 16L20 4Z"
            stroke="currentColor"
            strokeWidth="1.4"
            fill="currentColor"
            fillOpacity="0.2"
          />
          <circle cx="20" cy="20" r="3.5" fill="currentColor" />
        </svg>
      )}

      {variant === "kalash" && (
        <svg viewBox="0 0 48 40" fill="none" className="w-11 h-9 shrink-0">
          {/* Auspicious Kalash with Coconut & Mango Leaves */}
          <path
            d="M24 4C21 7 20 10 24 13C28 10 27 7 24 4Z"
            fill="currentColor"
          />
          <path
            d="M24 13C19 11 14 13 12 17C16 16 20 15 24 15C28 15 32 16 36 17C34 13 29 11 24 13Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M17 18H31L33 26C34 31 30 35 24 35C18 35 14 31 15 26L17 18Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.18"
          />
          <path d="M16 37H32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )}

      {variant === "paisley" && (
        <svg viewBox="0 0 60 28" fill="none" className="w-14 h-7 shrink-0">
          <path
            d="M30 5C25 5 21 9 21 14C21 19 25 23 30 23C35 23 39 19 39 14C39 9 35 5 30 5Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <circle cx="30" cy="14" r="3.5" fill="currentColor" />
          <path
            d="M18 14C12 14 8 10 8 6C12 6 16 9 18 14Z"
            fill="currentColor"
            fillOpacity="0.7"
          />
          <path
            d="M42 14C48 14 52 10 52 6C48 6 44 9 42 14Z"
            fill="currentColor"
            fillOpacity="0.7"
          />
        </svg>
      )}

      <span className="w-1.5 h-1.5 rotate-45 bg-current opacity-80" />
      <span className="h-[1px] w-14 sm:w-28 bg-gradient-to-l from-transparent via-current to-current opacity-75" />
    </div>
  );
}

export function ToranScallopBorder({
  className = "text-[#D9BE82]/35",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
    >
      <svg
        viewBox="0 0 1200 28"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-4 sm:h-6"
      >
        <path
          d="M0 0H1200V4C1175 22 1125 22 1100 4C1075 22 1025 22 1000 4C975 22 925 22 900 4C875 22 825 22 800 4C775 22 725 22 700 4C675 22 625 22 600 4C575 22 525 22 500 4C475 22 425 22 400 4C375 22 325 22 300 4C275 22 225 22 200 4C175 22 125 22 100 4C75 22 25 22 0 4V0Z"
          fill="currentColor"
        />
        {/* Hanging Marigold Tassel Drops */}
        {[50, 150, 250, 350, 450, 550, 650, 750, 850, 950, 1050, 1150].map(
          (cx) => (
            <circle key={cx} cx={cx} cy="22" r="3" fill="currentColor" />
          )
        )}
      </svg>
    </div>
  );
}

export function MandalaWatermark({
  className = "w-96 h-96 text-[#D9BE82]/10",
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      <circle cx="100" cy="100" r="94" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="100" cy="100" r="64" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
      <circle cx="100" cy="100" r="44" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="22" stroke="currentColor" strokeWidth="1.2" />
      {/* 8-fold lotus petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 100 100)`}>
          <path
            d="M100 18C90 40 90 60 100 78C110 60 110 40 100 18Z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="100" cy="12" r="2.5" fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}

export function ExperienceSealBadge({
  years = 12,
  labelTop = "YEARS OF CRAFT",
  labelBottom = "RAMGANJ • SITAPUR",
  className = "",
}: {
  years?: number;
  labelTop?: string;
  labelBottom?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative inline-flex items-center gap-3.5 px-4 py-2.5 rounded-full bg-[#43101B]/95 border border-[#D9BE82]/60 shadow-lg ${className}`}
    >
      <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#E5C46A] via-[#D9BE82] to-[#B89555] text-[#43101B] font-serif font-bold text-xl shrink-0 shadow-inner">
        <span>{years}</span>
        <span
          aria-hidden="true"
          className="absolute inset-0.5 rounded-full border border-[#43101B]/30 pointer-events-none"
        />
      </div>
      <div className="text-left pr-2">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#E5C46A] font-semibold">
          {labelTop}
        </p>
        <p className="text-xs sm:text-sm text-[#FFF7E9] font-medium">
          {labelBottom}
        </p>
      </div>
    </div>
  );
}

