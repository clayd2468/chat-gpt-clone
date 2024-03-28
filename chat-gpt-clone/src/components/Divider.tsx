type DividerProps = {
  text: string;
};
export const Divider = ({ text }: DividerProps) => {
  return (
    <div className="w-full my-3 border-t border-color">
      <div className="text-sm text-gray-400 mt-2">{text}</div>
    </div>
  );
};
