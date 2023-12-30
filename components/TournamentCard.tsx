import { IGift, IUser } from "@/app/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProp {
  _id: string;
  creator: IUser;
  title: string;
  description: string;
  gifts: IGift[];
  round: number;
}

const TournamentCard = ({
  gifts,
  title,
  description,
  creator,
  round,
  _id,
}: IProp) => {
  return (
    <Link href={`/tournament/play/${_id}`}>
      <div className="w-full h-full border border-slate-400 shadow-lg rounded-lg flex flex-col justify-center items-start p-3">
        <div className="w-full h-[300px] grid grid-cols-2 grid-rows-2 rounded-md overflow-hidden">
          <Image
            src={gifts[0].image}
            alt="item_image"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
          <Image
            src={gifts[1].image}
            alt="item_image"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
          <Image
            src={gifts[2].image}
            alt="item_image"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
          <Image
            src={gifts[3].image}
            alt="item_image"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-lg mt-3">{title}</h1>
        <span className="w-full text-slate-500 text-sm mt-4">
          {creator.username}
        </span>
        <div className="w-full flex justify-start items-center space-x-2">
          <span className="text-slate-500 text-sm">2023-12-24</span>
          <span className="text-slate-500 text-sm">114명</span>
        </div>
      </div>
    </Link>
  );
};

export default TournamentCard;
