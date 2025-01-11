import React from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";
import { DataItem } from "@/interface/int";

export default function CardUI({ item }: { item: DataItem }) {
  return (
    <div className="">
      <Card className="col-span-12 sm:col-span-4 h-[380px] bg-[#1E1E1E] ">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-secondary-foreground uppercase font-bold">{item.name}</p>
          <h4 className="text-white font-medium text-large capitalize">{item.role}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={ `/dbdassets/${item.name}_Portrait.webp`}
        />
      </Card>
    </div>
  );
}
