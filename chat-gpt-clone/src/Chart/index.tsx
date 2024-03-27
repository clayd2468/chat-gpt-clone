import { Content } from "./Content";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

const userInfo = {
    name: "Jacob Jones",
    email: "jacobjones@gmail.com",
    avarta: "https://cdn.vox-cdn.com/thumbor/2E78dg_Cpbdh3nv6z0KKhOhYs6c=/0x0:1100x580/1200x800/filters:focal(520x151:696x327)/cdn.vox-cdn.com/uploads/chorus_image/image/71921482/bkq6gtrpcnw43vsm5zm62q3z.0.png"
}

export const Chart = () => {
  return (
    <div className="w-3/5 h-full m-auto bg-zinc-800 rounded-lg flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header name={userInfo.name} email={userInfo.email} avatar={userInfo.avarta} />
        <Content />
      </div>
    </div>
  );
};
