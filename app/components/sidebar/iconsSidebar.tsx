import { CassetteTape, Headphones, Search } from "lucide-react";

export function IconsSidebar() {
    return (
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
    )
}