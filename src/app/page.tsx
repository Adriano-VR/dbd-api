"use client"

import { useEffect } from "react";
import {getData} from './../http/http';
import React from "react";
import CardUI from "@/components/CardUI";
import { DataItem } from "@/interface/int";
import CircularProgressUI from "@/components/CircularProgress";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Home() {


  const [data, setData] = React.useState<DataItem[]>([]);
  
  const fetchData = async () => {
    try {
      const response = await getData();
      // Transformar o objeto em um array de itens
      const dataArray = Object.keys(response).map(key => ({
        id: key,
        ...response[key]
      }));
      setData(dataArray);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
        

  
  return (
  
  
      <section className="container mx-auto">
     
        {data.length > 0 ? (
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
        
         
      ) : (
      <div className='absolute inset-0 flex items-center justify-center'>
                <CircularProgressUI />
              </div>
      )}

   
    </section>
   
  
    
  );
}
