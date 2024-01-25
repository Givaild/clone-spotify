import { Headphones, Search, CassetteTape, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, PlaySquare, Mic2, Database, Speaker, Volume1, TabletSmartphone } from "lucide-react";
import Image from "next/image";
import { Circles } from "./components/sidebar/circles";
import { IconsSidebar } from "./components/sidebar/iconsSidebar";
import { Playlist } from "./components/sidebar/playlist";
import { TopButtons } from "./components/main/topButtons";
import { Recent } from "./components/main/recent";
import { MadeFor } from "./components/main/madeFor";

export default function Home() {
  return (
    <div className="h-screen flex flex-col p-6">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          
          <Circles/>
          <IconsSidebar/>
          <Playlist/>
          
        </aside>
        <main className="flex-1 p-6">
          <TopButtons/>

          <h1 className="font-semibold text-3xl mt-5">Bom Dia</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
          
            <Recent/>
            <Recent/>
            <Recent/>
            <Recent/>
            <Recent/>
            <Recent/>        
          
            </div>  
            <h2 className="font-semibold text-2xl mt-5">Feito para Gil Andrade</h2>

            <div className="grid grid-cols-5 gap-4 mt-4">

              <MadeFor/>
              <MadeFor/>
              <MadeFor/>
              <MadeFor/>
              <MadeFor/>

            </div>

        </main>
      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">

        <div className=" flex items-center gap-3">
        <Image src="/album.jpeg" width={56} height={56} alt="capa do disco"/>

        <div className="flex flex-col">

          <strong className="font-normal">Don't wanna Sleep</strong>
          <span className="text-xs text-zinc-400">Swif7</span>

          </div>

        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-6">

            <Shuffle size={20} className="text-zinc-200"/>
            <SkipBack size={20} className="text-zinc-200"/>

            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <Play  />
            </button>

            <SkipForward size={20} className="text-zinc-200"/>
            <Repeat size={20} className="text-zinc-200"/>

          </div>

          <div className="flex items-center gap-2">
            <span className="text-zinc-400 text-xs">0:21</span>
              <div className="h-1 rounded-full w-80 bg-zinc-600">
                <div className="h-1 rounded-full bg-zinc-200 w-12"></div>
              </div>
            <span className="text-zinc-400 text-xs">3:11</span>
          </div>
        
        </div>
          
        <div className="flex items-center gap-3">
          <PlaySquare size={20}/>
          <Mic2 size={20}/>
          <Database size={20}/>
          <Speaker size={20}/>
          <div className="flex items-center gap-2">

          <Volume1 size={20}/>
            <div className="h-1 rounded-full w-20 bg-zinc-600">
                <div className="h-1 rounded-full bg-zinc-200 w-8"></div>
            </div>
          </div>
          <TabletSmartphone size={20}/>  
        </div>

      </footer>

    </div>
  );
}
