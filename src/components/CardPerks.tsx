import { PerkItem } from "@/interface/int";
import {Card, CardHeader, CardBody} from "@nextui-org/react";

export default function CardPerk({item} : {item:PerkItem}) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-sm uppercase font-bold text-[#E0E0E0]">{item.name}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        {/* <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        /> */}
      </CardBody>
    </Card>
  );
}
