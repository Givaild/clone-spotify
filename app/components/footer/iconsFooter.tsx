import { Database, Mic2, PlaySquare, Speaker, TabletSmartphone, Volume1 } from "lucide-react";

export function IconsFooter() {
    return (
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
    )
}