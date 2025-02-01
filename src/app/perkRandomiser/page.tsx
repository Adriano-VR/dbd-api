"use client"

import React from 'react';
import CircularProgressUI from '@/components/CircularProgress';
import CardPerk from '@/components/CardPerks';
import { useExampleContext } from '@/context/Context';

const PerkRandomiser: React.FC = () => {
  const { perks, loading, getPerksRandomF } = useExampleContext();

  React.useEffect(() => {
    getPerksRandomF();
  }, []); // Chama apenas uma vez quando o componente é montado


  if(loading) return ( 
  <div className='absolute inset-0 flex items-center justify-center'>
    <CircularProgressUI />
  </div>
  )

  return (
    <section className="container mx-auto px-5 sm:px-0 flex min-h-[70vh] w-full justify-center">
      <div className="w-full">
        <div className='grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4'>
          {perks.map((perk, index) => (
            <CardPerk key={index} item={perk} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerkRandomiser;