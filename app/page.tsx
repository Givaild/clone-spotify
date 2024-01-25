import { Headphones, Search, CassetteTape, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col p-6">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"/>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
            <div className="w-3 h-3 bg-green-500 rounded-full"/>
          </div>
          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Headphones />
              Início
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search />
              Buscar
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <CassetteTape />
              Sua Biblioteca
            </a>
          </nav>
          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-500 hover:text-zinc-100">Self control</a>
            <a href="" className="text-sm text-zinc-500 hover:text-zinc-100">Piseiro</a>
            <a href="" className="text-sm text-zinc-500 hover:text-zinc-100">Musicas Curtidas</a>
            <a href="" className="text-sm text-zinc-500 hover:text-zinc-100">Funk </a>
            <a href="" className="text-sm text-zinc-500 hover:text-zinc-100">Black das antigas</a>
            
          </nav>
          
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">

            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft/>
            </button>

            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight/>
            </button>

          </div>

          <h1 className="font-semibold text-3xl mt-5">Bom Dia</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a className="bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors">
              
              <Image src="/album.jpeg" width={104} height={104} alt="capa do disco"/>
              <strong>BE Swif7</strong>

              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />

              </button>
              </a>
            <a className="bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors">
              
              <Image src="/album.jpeg" width={104} height={104} alt="capa do disco"/>
              <strong>BE Swif7</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />

              </button>

              </a>
            <a className="bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors">
              
              <Image src="/album.jpeg" width={104} height={104} alt="capa do disco"/>
              <strong>BE Swif7</strong>
              
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />

              </button>

              </a>
            <a className="bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors">
              
              <Image src="/album.jpeg" width={104} height={104} alt="capa do disco"/>
              <strong>BE Swif7</strong>
              
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />

              </button>

              </a>
            <a className="bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors">
              
              <Image src="/album.jpeg" width={104} height={104} alt="capa do disco"/>
              <strong>BE Swif7</strong>

              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />

              </button>
              </a>
            <a className="bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors">
              
              <Image src="/album.jpeg" width={104} height={104} alt="capa do disco"/>
              <strong>BE Swif7</strong>
              
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />

              </button>
              </a>
            
            </div>  
            <h2 className="font-semibold text-2xl mt-5">Feito para Gil Andrade</h2>

            <div className="grid grid-cols-5 gap-4 mt-4">

              <a className="bg-white/5 p-3 rounded-md hover:bg-white/10">

              <Image src="/album.jpeg" className="w-full" width={120} height={120} alt="capa do disco"/> 
                <strong className="font-semibold">Daily mix 1</strong>
                <span className="text-sm text-zinc-400">Flo Rida,B.o.B, Sofia Reys e mais</span>
              </a>

              <a className="bg-white/5 p-3 rounded-md hover:bg-white/10">

              <Image src="/album.jpeg" className="w-full" width={120} height={120} alt="capa do disco"/> 
                <strong className="font-semibold">Daily mix 1</strong>
                <span className="text-sm text-zinc-400">Flo Rida,B.o.B, Sofia Reys e mais</span>
              </a>

              <a className="bg-white/5 p-3 rounded-md hover:bg-white/10">

              <Image src="/album.jpeg" className="w-full" width={120} height={120} alt="capa do disco"/> 
                <strong className="font-semibold">Daily mix 1</strong>
                <span className="text-sm text-zinc-400">Flo Rida,B.o.B, Sofia Reys e mais</span>
              </a>

              <a className="bg-white/5 p-3 rounded-md hover:bg-white/10">

              <Image src="/album.jpeg" className="w-full" width={120} height={120} alt="capa do disco"/> 
                <strong className="font-semibold">Daily mix 1</strong>
                <span className="text-sm text-zinc-400">Flo Rida,B.o.B, Sofia Reys e mais</span>
              </a>

              <a className="bg-white/5 p-3 rounded-md hover:bg-white/10">

              <Image src="/album.jpeg" className="w-full" width={120} height={120} alt="capa do disco"/> 
                <strong className="font-semibold">Daily mix 1</strong>
                <span className="text-sm text-zinc-400">Flo Rida,B.o.B, Sofia Reys e mais</span>
              </a>
            </div>

        </main>
      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">

        <div className=" flex items-center gap-3">
        <Image src="/album.jpeg" width={56} height={56} alt="capa do disco"/>

        <div className="flex flex-col">

          <strong className="font-normal">Dont'n wanna Sleep</strong>
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

          <div></div>
        
        </div>

        <div>

        </div>

      </footer>

    </div>
  );
}
