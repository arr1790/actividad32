
import { redirect } from "next/navigation";
import{menu,slug} from "@/lib/utils"



export default function Home() {
  
  // redirect("/informacion_general_convalidaciones_exenciones_y_titulos") 
  redirect(slug(menu[0]))
}
