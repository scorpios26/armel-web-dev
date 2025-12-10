import Loading from "../Loading.json";

export default function Loader({ fadeOut, onAnimationEnd }) {
  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-black/90 dark:bg-black z-[9999]
        transition-opacity duration-500
        ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
      onTransitionEnd={fadeOut ? onAnimationEnd : undefined}
    >
      <div className="w-60 h-60">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>

      <p className="mt-6 text-indigo-400 font-orbitron tracking-widest text-center">
        Loading...
      </p>
    </div>
  );
}
