import SearchIcon from "@/assets/search.svg";
import { Divider } from "../../components/Divider";
import { SearchResultsItem } from "../../components/SearchResultsItem";
import { useState } from "react";

type SidebarProps = {
  searchResults: SidebarSearchType[];
};

type SidebarSearchType = {
  id: number;
  type: string;
  text: string;
};

export const Sidebar = ({ searchResults }: SidebarProps) => {
  const [itemSelected, setItemSelected] = useState(2);

  const handleSelected = (id: number) => {
    setItemSelected(id);
  };

  return (
    <div className="w-1/4 h-full flex flex-col border-r border-slate-700 left-0">
      <div className="h-[60px] border-b border-color relative">
        <img className="w-6 right-2 top-5 absolute" src={SearchIcon} alt="" />
        <input
          className="w-full h-full bg-zinc-800 p-6 focus:outline-none rounded-lg"
          placeholder="Hospitelligence.ai"
        />
      </div>
      <div className="flex-1 px-3">
        <button className="w-full h-10 mt-3 bg-blue-500 rounded-full font-bold text-sm">
          New Chat
        </button>
        {searchResults?.map((result) => {
          if (result.type === "divider") {
            return <Divider key={result.id} text={result.text} />;
          } else {
            return (
              <SearchResultsItem
                key={result.id}
                text={result.text}
                id={result.id}
                itemSelected={itemSelected}
                setItemSelected={handleSelected}
              />
            );
          }
        })}
      </div>
      <div className="h-[60px] flex justify-center items-center border-t border-color">
        <div className="text-gray-300 text-center text-sm">@2024 Hospitelligence.ai</div>
      </div>
    </div>
  );
};
