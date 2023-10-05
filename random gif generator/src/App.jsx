import Random from "./components/Random";
import Tag from "./components/Tag";


export default function App() {
  return(
  <div className="w-full h-screen flex flex-col background  overflow-x-hidden items-center">

    <h1 className="  bg-white rounded-lg w-11/12 text-center mt-[40px]
     px-10 py2 text-4xl font-bold "
    >RANDOM GIF</h1>
    <div className="flex flex-col w-full items-center gap-y-10 mt-[30px] ">
      <Random/>
      <Tag/>
    </div>
    <div className="text-blackrich-100 text-xl mt-24">©Harshal_MJN</div>
  </div>
  );
}
