type HeaderProps = {
  name: string;
  email: string;
  avatar: string;
};

export const Header = ({ name, email, avatar }: HeaderProps) => {
  return (
    <div className="w-full h-[60px] pr-10 border-b border-color flex justify-end items-center">
      <div className="flex items-center">
        <img className="avatar w-10 h-10 mr-3" src={avatar} alt="" />
        <div className="flex flex-col">
          <div className="text-sm">{name}</div>
          <div className="text-sm text-gray-400">{email}</div>
        </div>
      </div>
    </div>
  );
};
