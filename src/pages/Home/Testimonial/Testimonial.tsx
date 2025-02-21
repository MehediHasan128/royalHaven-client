import { Typography } from "@mui/material";
import Container from "../../../components/ui/Container";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import TestimonialCard from "../../../components/ui/TestimonialCard";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'

const data = [
  {
    key: "1",
    name: "Mehedi Hasan",
    location: "Dhaka, Bangladesh",
    ratings: "04",
    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eaque perspiciatis. Porro mollitia illo, dignissimos nemo vel natus voluptates. Pariatur iusto quidem, libero dolorum et odit maiores, molestiae quisquam recusandae alias voluptatum laudantium!",
  },
  {
    key: "2",
    name: "Rahad Hossian",
    location: "Josser, Bangladesh",
    ratings: "3.5",
    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eaque perspiciatis. Porro mollitia illo, dignissimos nemo vel natus voluptates. Pariatur iusto quidem, libero dolorum et odit maiores, molestiae quisquam recusandae alias voluptatum laudantium!",
  },
  {
    key: "3",
    name: "Zihad mahmus",
    location: "Magura, Bangladesh",
    ratings: "4.5",
    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eaque perspiciatis. Porro mollitia illo, dignissimos nemo vel natus voluptates. Pariatur iusto quidem, libero dolorum et odit maiores, molestiae quisquam recusandae alias voluptatum laudantium!",
  },
];

const Testimonial = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(), Fade()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="bg-gray-100">
      <Container>
        <div className="lg:w-[70%] lg:text-justify">
          <Typography sx={{ typography: { xs: "h4", sm: "h4", lg: "h3" } }}>
            <span>What Our Clients Say</span>
          </Typography>
          <div className="border-2 border-[#142D53] w-[40%] md:w-[20%] mt-2 mb-10"></div>
          <Typography variant="body2">
            <span className="text-gray-600">
              At Royal Haven, we take pride in helping our clients find their
              dream properties with ease and confidence. Don’t just take our
              word for it—hear from our satisfied buyers, sellers, and investors
              who have experienced seamless transactions and exceptional
              service. Your trust is our greatest achievement!
            </span>
          </Typography>
        </div>

        <div className="flex justify-center items-center mt-20">
          <button
            onClick={scrollPrev}
            className="cursor-pointer hover:-translate-x-3 duration-700"
          >
            <GoChevronLeft className="text-7xl" />
          </button>

          <div className="overflow-hidden w-[100%]" ref={emblaRef}>
            <div className="flex">
              {data.map((item) => (
                <div className="flex-[0_0_100%] px-4" key={item.key}>
                  <TestimonialCard
                    name={item.name}
                    location={item.location}
                    ratings={item.ratings}
                    comments={item.comments}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollNext}
            className="cursor-pointer hover:translate-x-3 duration-700"
          >
            <GoChevronRight className="text-7xl" />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
