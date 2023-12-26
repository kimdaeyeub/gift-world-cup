"use client";
import React, { useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const items = [
  {
    id: 1,
    title: "최신형 맥북",
  },
  {
    id: 2,
    title: "마우스",
  },
  {
    id: 3,
    title: "키보드",
  },
  { id: 4, title: "모니터" },
];

const AddTournament = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [openDropDownBtn, setOpenDropDownBtn] = useState(false);
  const [selectItem, setSelectItem] = useState<number[]>([]);
  const [option, setOption] = useState("대진 결정");
  const [num, setNum] = useState<number>(8);
  const onClickDropDown = () => {
    setOpenDropDownBtn(!openDropDownBtn);
  };
  const onClick = (num: number) => {
    setNum(num);
    setOption(`${num}강 대진`);
    setOpenDropDownBtn(false);
  };
  const setItems = (id: number) => {
    if (selectItem.includes(id)) {
      deleteItems(id);
    } else {
      setSelectItem([...selectItem, id]);
    }
  };
  const deleteItems = (id: number) => {
    const itemNumber = selectItem.indexOf(id);
    const beforeArr = selectItem.slice(0, itemNumber);
    const afterArr = selectItem.slice(itemNumber + 1, selectItem.length);
    setSelectItem([...beforeArr, ...afterArr]);
  };

  const onClickAddWorldCup = () => {};

  useEffect(() => {
    console.log(session?.user);
    if (!session?.user) {
      router.push("/");
    }
  }, []);
  return (
    <div className="w-full h-full flex flex-col justify-start items-end px-36 py-8">
      <div className="w-full mb-8 flex justify-between items-center space-x-10">
        <div className="w-full flex justify-center items-center space-x-4">
          <span className="text-nowrap text-xl font-medium">제목:</span>
          <input
            placeholder="월드컵 이름..."
            className="bg-gray-100 px-4 py-2 rounded-md w-full outline-none"
          />
        </div>
        <div className="w-64 relative">
          <button
            onClick={onClickDropDown}
            className="w-full px-6 py-2 flex justify-between items-center space-x-8 border rounded-md"
          >
            <span>{option}</span>
            <svg
              width={20}
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              ></path>
            </svg>
          </button>
          {openDropDownBtn && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full bg-slate-200 rounded-md flex flex-col justify-center items-center absolute top-full left-0 right-0 mt-4"
            >
              <span onClick={() => onClick(8)} className="w-full py-4 px-6">
                8강 대진
              </span>
              <span onClick={() => onClick(16)} className="w-full py-4 px-6">
                16강 대진
              </span>
              <span onClick={() => onClick(32)} className="w-full py-4 px-6">
                32강 대진
              </span>
            </motion.div>
          )}
        </div>
      </div>
      <div className="flex justify-center items-start w-full mb-4 space-x-4">
        <span className="text-nowrap text-xl font-medium">설명</span>
        <textarea
          className="w-full bg-gray-100 rounded-lg resize-none outline-none px-4 py-2"
          rows={5}
        />
      </div>
      <div className="w-full h-full grid grid-cols-2 gap-8">
        <div className="w-full min-h-[700px] rounded-md flex flex-col p-3 space-y-3 border border-slate-300">
          <div className="px-4 py-3 border-b-2 border-slate-400 mb-3">
            <span className="text-xl font-medium">선물 목록</span>
          </div>
          {items.map((item) => (
            <motion.div
              key={item.id}
              // layoutId={`select tounament item ${item.id} ${item.title}`}
              onClick={() => setItems(item.id)}
              className={
                ` flex justify-between items-center px-4 py-3 rounded-lg border-2 border-slate-300 cursor-pointer` +
                `${
                  !selectItem.includes(item.id)
                    ? ""
                    : " bg-green-400 text-white transition-colors"
                }`
              }
            >
              <span>{item.title}</span>
            </motion.div>
          ))}
        </div>
        <div className="w-full min-h-[700px] rounded-md flex flex-col p-3 space-y-3 border border-slate-300">
          <div className="px-4 py-3 border-b-2 border-slate-400 mb-3">
            <span className="text-xl font-medium">선택한 선물</span>
          </div>
          {items.map((item) => (
            <motion.div
              key={item.id}
              // layoutId={`select tounament item ${item.id} ${item.title}`}
              onClick={() => deleteItems(item.id)}
              className={
                `bg-white flex justify-between items-center px-4 py-3 rounded-lg border-2 border-slate-300 cursor-pointer` +
                `${selectItem.includes(item.id) ? "" : " hidden"}`
              }
            >
              <span>{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <button
        onClick={onClickAddWorldCup}
        className="px-4 py-2 bg-black text-white mt-3 rounded-lg"
      >
        등록하기
      </button>
    </div>
  );
};

export default AddTournament;
