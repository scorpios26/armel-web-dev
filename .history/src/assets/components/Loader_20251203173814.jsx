export default function Loader({ fadeOut, onAnimationEnd }) {
  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-black/90 dark:bg-black z-[9999]
        transition-opacity duration-500
        ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
      onTransitionEnd={fadeOut ? onAnimationEnd : undefined} // use transitionend instead of animationend
    >
      {/* Loader circles */}
      <div className="relative flex items-center justify-center">
        {/* Outer neon ring */}
        <div className="absolute w-60 h-60 rounded-full border-4 border-indigo-500 blur-[3px] animate-ping"></div>

        {/* Middle rotating ring */}
        <div className="absolute w-52 h-52 rounded-full border-2 border-purple-500 animate-spin-slow"></div>

        {/* Scanning line */}
        <div className="absolute w-28 h-[2px] bg-purple-400 shadow-[0_0_12px_#a855f7] animate-scan"></div>
      </div>

      {/* Loading text under the circles */}
      <p className="mt-25 text-indigo-400 font-orbitron tracking-widest animate-pulse text-center">
        Loading...
      </p>
    </div>
  );
}
