// Loader.jsx
export default function Loader({ fadeOut, onAnimationEnd }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/90 dark:bg-black z-[9999] 
        ${fadeOut ? "animate-fadeOut pointer-events-none" : ""}`}
      onAnimationEnd={fadeOut ? onAnimationEnd : undefined}
    >
      <div className="relative flex items-center justify-center w-48 h-48">

        {/* Outer neon ping ring */}
        <div className="absolute w-48 h-48 rounded-full border-4 border-indigo-500 blur-[4px] animate-ping"></div>

        {/* Middle rotating ring */}
        <div className="absolute w-36 h-36 rounded-full border-2 border-purple-500 animate-spin-slow"></div>

        {/* Inner pulsing dot */}
        <div className="absolute w-6 h-6 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_20px_#6366f1]"></div>

        {/* Orbiting neon dots */}
        <div className="absolute w-48 h-48">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_#a855f7] animate-orbit"
              style={{
                transform: `rotate(${i * 60}deg) translateX(70px) rotate(-${i * 60}deg)`,
              }}
            ></div>
          ))}
        </div>

        {/* Scanning line */}
        <div className="absolute w-28 h-[2px] bg-purple-400 shadow-[0_0_12px_#a855f7] animate-scan"></div>

      </div>
    </div>
  );
}
