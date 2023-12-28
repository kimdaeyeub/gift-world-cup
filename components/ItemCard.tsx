import Image from "next/image";
import React from "react";
import { FaCertificate } from "react-icons/fa";
import Tag from "./Tag";
import Link from "next/link";

const tagList = ["10대", "20대", "컴퓨터", "노트북"];

interface IProp {
  hasRank?: boolean;
}
const ItemCard = ({ hasRank }: IProp) => {
  return (
    <Link href="/items/123">
      <div className="min-h-[300px] h-full w-full shadow-md border-2 border-slate-300 rounded-lg p-4 flex flex-col justify-center items-center gap-y-3">
        <div className="w-full h-full max-h-[350px] relative">
          <Image
            src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="item_image"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-md"
          />
          {hasRank && (
            <div className="text-yellow-400 absolute top-4 left-4 flex justify-center items-center">
              <FaCertificate size={40} />
              <span className="text-white absolute text-xl font-semibold">
                1
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center items-start w-full mt-4">
          <span className="text-2xl font-medium">최신형 노트북</span>
          <div className="flex flex-wrap w-full gap-x-3 gap-y-1.5 mt-2">
            {tagList.map((item) => (
              <Tag key={item} tag={item} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
