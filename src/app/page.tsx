"use client"

import { useEffect } from "react";
import getData from './../http/http';
import React from "react";
import Image from "next/image";

export default function Home() {

  interface DataItem {
    id: string;
    name: string;
    role: string;
    difficulty: string;
    gender: string;
    height: string;
    bio: string;
    story: string;
    tunables: unknown;
    item: unknown;
    outfit: string[];
    dlc: unknown;
    image: string;
    perks: string[];
  }

  const [data, setData] = React.useState<DataItem[]>([]);
  
  const fetchData = async () => {
    try {
      const response = await getData();
      console.log('API response:', response);
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

  console.log('Data state:', data);
  
  return (
    <div>
      <h1>DBD API</h1>
      {data.length > 0 ? (
        <ul>
          {data.slice(0,4).
          map((item,index) => (
            <li key={index}>
              <h2>{item.name}</h2>
              <p>{item.role}</p>
              <p>{item.difficulty}</p>
              <p>{item.gender}</p>
              <p>{item.height}</p>
              <p>{item.bio}</p>
              <p>{item.story}</p>
              <Image src={ `/${item.name}_Portrait.webp`} alt={item.name} width={300} height={300} unoptimized />
              <ul>
                {item.perks.map(perk => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
