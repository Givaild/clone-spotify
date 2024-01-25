import { Circles } from "./components/sidebar/circles";
import { IconsSidebar } from "./components/sidebar/iconsSidebar";
import { Playlist } from "./components/sidebar/playlist";
import { TopButtons } from "./components/main/topButtons";
import { Recent } from "./components/main/recent";
import { MadeFor } from "./components/main/madeFor";
import { ListenNow } from "./components/footer/listenNow";
import { Player } from "./components/footer/player";
import { IconsFooter } from "./components/footer/iconsFooter";

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

        <ListenNow/>

        <Player/>
          
        <IconsFooter/>

      </footer>

    </div>
  );
}
