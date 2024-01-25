import { Play, Repeat, Shuffle, SkipBack, SkipForward } from "lucide-react";

export function Player() {
    return (
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
    )
}