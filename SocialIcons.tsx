import { Lock, LockOpen } from "lucide-react";

interface SocialIconProps {
  className?: string;
  size?: number;
}

// OnlyFans VIP (com cadeado)
export function OnlyFansVIPIcon({ className = "", size = 40 }: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Blob background */}
      <path
        d="M50,10 C60,8 75,12 85,25 C95,38 98,55 90,70 C82,85 65,95 50,92 C35,89 18,80 12,65 C6,50 8,30 20,18 C32,6 40,12 50,10 Z"
        fill="currentColor"
        opacity="0.2"
      />
      {/* OnlyFans logo (simplified) */}
      <circle cx="50" cy="45" r="25" fill="none" stroke="white" strokeWidth="3" />
      <circle cx="50" cy="45" r="17" fill="none" stroke="white" strokeWidth="3" />
      {/* Lock icon */}
      <rect x="43" y="48" width="14" height="10" rx="2" fill="white" />
      <path
        d="M45,48 L45,43 C45,40 47,38 50,38 C53,38 55,40 55,43 L55,48"
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
}

// OnlyFans Free (sem cadeado)
export function OnlyFansFreeIcon({ className = "", size = 40 }: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Blob background */}
      <path
        d="M45,8 C58,6 72,15 82,28 C92,41 94,58 87,72 C80,86 62,94 48,90 C34,86 20,75 15,60 C10,45 12,28 25,16 C38,4 32,10 45,8 Z"
        fill="currentColor"
        opacity="0.2"
      />
      {/* OnlyFans logo (simplified) */}
      <circle cx="50" cy="50" r="25" fill="none" stroke="white" strokeWidth="3" />
      <circle cx="50" cy="50" r="17" fill="none" stroke="white" strokeWidth="3" />
      <circle cx="50" cy="50" r="10" fill="none" stroke="white" strokeWidth="2" />
    </svg>
  );
}

// Instagram
export function InstagramIcon({ className = "", size = 40 }: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Blob background */}
      <path
        d="M52,12 C63,9 78,14 87,27 C96,40 97,57 89,71 C81,85 64,93 49,91 C34,89 19,78 14,63 C9,48 13,31 26,19 C39,7 41,15 52,12 Z"
        fill="currentColor"
        opacity="0.2"
      />
      {/* Instagram logo */}
      <rect x="30" y="30" width="40" height="40" rx="12" fill="none" stroke="white" strokeWidth="3" />
      <circle cx="50" cy="50" r="12" fill="none" stroke="white" strokeWidth="3" />
      <circle cx="64" cy="36" r="3" fill="white" />
    </svg>
  );
}

// X (Twitter)
export function XIcon({ className = "", size = 40 }: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Blob background */}
      <path
        d="M48,11 C59,8 74,13 84,26 C94,39 96,56 88,70 C80,84 63,92 48,90 C33,88 18,77 13,62 C8,47 11,30 24,18 C37,6 37,14 48,11 Z"
        fill="currentColor"
        opacity="0.2"
      />
      {/* X logo */}
      <path
        d="M35,35 L50,50 L65,35 M65,65 L50,50 L35,65 M50,50 L50,50"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line x1="35" y1="35" x2="65" y2="65" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <line x1="65" y1="35" x2="35" y2="65" stroke="white" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

// Clips4Sale
export function Clips4SaleIcon({ className = "", size = 40 }: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Blob background */}
      <path
        d="M51,9 C62,7 77,12 86,25 C95,38 98,55 90,69 C82,83 65,91 50,89 C35,87 20,76 15,61 C10,46 12,29 25,17 C38,5 40,11 51,9 Z"
        fill="currentColor"
        opacity="0.2"
      />
      {/* C4S logo */}
      <text x="27" y="62" fill="white" fontSize="28" fontWeight="bold" fontFamily="Arial, sans-serif">
        c4s
      </text>
      {/* Lightning bolt */}
      <path
        d="M50,28 L45,45 L52,45 L48,60 L56,42 L50,42 Z"
        fill="#9b59d6"
        stroke="white"
        strokeWidth="1"
      />
    </svg>
  );
}

// Throne
export function ThroneIcon({ className = "", size = 40 }: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Blob background */}
      <path
        d="M49,10 C60,8 75,13 85,26 C95,39 97,56 89,70 C81,84 64,92 49,90 C34,88 19,77 14,62 C9,47 11,30 24,18 C37,6 38,12 49,10 Z"
        fill="currentColor"
        opacity="0.2"
      />
      {/* Crown */}
      <path
        d="M30,55 L35,40 L42,50 L50,35 L58,50 L65,40 L70,55 Z"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect x="28" y="55" width="44" height="8" fill="white" />
      <circle cx="35" cy="40" r="3" fill="white" />
      <circle cx="50" cy="35" r="3" fill="white" />
      <circle cx="65" cy="40" r="3" fill="white" />
    </svg>
  );
}

// Amazon
export function AmazonIcon({ className = "", size = 40 }: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Blob background */}
      <path
        d="M50,11 C61,9 76,14 86,27 C96,40 98,57 90,71 C82,85 65,93 50,91 C35,89 20,78 15,63 C10,48 12,31 25,19 C38,7 39,13 50,11 Z"
        fill="currentColor"
        opacity="0.2"
      />
      {/* Amazon 'a' */}
      <text x="32" y="65" fill="white" fontSize="40" fontWeight="bold" fontFamily="Arial, sans-serif">
        a
      </text>
      {/* Smile arrow */}
      <path
        d="M32,68 Q50,75 68,68"
        fill="none"
        stroke="#ff9900"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M65,65 L68,68 L65,71"
        fill="none"
        stroke="#ff9900"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
