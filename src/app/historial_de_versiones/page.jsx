 import  Titulo  from "@/components/titulo.jsx" ;
 import  Nav  from "@/components/nav.jsx" ;


export const metadata = {
    title: "Informacion general: convalidaciones, exenciones y títulos",
   
  };
export default function Home() {
  return (
   <div>
    <Titulo>{metadata.title}</Titulo>
    <Nav pos={24} />
   </div>
  );
}
