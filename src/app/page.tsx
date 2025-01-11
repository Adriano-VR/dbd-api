"use client"

import { useEffect } from "react";
import {getData} from './../http/http';
import React from "react";
import CardUI from "@/components/CardUI";
import { DataItem } from "@/interface/int";
import CircularProgressUI from "@/components/CircularProgress";


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

  
  return (
  
  
      <main className="container mx-auto">
      <div className="flex justify-center items-center min-h-[70vh]">
        {data.length > 0 ? (
         
          <div className="space-y-6">
         
         <ul className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5 gap-4">
          {data.filter(a => a.role === 'survivor').
          slice(0,5).
          map((item,index) => (
          <CardUI key={index} item={item} />
          ))}
        </ul>

        <ul className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5 gap-4">
        {data.filter(a => a.role === 'killer').
        slice(0,5).
        map((item,index) => (
        <CardUI key={index} item={item} />
        ))}
        </ul>
        </div>
       

      ) : (
        <CircularProgressUI />
      )}

    </div>
    </main>
   
  
    
  );
}
