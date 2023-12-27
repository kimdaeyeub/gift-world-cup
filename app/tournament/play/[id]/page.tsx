"use client";

import PlayCard from "@/components/PlayCard";
import SelectCard from "@/components/SelectCard";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const idList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const PlayTournament = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  //토너먼트에서 선택된 아이템의 id
  const [selectId, setSelectId] = useState<number | null>();

  //현재 화면에 보이는 물품을 저장하는 리스트
  const [currentItem, setCurrentItem] = useState<number[]>([]);

  //현재 몇번째 매치인지를 나타내는 숫자
  const [match, setMatch] = useState(1);

  //다음 대진에 올라간 id값들을 저장하는 리스트
  const [win, setWin] = useState<number[]>([]);

  const [currentMatch, setCurrentMatch] = useState<number[]>([]);

  const onSelect = (id: number) => {
    setSelectId(id);

    setWin((prev) => [...prev, id]);
    setTimeout(() => {
      setSelectId(null);
      if (match === 8) {
        updateScreen();
      } else {
        setMatch((prev) => prev + 1);
      }
      console.log(currentMatch);
      const list = currentMatch.slice(2 * match, 2 * (match + 1));
      setCurrentItem(list);
    }, 300);
  };

  const updateScreen = () => {
    setCurrentMatch(win);
    setMatch(1);
  };
  const onClickPlayButton = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    const list = idList.slice(0, 2);
    setCurrentMatch(idList);
    setCurrentItem(list);
  }, []);

  // console.log(currentMatch, win);
  return (
    <div className="w-full h-screen px-32 py-20 bg-red-100 flex justify-center items-center">
      {isPlaying ? (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <span>
            {currentMatch.length}의 대진 중 {match}
          </span>
          <div className="w-full h-full max-h-screen grid grid-cols-2 gap-10">
            {currentItem.map((item) =>
              item === selectId ? (
                <SelectCard key={item} />
              ) : (
                <PlayCard
                  key={item}
                  onSelect={() => {
                    onSelect(item);
                  }}
                />
              )
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white w-full h-full flex flex-col justify-center items-center">
          <div className="w-72 h-72 rounded-xl bg-red-300 grid grid-cols-2 grid-rows-2 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="item_image"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1692641995795-59026e35e458?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="item_image"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1589948516895-db76617cb753?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <span className="text-2xl font-medium mt-8 mb-6">
            2023 크리스마스 선물 월드컵
          </span>
          <span className="text-center text-slate-500 w-1/2">
            Airbnb, Inc. is an American San Francisco-based company operating an
            online marketplace for short- and long-term homestays and
            experiences. The company acts as a broker and charges a commission
            from each booking. The company was founded in 2008 by Brian Chesky,
            Nathan Blecharczyk, and Joe Gebbia
          </span>
          <button
            onClick={onClickPlayButton}
            className="px-8 py-3 bg-purple-400 rounded-md flex justify-center items-center space-x-2 text-white mt-4"
          >
            <span className="text-nowrap font-semibold">플레이</span>
            <svg
              width={20}
              data-slot="icon"
              fill="none"
              strokeWidth="2.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default PlayTournament;
