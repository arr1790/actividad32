import Link from "next/link";
import { menu, slug } from "@/lib/utils.js";
import { ArrowLeft,ArrowRight } from "lucide-react";

function Nav({pos}) {
    return (
        <div className="p-4 text-right">
        {pos > 0 &&
        <Link href={slug(menu[pos-1])} className="p-2 bg-blue-200 text-2xl text-blue-600 mr-4 rounded-l-full"><ArrowLeft className="inline" />Anterior</Link>
        }
        {pos < menu.length-24 &&
       <Link href={slug(menu[pos+1])}  className="p-2 bg-blue-200 text-2xl text-blue-600 mr-4 rounded-r-full">
        Siguiente<ArrowRight className="inline"/></Link>
        }
        </div>
    );
}

export default Nav;