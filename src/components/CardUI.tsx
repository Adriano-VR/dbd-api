import React from "react";
import { Card,  CardHeader, Image } from "@nextui-org/react";
import { DataItem } from "@/interface/int";

export default function CardUI({ item }: { item: DataItem }) {
  return (
    <>
      <Card isPressable className="col-span-12 sm:col-span-4 h-[350px] bg-[#1E1E1E] ">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        {/* <p className={`${item.role === 'killer' ? 'text-primary' : 'text-[#43A047]'}  font-small text-large capitalize`}>{item.role}</p> */}
        <h4 className=" text-secondary-foreground uppercase font-bold text-medium">{item.name}</h4>

        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={ item.name === 'William "Bill" Overbeck' ? `/dbdassets/William Bill Overbeck_Portrait.webp` : `/dbdassets/${item.name}_Portrait.webp`}
        />
     
      </Card>
    </>
  );
}
