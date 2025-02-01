"use client"

import CardUI from '@/components/CardUI';
import CircularProgressUI from '@/components/CircularProgress';
import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useExampleContext } from '@/context/Context';

const PerksPage: React.FC = () => {
  
  const {data,loading} = useExampleContext();



  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 1500,
    slidesToShow: 5, // Número de slides padrão
    slidesToScroll: 5,
    autoplay: true,
    arrows: false,
  
    responsive: [
      {
        breakpoint: 1024, // Até 1024px (tablets)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // Até 768px (dispositivos móveis)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  const sliderSettingskiller = {
    dots: false,
    infinite: false,
    speed: 1500,
    slidesToShow: 5, // Número de slides padrão
    slidesToScroll: 5,
    autoplay: false,
    arrows: false,
  
    responsive: [
      {
        breakpoint: 1024, // Até 1024px (tablets)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // Até 768px (dispositivos móveis)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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



  if(loading) return ( 
  <div className='absolute inset-0 flex items-center justify-center'>
    <CircularProgressUI />
  </div>
  )
        

    return (
        <section className="container mx-auto">
     
       
          <>
          <div className="mb-3 ">
          <h1 className='text-secondary text-xl font-bold tracking-wide ml-6 sm:ml-3 mb-3'>Survivors</h1>
            <Slider {...sliderSettings}>
              {data
                .filter((a) => a.role === "survivor")
                .map((item, index) => (
                  <div key={index}>
                   
                    <CardUI item={item} />
                  </div>
                ))}
            </Slider>
          </div>
        
          <>
          <h1 className='text-secondary text-xl font-bold tracking-wide ml-6 sm:ml-3 mb-3'>Killers</h1>
            <Slider {...sliderSettingskiller}>
              {data
                .filter((a) => a.role === "killer")
                .map((item, index) => (
                  <div key={index}>
                    <CardUI item={item} />
                  </div>
                ))}
            </Slider>
          </>
        </>
        
         
    
   
    </section>
    );
};

export default PerksPage;