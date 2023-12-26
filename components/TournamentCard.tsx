import Image from "next/image";
import Link from "next/link";
import React from "react";

const TournamentCard = () => {
  return (
    <Link href="/tournament/play/123/">
      <div className="w-full h-full border border-slate-400 shadow-lg rounded-lg flex flex-col justify-center items-start p-3">
        <div className="w-full h-full grid grid-cols-2 grid-rows-2 rounded-md overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="item_image"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="item_image"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="item_image"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="item_image"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-lg mt-3">2023 크리스마스 선물 월드컵</h1>
        <span className="w-full text-slate-500 text-sm mt-4">김대엽</span>
        <div className="w-full flex justify-start items-center space-x-2">
          <span className="text-slate-500 text-sm">2023-12-24</span>
          <span className="text-slate-500 text-sm">114명</span>
        </div>
      </div>
    </Link>
  );
};

export default TournamentCard;
