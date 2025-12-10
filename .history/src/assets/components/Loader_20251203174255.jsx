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

        {/* Inner pulsing dot */}
        <div className="w-12 h-12 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_15px_#6366f1]"></div>

        {/* Scanning line */}
        <div className="absolute w-72 h-[2px] bg-purple-400 shadow-[0_0_12px_#a855f7] animate-scan"></div>
      </div>
      {/* Rotating dot outside the circle */}
        <div className="absolute w-60 h-60 animate-spin-slow">
          <div className="absolute top-1/2 left-full w-4 h-4 bg-purple-400 rounded-full shadow-[0_0_10px_#a855f7] -translate-x-1/2 -translate-y-1/2"></div>
        </div>

         <div className="absolute w-60 h-60 animate-spin-slow">
          <div className="absolute top-1/2 left-full w-4 h-4 bg-purple-400 rounded-full shadow-[0_0_10px_#a855f7] -translate-x-2/2 -translate-y-2/1"></div>
        </div>

        

      {/* Loading text under the circles */}
      <p className="mt-25 text-2xl text-indigo-400 font-orbitron tracking-widest animate-pulse text-center">
        Loading...
      </p>
    </div>
  );
}
