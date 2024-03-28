import { useEffect, useRef } from "react";
import { defaulAvatar } from ".";

type ContentProps = {
  text: string;
  chatMessage: Message[];
  thinking: boolean;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export type Message = {
  id: number;
  text: string;
  author: string;
  avatar: string;
  incoming: boolean;
  outcoming: boolean;
};

export const Content = ({
  text,
  chatMessage,
  thinking,
  handleOnChange,
  handleKeyPress,
}: ContentProps) => {
  const bottom = useRef<HTMLDivElement>(null);

  const scrollLastMessage = () => {
    setTimeout(() => {
      if (bottom?.current) {
        bottom.current.scroll({
          top: bottom.current.scrollHeight,
          behavior: "smooth",
        });
      }
    });
  };

  useEffect(() => {
    scrollLastMessage();
  }, [thinking, chatMessage]);

  const getClassOutComing = (isOutComing: boolean) => {
    return isOutComing ? "bg-gray-900 border border-color rounded-lg" : "";
  };

  return (
    <div className="w-full h-[calc(100%-60px)] flex flex-col">
      <div ref={bottom} className="flex-1 overflow-auto bg-black py-10">
        {chatMessage?.map((message) => (
          <div
            key={message.id}
            className={`mb-4 px-5 py-2 mx-auto w-2/3 min-w-40
          ${getClassOutComing(message.outcoming)}`}
          >
            <div className="flex items-center mb-3">
              <img
                className="avatar w-8 h-8 mr-3"
                src={message.avatar}
                alt=""
              />
              <div className="text-sm">{message.author}</div>
            </div>

            <div>
              <span className="text-gray-400 text-sm break-all">
                {message.text}
              </span>
            </div>
          </div>
        ))}

        {thinking && (
          <div className="mb-4 px-5 py-2 mx-auto w-2/3 min-w-40">
            <div className="flex items-center mb-3">
              <img className="avatar w-8 h-8 mr-3" src={defaulAvatar} alt="" />
              <div className="flex flex-col">
                <div className="thinking ml-4"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="h-[60px] border-y border-color rounded-br-lg">
        <input
          value={text}
          className="w-full h-full bg-zinc-800 p-6 focus:outline-none rounded-b-lg"
          placeholder="Enter your chat here..."
          onKeyDown={handleKeyPress}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};
