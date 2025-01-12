"use client"

import React, { useEffect } from 'react';
import { getPerksRandom } from '@/http/http'; 
import CircularProgressUI from '@/components/CircularProgress';
import { PerkItem } from '@/interface/int';
import CardPerk from '@/components/CardPerks';

const PerkRandomiser: React.FC = () => {

 const [perks, setPerks] = React.useState<PerkItem[]>([]);
  
  const fetchData = async () => {
    try {
      const response = await getPerksRandom();
      // Transformar o objeto em um array de itens
      const dataArray = Object.keys(response).map(key => ({
        id: key,
        ...response[key]
      }));
      setPerks(dataArray);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

    return (
      <section className="container mx-auto px-5 sm:px-0 flex  min-h-[70vh] w-full justify-center">
        <div className="w-full">
        {perks.length > 0 ? (
        <div className='grid grid-cols-1  xl:grid-cols-2 2xl:grid-cols-4 gap-4 '>
        {perks.map((perk, index) => (
           <CardPerk key={index} item={perk} />
        ))}
       </div>

      ) : (
        <div className='absolute inset-0 flex items-center justify-center'>
          <CircularProgressUI />
        </div>
        
      )}
        </div>
     

      
        </section>
    );
};

export default PerkRandomiser;