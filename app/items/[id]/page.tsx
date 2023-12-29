"use client";

import ItemTextBox from "@/components/ItemTextBox";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface IGift {
  title: string;
  description: string;
  tags: string[];
  image: string;
  count: number;
  creator: string;
  _id: string;
}

const ItemDetail = () => {
  const pathName = usePathname();
  const [gift, setGift] = useState<IGift | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getGift = async () => {
      const response = await fetch(`/api/gifts/${pathName.slice(7)}`);

      if (response.ok) {
        const json = await response.json();
        setGift(json);
        setIsLoading(false);
      }
    };

    getGift();
  }, []);

  return (
    <>
      {!isLoading && (
        <div className="w-full h-full">
          <div className="w-full h-80 bg-purple-400 relative mb-44">
            <Image
              src={gift!.image}
              alt="item_image"
              width={500}
              height={500}
              className="absolute top-full bottom-10 left-40 m-auto w-96 h-96 rounded-full object-cover"
            />
          </div>
          <section className="h-full w-full flex flex-col justify-start items-start px-44 pt-16 pb-20 space-y-14">
            <ItemTextBox title="선물명" detail={gift!.title} />
            <ItemTextBox title="상세정보" detail={gift!.description} />
          </section>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
