"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useExampleContext } from "@/context/Context";
import CircularProgressUI from "@/components/CircularProgress";

export default function Home() {
  const { data, loading } = useExampleContext();
  const [activeIndex, setActiveIndex] = useState(0);
const [partial, setPartial] = useState<any[]>([]);

const oo = () => {

  setPartial((prev) => [...prev, data.slice(0,5)]);
}


  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024, // Até 1024px (tablets)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Até 768px (dispositivos móveis)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Até 480px (celulares pequenos)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading)
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <CircularProgressUI />
      </div>
    );

  return (
    <section className='h-[80vh] flex items-center'>
      <div className="slider-container container mx-auto">
        <Slider {...settings}>
          {data.slice(0,6)
          .map((item, index) => (
            <div
              key={index}
              className={`slide ${index === activeIndex ? "active" : ""}`}
            >
              <div className='flex items-center justify-center  flex-col'>
                <h1>{item.name}</h1>
                <img src="/dbdassets/Ace Visconti_Portrait.webp" alt={item.name} />
              </div>
            </div>
          ))}
        </Slider>
       
      </div>
    </section>
  );
}
