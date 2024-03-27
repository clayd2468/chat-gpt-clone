import SearchIcon from "@/assets/search.svg";

export const Sidebar = () => {
  return (
    <div className="w-[240px] h-full flex flex-col border-r border-slate-700 left-0">
      <div className="h-[60px] border-b border-color relative">
        <img className="w-6 right-2 top-5 absolute" src={SearchIcon} alt="" />
        <input className="w-full h-full bg-zinc-800 p-6 focus:outline-none" />
      </div>
      <div className="flex-1"></div>
      <div className="h-[60px] flex justify-center items-center border-t border-color">
        <div className="text-gray-300 text-sm">2024 Hospitelligence.ai</div>
      </div>
    </div>
  );
};
