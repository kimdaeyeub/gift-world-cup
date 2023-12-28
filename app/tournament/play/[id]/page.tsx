"use client";

import PlayCard from "@/components/PlayCard";
import SelectCard from "@/components/SelectCard";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

//아이템을 클릭했을 때 생각해야 하는 것들
// 1. 몇번째 라운드인지(예를들어 16강이면 16강인지 8강인지 준결승인지 결승인지)
// 2. 무슨 아이템을 선택했는지
// 3. 다음에 화면에 나와야 하는 아이템이 무엇인지
// 4. 다음 라운드에 진출한 아이템이 무엇인지
// 5. 지금하는 대진이 해당 라운드에서 몇번째 매치인지
//
// # 필요한 상태가 뭐있는지
// 1. 해당 매치에서 선택된 아이템
// 2. 현재 진행중인 매치가 무엇인지
// 3. 다음 라운드에 진출한 아이템들
// 4. 지금이 몇 라운드인지
// 6.이번 라운드에 진출한 아이템 목록(시작 아이템들 포함)
// 7. 이번 매치의 아이템들

const idList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const PlayTournament = () => {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);

  const [result, setResult] = useState(0);

  // 1. 해당 매치에서 선택된 아이템
  const [selectId, setSelectId] = useState<number | null>();

  // 2. 현재 진행중인 매치가 무엇인지
  const [match, setMatch] = useState(1);

  // 3. 다음 라운드에 진출한 아이템들
  const [nextRoundItem, setNextRoundItem] = useState<number[]>([]);

  // 4. 지금이 몇 라운드인지
  const [round, setRound] = useState(1);

  // 6.이번 라운드에 진출한 아이템 목록(시작 아이템들 포함)
  const [currenRoundItem, setCurrentRoundItem] = useState<number[]>([]);
  // 7. 이번 매치의 아이템들
  const [currentMatchItem, setCurrentMatchItem] = useState<number[]>([]);

  const onClickPlayButton = () => {
    setIsPlaying(true);
  };

  // 1. 몇번째 라운드인지(예를들어 16강이면 16강인지 8강인지 준결승인지 결승인지) O
  // 2. 무슨 아이템을 선택했는지
  // 3. 다음에 화면에 나와야 하는 아이템이 무엇인지
  // 4. 다음 라운드에 진출한 아이템이 무엇인지 O
  // 5. 지금하는 대진이 해당 라운드에서 몇번째 매치인지 O
  const onSelect = (id: number) => {
    setSelectId(id);
    setNextRoundItem((prev) => [...prev, id]);
    setMatch((prev) => prev + 1);

    setTimeout(() => {
      setSelectId(null);
      console.log(`match is ${match}`);
    }, 200);
  };

  useEffect(() => {
    setCurrentMatchItem([
      currenRoundItem[2 * (match - 1)],
      currenRoundItem[2 * (match - 1) + 1],
    ]);
    if (match === currenRoundItem.length / 2 + 1 && match !== 1) {
      console.log("hello");
      setMatch(1);
      setRound((prev) => prev / 2);
      setCurrentRoundItem(nextRoundItem);
    }
    if (nextRoundItem.length === 1 && round === 1) {
      //우승
      console.log("우승");
      router.push("/tournament/play/123/result");
      setResult(nextRoundItem[0]);
      setSelectId(null);
      setIsPlaying(false);
      setMatch(0);
      setNextRoundItem([]);
      setRound(0);
      setCurrentMatchItem([]);
      setCurrentRoundItem([]);
    }
  }, [match]);

  //화면이 시작될때 초기화 시키는 작업
  useEffect(() => {
    setCurrentRoundItem(idList);
    setCurrentMatchItem([idList[0], idList[1]]);
    setRound(idList.length);
  }, []);

  //다음 라운드가 시작 될때 그다음 라운드에 진출한 아이템을 다시 저장하기 위해 비워두는 작업
  useEffect(() => {
    if (currenRoundItem.length !== idList.length) {
      setNextRoundItem([]);
    }
  }, [currenRoundItem]);

  return (
    <div className="w-full h-screen px-32 py-20 bg-red-100 flex justify-center items-center">
      {isPlaying ? (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <span>
            {currenRoundItem.length / 2}의 대진 중 {match}번째 매치입니다.
          </span>
          <div className="w-full h-full max-h-screen grid grid-cols-2 gap-10">
            {currentMatchItem.map((item) =>
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
