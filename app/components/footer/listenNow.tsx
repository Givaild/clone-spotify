import Image from "next/image";

export function ListenNow() {
    return (
        <div className=" flex items-center gap-3">
        <Image src="/album.jpeg" width={56} height={56} alt="capa do disco"/>

          <div className="flex flex-col">

          <strong className="font-normal">Don't wanna Sleep</strong>
          <span className="text-xs text-zinc-400">Swif7</span>

          </div>

        </div>
    )
}