import { Play } from "lucide-react";
import Image from "next/image";

export function Recent() {
    return (
        <a className="bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors">
              
              <Image src="/album.jpeg" width={104} height={104} alt="capa do disco"/>
              <strong>BE Swif7</strong>

              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />

              </button>
              </a>
    )
}