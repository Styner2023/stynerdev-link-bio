/**
 * @author StynerDev
 * @see https://www.styner.dev/
 */
export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M50 0C50 40 60 50 100 50C60 50 50 60 50 100C50 60 40 50 0 50C40 50 50 40 50 0Z" />
    </svg>
  )
}
