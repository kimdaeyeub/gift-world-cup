import ItemTextBox from "@/components/ItemTextBox";
import Image from "next/image";
import React from "react";

const ItemDetail = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-80 bg-purple-400 relative mb-44">
        <Image
          src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="item_image"
          width={500}
          height={500}
          className="absolute top-full bottom-10 left-40 m-auto w-96 h-96 rounded-full"
        />
      </div>
      <section className="h-full w-full flex flex-col justify-start items-start px-44 pt-16 pb-20 space-y-14">
        <ItemTextBox title="선물명" detail="최신형 맥북 M3 Pro" />
        <ItemTextBox
          title="상세정보"
          detail="Airbnb, Inc. is an American San Francisco-based company operating an online marketplace for short- and long-term homestays and experiences. The company acts as a broker and charges a commission from each booking. The company was founded in 2008 by Brian Chesky, Nathan Blecharczyk, and Joe Gebbia. Airbnb, Inc. is an American San Francisco-based company operating an online marketplace for short- and long-term homestays and experiences. The company acts as a broker and charges a commission from each booking. The company was founded in 2008 by Brian Chesky, Nathan Blecharczyk, and Joe Gebbia. Airbnb, Inc. is an American San Francisco-based company operating an online marketplace for short- and long-term homestays and experiences. The company acts as a broker and charges a commission from each booking. The company was founded in 2008 by Brian Chesky, Nathan Blecharczyk, and Joe Gebbia."
        />
      </section>
    </div>
  );
};

export default ItemDetail;
