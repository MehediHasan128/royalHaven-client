import { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Carousel = ({ children }: { children: ReactNode }) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">{children}</div>
    </div>
  );
};

export default Carousel;
