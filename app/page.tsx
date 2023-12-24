import ItemCard from "@/components/ItemCard";

export default function Home() {
  return (
    <>
      <div className="w-full h-80 bg-purple-400 relative">
        <input className="absolute top-full bottom-10 left-0 right-0 m-auto w-1/2 h-12 rounded-full outline-none border px-16 shadow-lg" />
        <svg
          className="w-8 absolute top-full left-14 right-1/2 m-auto bottom-10 text-gray-300"
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
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          ></path>
        </svg>
      </div>
      <section className="min-h-96 w-full py-16 px-32 grid grid-cols-4 gap-5">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </section>
    </>
  );
}
