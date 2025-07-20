import React from 'react';

interface FlagIconProps {
  className?: string;
}

export const USFlag: React.FC<FlagIconProps> = ({ className = "w-5 h-4" }) => (
  <svg viewBox="0 0 60 40" className={className}>
    <defs>
      <clipPath id="us-flag">
        <rect width="60" height="40" />
      </clipPath>
    </defs>
    <g clipPath="url(#us-flag)">
      {/* Red stripes */}
      <rect width="60" height="40" fill="#B22234" />
      {/* White stripes */}
      {[1, 3, 5, 7, 9, 11].map(i => (
        <rect key={i} y={i * 40/13} width="60" height={40/13} fill="#FFFFFF" />
      ))}
      {/* Blue canton */}
      <rect width="24" height={40 * 7/13} fill="#3C3B6E" />
      {/* Stars - simplified for small size */}
      <g fill="#FFFFFF">
        {/* Row 1: 6 stars */}
        {[0, 1, 2, 3, 4, 5].map(i => (
          <circle key={`r1-${i}`} cx={2 + i * 4} cy={2.5} r="0.8" />
        ))}
        {/* Row 2: 5 stars */}
        {[0, 1, 2, 3, 4].map(i => (
          <circle key={`r2-${i}`} cx={4 + i * 4} cy={5.5} r="0.8" />
        ))}
        {/* Row 3: 6 stars */}
        {[0, 1, 2, 3, 4, 5].map(i => (
          <circle key={`r3-${i}`} cx={2 + i * 4} cy={8.5} r="0.8" />
        ))}
        {/* Row 4: 5 stars */}
        {[0, 1, 2, 3, 4].map(i => (
          <circle key={`r4-${i}`} cx={4 + i * 4} cy={11.5} r="0.8" />
        ))}
        {/* Row 5: 6 stars */}
        {[0, 1, 2, 3, 4, 5].map(i => (
          <circle key={`r5-${i}`} cx={2 + i * 4} cy={14.5} r="0.8" />
        ))}
      </g>
    </g>
  </svg>
);

export const JapanFlag: React.FC<FlagIconProps> = ({ className = "w-5 h-4" }) => (
  <svg viewBox="0 0 60 40" className={className}>
    <defs>
      <clipPath id="japan-flag">
        <rect width="60" height="40" />
      </clipPath>
    </defs>
    <g clipPath="url(#japan-flag)">
      {/* White background */}
      <rect width="60" height="40" fill="#FFFFFF" />
      {/* Red circle (sun) */}
      <circle cx="30" cy="20" r="12" fill="#BC002D" />
    </g>
  </svg>
); 