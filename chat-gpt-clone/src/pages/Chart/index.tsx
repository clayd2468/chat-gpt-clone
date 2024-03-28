import { useEffect, useState } from "react";
import { Content, Message } from "./Content";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

const userInfo = {
  name: "Jacob Jones",
  email: "jacobjones@gmail.com",
  avarta:
    "https://cdn.vox-cdn.com/thumbor/2E78dg_Cpbdh3nv6z0KKhOhYs6c=/0x0:1100x580/1200x800/filters:focal(520x151:696x327)/cdn.vox-cdn.com/uploads/chorus_image/image/71921482/bkq6gtrpcnw43vsm5zm62q3z.0.png",
};

const searchReults = [
  { id: 1, type: "divider", text: "Today" },
  { id: 2, type: "msg", text: "Praesent eu efficitur turpis," },
  { id: 3, type: "msg", text: "Sed convallis in orcia a vulputate," },
  { id: 4, type: "msg", text: "Three message," },
  { id: 5, type: "msg", text: "Four message," },
  { id: 6, type: "divider", text: "Yesterday" },
  { id: 7, type: "msg", text: "Praesent eu efficitur turpis," },
  { id: 8, type: "msg", text: "Praesent eu efficitur turpis," },
  { id: 9, type: "msg", text: "Praesent eu efficitur turpis," },
  { id: 10, type: "msg", text: "Praesent eu efficitur turpis," },
];
export const defaulAvatar =
  "https://media.licdn.com/dms/image/C4E0BAQHfZ-V1VzsGLA/company-logo_200_200/0/1631333107936?e=2147483647&v=beta&t=Da5TnNuEPbBneLfm6SvmCTkmFwK5ti8smVaW185QV6o";

const chatMessage = [
  {
    id: 1,
    text: "Hi, what the weather like to day?",
    author: "Jacob Jones",
    avatar:
      "https://cdn.vox-cdn.com/thumbor/2E78dg_Cpbdh3nv6z0KKhOhYs6c=/0x0:1100x580/1200x800/filters:focal(520x151:696x327)/cdn.vox-cdn.com/uploads/chorus_image/image/71921482/bkq6gtrpcnw43vsm5zm62q3z.0.png",
    incoming: true,
    outcoming: false,
  },
  {
    id: 2,
    text: "It rain aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    author: "Hospitelligence.ai",
    avatar: defaulAvatar,
    incoming: false,
    outcoming: true,
  },
];

export const Chart = () => {
  const [chat, setChat] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [thinking, setThinking] = useState(false);

  //fetch api first time
  useEffect(() => {
    setChat(chatMessage);
  }, []);

  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setChat((pre) => {
        return [
          ...pre,
          {
            id: pre.length + 1,
            text: text,
            author: "Jacob Jones",
            avatar:
              "https://cdn.vox-cdn.com/thumbor/2E78dg_Cpbdh3nv6z0KKhOhYs6c=/0x0:1100x580/1200x800/filters:focal(520x151:696x327)/cdn.vox-cdn.com/uploads/chorus_image/image/71921482/bkq6gtrpcnw43vsm5zm62q3z.0.png",
            incoming: true,
            outcoming: false,
          },
        ];
      });
      setText("");
      fakeApi();
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  //fake
  function timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const fakeApi = async () => {
    await timeout(500);
    setThinking(true);
    await timeout(2000);
    setChat((pre) => {
      return [
        ...pre,
        {
          id: pre.length + 1,
          text: "new anwser",
          author: "Hospitelligence.ai",
          avatar:
            "https://media.licdn.com/dms/image/C4E0BAQHfZ-V1VzsGLA/company-logo_200_200/0/1631333107936?e=2147483647&v=beta&t=Da5TnNuEPbBneLfm6SvmCTkmFwK5ti8smVaW185QV6o",
          incoming: false,
          outcoming: true,
        },
      ];
    });
    setThinking(false);
  };

  return (
    <div className="w-3/5 h-full m-auto bg-zinc-800 rounded-lg flex">
      <Sidebar searchResults={searchReults} />
      <div className="flex flex-col flex-1">
        <Header
          name={userInfo.name}
          email={userInfo.email}
          avatar={userInfo.avarta}
        />
        <Content
          chatMessage={chat}
          text={text}
          thinking={thinking}
          handleOnChange={handleOnChange}
          handleKeyPress={handleOnEnter}
        />
      </div>
    </div>
  );
};
