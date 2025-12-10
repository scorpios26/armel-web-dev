import Loading from "../Loading.json";

export default function Loader({ fadeOut, onAnimationEnd }) {
  return (
    <Lottie
                animationData={Loading}
                loop={true}
                autoplay={true}
                className="w-100 md:w-100 lg:w-[550px]"
              />
  );
}
