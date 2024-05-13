"use client";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useResize } from "../UseResize/useResize";

type ImgCarouselProps = React.ComponentProps<"div">;
type CarouselProps = React.ComponentProps<"div">;

function ImgCarousel({ ...props }: ImgCarouselProps) {
  return (
    <div className="bg-cover bg-center flex h-659 w-full" {...props}></div>
  );
}
const TextCarousel = () => {
  return (
    <div className="grid grid-cols-1 place-items-center max-w-screen-xl w-full md:place-items-start md:ml-52 p-12 ">
      <div className="md:w-456">
        <h1 className=" md:text-42 text-3xl font-bold mb-2">
          Morais & Ribeiro
        </h1>
        <h2 className="md:text-2xl text-base font-bold antialiased">
          Somos mais do que apenas advogados - somos uma parceria fundada na
          amizade e no profissionalismo.
        </h2>
        <div className="border border-white my-3 antialiased w-full"></div>
        <p className="font-Lato font-normal md:text-lg text-sm mb-3">
          Confie em nós para representar seus interesses com paixão,
          profissionalismo e comprometimento. Somos um escritório de atuação
          full service, 360º, adaptando,entendendo e acolhendo cada cliente com
          sua respectiva demanda.
        </p>
        <p className="font-Lato font-normal md:text-lg text-sm">
          Estamos honrados em fazer parte de sua jornada jurídica e ansiosos
          para trabalhar juntos na busca por soluções eficazes e justas.
        </p>
      </div>
    </div>
  );
};
export const ControlledCarousel = ({ children }: CarouselProps) => {
  const [index, setIndex] = useState(0);

  const isAnimationActive = useResize();

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="font-Alegreya">
      <Carousel
        interval={10000}
        activeIndex={index}
        onSelect={handleSelect}
        fade
      >
        <Carousel.Item>
          <ImgCarousel
            className={`grid place-items-center ${
              isAnimationActive ? "animate-slide" : "bg-center"
            }`}
            style={{
              backgroundPosition: "center",
              backgroundImage: "url('/ImgCarousel/Img1.png')",
              backgroundSize: "cover",
              height: "659px",
            }}
          >
            <TextCarousel />
          </ImgCarousel>
        </Carousel.Item>

        <Carousel.Item>
          <ImgCarousel
            className={`grid place-items-center ${
              isAnimationActive ? "animate-slide" : "bg-center"
            }`}
            style={{
              backgroundImage: "url('/ImgCarousel/Img2.png')",
              backgroundSize: "cover",
              height: "659px",
            }}
          >
            <TextCarousel />
          </ImgCarousel>
        </Carousel.Item>

        <Carousel.Item>
          <ImgCarousel
            className={`grid place-items-center ${
              isAnimationActive ? "animate-slide" : "bg-center"
            }`}
            style={{
              backgroundImage: "url('/ImgCarousel/Img3.png')",
              backgroundSize: "cover",
              height: "659px",
            }}
          >
            <TextCarousel />
          </ImgCarousel>
        </Carousel.Item>

        <Carousel.Item>
          <ImgCarousel
            className={`grid place-items-center ${
              isAnimationActive ? "animate-slide" : "bg-center"
            }`}
            style={{
              backgroundImage: "url('/ImgCarousel/Img4.png')",
              backgroundSize: "cover",
              height: "659px",
            }}
          >
            <TextCarousel />
          </ImgCarousel>
        </Carousel.Item>

        <Carousel.Item>
          <ImgCarousel
            className={`grid place-items-center ${
              isAnimationActive ? "animate-slide" : "bg-center"
            }`}
            style={{
              backgroundImage: "url('/ImgCarousel/Img5.png')",
              backgroundSize: "cover",
              height: "659px",
            }}
          >
            <TextCarousel />
          </ImgCarousel>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
