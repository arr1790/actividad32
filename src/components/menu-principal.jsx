'use client'  // es para tener un componente del lado cliente

import Link from "next/link"
import { menu, slug } from "@/lib/utils.js"
import { Menu, X } from "lucide-react"
import { useState } from "react"





const classLink = " block bg-blue-100 hover:bg-[#C3DCF7] rounded3xl mb-1 p-2 text[#044085]"

function MenuPrincipal() {
    const [open, setOpen] = useState(true) //para abrir y cerrar el menu 

    return (
        <>
            {
                open
                    ? <X
                        onClick={() => setOpen(false)}
                        className="fixed top-2 right-2 size-12 bg-blue-200 rounded-md p-2" />
                    : <Menu
                        onClick={() => setOpen(true)}
                        className="fixed top-2 right-2 size-12 bg-blue-200 rounded-md p-2" />
            }

            {open &&  
            <aside className="w-[310px] shrink-0 overflow-auto bg-[rgba(4,64,133,0.5)] p-3 rounded-lg mx-2 my-2">

                <Link className={`${classLink} ${classLink}`} href={slug(menu[0])}>{menu[0]}</Link>
                <details>
                    <summary className="bg-blue-100 hover:bg-[#C3DCF7] rounded3xl mb-1 p-2 text[#044085]">
                        <Link href={slug(menu[1])}>{menu[1]}</Link>
                    </summary>
                    <details>
                        <summary className="bg-blue-100 hover:bg-[#C3DCF7] rounded3xl mb-1 p-2 text[#044085] ml-2">
                            <Link href={slug(menu[2])}>{menu[2]}</Link>
                        </summary>
                        <Link className={`${classLink}ml-4`} href={slug(menu[3])}>{menu[3]}</Link>
                        <Link className={`${classLink}ml-4`} href={slug(menu[4])}>{menu[4]}</Link>
                    </details>

                    <details>
                        <summary className="bg-blue-100 hover:bg-[#C3DCF7] rounded3xl mb-1 p-2 text[#044085] ml-2">
                            <Link href={slug(menu[5])}>{menu[5]}</Link>
                        </summary>



                        <Link className={`${classLink}ml-4`} href={slug(menu[6])}>{menu[6]}</Link>
                        <Link className={`${classLink}ml-4`} href={slug(menu[7])}>{menu[7]}</Link>
                        <Link className={`${classLink}ml-4`} href={slug(menu[8])}>{menu[8]}</Link>
                        <Link className={`${classLink}ml-4`} href={slug(menu[9])}>{menu[9]}</Link>
                        <Link className={`${classLink}ml-4`} href={slug(menu[10])}>{menu[10]}</Link>
                        <Link className={`${classLink}ml-4`} href={slug(menu[11])}>{menu[11]}</Link>
                        <Link className={`${classLink}ml-4`} href={slug(menu[12])}>{menu[12]}</Link>

                    </details>
                    <summary className="bg-blue-100 hover:bg-[#C3DCF7] rounded3xl mb-1 p-2 text[#044085] ml-2">
                        <Link href={slug(menu[13])}>{menu[13]}</Link>
                        <Link className={`${classLink}ml-2`} href={slug(menu[14])}>{menu[14]}</Link>
                        <Link className={`${classLink}ml-2`} href={slug(menu[15])}>{menu[15]}</Link>
                        <Link className={`${classLink}ml-2`} href={slug(menu[16])}>{menu[16]}</Link>
                        <Link className={`${classLink}ml-2`} href={slug(menu[17])}>{menu[17]}</Link>
                        <Link className={`${classLink}ml-2`} href={slug(menu[18])}>{menu[18]}</Link>
                        <Link className={`${classLink}ml-2`} href={slug(menu[19])}>{menu[19]}</Link>
                        <Link className={`${classLink}ml-2`} href={slug(menu[20])}>{menu[20]}</Link>
                    </summary>
                </details>

                <details>
                    <summary className="bg-blue-100 hover:bg-[#C3DCF7] rounded3xl mb-1 p-2 text[#044085]">

                        <Link href={slug(menu[21])}>{menu[21]}</Link>
                    </summary>
                    <Link className={`${classLink}`} href={slug(menu[22])}>{menu[22]}</Link>
                    <Link className={`${classLink}`} href={slug(menu[23])}>{menu[23]}</Link>

                </details>

                <Link className={`${classLink}`} href={slug(menu[24])}>{menu[24]}</Link>

            </aside>
             }
        </>

    );
}

export default MenuPrincipal;