"use client"

import React, { useEffect } from 'react';
import { getPerksRandom } from '@/http/http'; 
import CircularProgressUI from '@/components/CircularProgress';
import { PerkItem } from '@/interface/int';

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
      <>
      {perks.length > 0 ? (
        <div className='text-white'>
        {perks.map((perk, index) => (
            <div key={index}>
                <h1>{perk.name}</h1>
               
            </div>
        ))}
    </div>

      ) : (
        <CircularProgressUI />
      )}
        </>
    );
};

export default PerkRandomiser;