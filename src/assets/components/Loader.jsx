import Lottie from "lottie-react";
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
      <Lottie
        animationData={Loading}
        loop={true}
        autoplay={true}
        className="w-60 md:w-80 lg:w-[550px]"
      />
    </div>
  );
}
