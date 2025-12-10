export default function Loader({ fadeOut, onAnimationEnd }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/90 dark:bg-black z-[9999]
        transition-opacity duration-700
        ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
      onTransitionEnd={fadeOut ? onAnimationEnd : undefined}
    >
      <div className="relative flex items-center justify-center w-48 h-48">
        {/* Outer neon ring */}
        <div className="absolute w-48 h-48 rounded-full border-4 border-indigo-500 blur-[6px] animate-ping"></div>

        {/* Middle rotating ring */}
        <div className="absolute w-36 h-36 rounded-full border-2 border-purple-500 animate-spin-slow"></div>

        {/* Inner pulsing dot */}
        <div className="w-6 h-6 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_20px_#6366f1]"></div>

        {/* Orbiting neon dots */}
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_12px_#a855f7] animate-orbit" style={{ top: '0', left: '50%' }}></div>
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_12px_#a855f7] animate-orbit animation-delay-[0.5s]" style={{ top: '0', left: '50%' }}></div>
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_12px_#a855f7] animate-orbit animation-delay-[1s]" style={{ top: '0', left: '50%' }}></div>

        {/* Scanning line */}
        <div className="absolute w-32 h-[2px] bg-purple-400 shadow-[0_0_12px_#a855f7] animate-scan"></div>
      </div>
    </div>
  );
}
