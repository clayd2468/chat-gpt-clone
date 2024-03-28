type SearchResultsItemProps = {
  id: number;
  itemSelected: number;
  text: string;
  setItemSelected: (id: number) => void;
};
export const SearchResultsItem = ({
  id,
  itemSelected,
  text,
  setItemSelected,
}: SearchResultsItemProps) => {
  return (
    <div
      className={`"w-full h-9 px-3 rounded-lg flex items-center 
      ${id === itemSelected ? "bg-gray-400 rounded-lg" : ""}"`}
      onClick={() => setItemSelected(id)}
    >
      <span className="overflow-hidden whitespace-nowrap text-ellipsis block">
        {text}
      </span>
    </div>
  );
};
