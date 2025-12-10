export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-black">
      <div className="relative">
        {/* Glowing ring */}
        <div className="w-24 h-24 border-4 border-transparent border-t-[#7B2FF7] border-l-[#00E5FF] rounded-full animate-spin-neon"></div>

        {/* Pulsing dot */}
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#00E5FF] rounded-full animate-pulse-neon"></div>

        {/* Text */}
        <p className="text-center text-[#7B2FF7] font-orbitron mt-6 tracking-widest animate-text-glow">
          LOADING...
        </p>
      </div>
    </div>
  );
}
