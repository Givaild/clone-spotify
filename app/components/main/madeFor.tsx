import Image from "next/image";

export function MadeFor() {
    return (
        <a className="bg-white/5 p-3 rounded-md hover:bg-white/10">

              <Image src="/album.jpeg" className="w-full" width={120} height={120} alt="capa do disco"/> 
                <strong className="font-semibold">Daily mix 1</strong>
                <span className="text-sm text-zinc-400">Flo Rida,B.o.B, Sofia Reys e mais</span>
              </a>
    )
}