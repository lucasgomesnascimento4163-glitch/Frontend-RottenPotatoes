import Link from "next/link";
import { Button } from "./button";
import { Separator } from "radix-ui";

export function TopbarMenu() {
    return (
        <header className="flex items-center gap-9 h-20">
            <Link href="/"><h1 className="text-5xl font-extrabold whitespace-nowrap">🥔 Rotten<span className="text-amber-700">Potatoes</span></h1></Link>
            <nav className="flex justify-between items-center w-full">
             <div className="flex gap-6 text-sm">
                <Link href="/best">Melhores</Link>
                <Link href="/support">Suporte</Link>
             </div>
             <div className="flex gap-7.5">
                <Link href="/login"><Button variant="outline">Login</Button></Link>
                <Link href="/signup"><Button>Cadastre-se</Button></Link>
             </div>
             </nav>
        </header>
    )
};