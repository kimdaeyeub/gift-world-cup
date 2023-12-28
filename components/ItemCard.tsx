import Image from "next/image";
import React from "react";
import { FaCertificate } from "react-icons/fa";
import Tag from "./Tag";
import Link from "next/link";

const tagList = ["10대", "20대", "컴퓨터", "노트북"];

interface IProp {
  hasRank?: boolean;
  title: string;
  description: string;
  tags: string[];
  image: string;
  count: number;
  creator: string;
  _id: string;
}
const ItemCard = ({
  hasRank,
  title,
  description,
  tags,
  image,
  count,
  creator,
  _id,
}: IProp) => {
  return (
    <Link href={`/items/${_id}`}>
      <div className="min-h-[300px] h-full w-full shadow-md border-2 border-slate-300 rounded-lg p-4 flex flex-col justify-center items-center gap-y-3">
        <div className="w-full h-full max-h-[350px] relative">
          <Image
            src={image}
            alt="item_image"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-md"
          />
          {hasRank && (
            <div className="text-yellow-400 absolute top-4 left-4 flex justify-center items-center">
              <FaCertificate size={40} />
              <span className="text-white absolute text-xl font-semibold">
                {count}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center items-start w-full mt-4">
          <span className="text-2xl font-medium">{title}</span>
          <div className="flex flex-wrap w-full gap-x-3 gap-y-1.5 mt-2">
            {tags.map((item) => (
              <Tag key={item} tag={item} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
