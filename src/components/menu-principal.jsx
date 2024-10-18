import Link from "next/link";

const menu= [
    "Información general: convalidaciones, exenciones y títulos",
    "Solicitud de convalidaciones",
    "Convalidaciones en FP",
    "¿Qué necesito para poder convalidar?",
    "¿Qué estudios puedo alegar?",
    "¿Dónde encontrar qué módulos son convalidables?",
    "Condiciones para convalidar FOL",
    "Condiciones para convalidar Empresa e Iniciativa Emprendedora",
    "Condiciones para convalidar Inglés",
    "Condiciones para convalidar Segunda Lengua Extranjera",
    "Condiciones para convalidar las Horas de Libre Configuración",
    "Condiciones para convalidar el módulo de Proyecto",
    "Exención de la FCT",
    "¿Puedo convalidar un módulo acreditando experiencia laboral?",
    "¿Qué organismo resuelve las convalidaciones?",
    "¿Qué documentación debo enviar al centro?",
    "¿Cómo conseguir el programa de una asignatura universitaria?",
    "¿Cómo saber si me convalidarán un módulo si he alegado estudios universitarios?",
    "¿Cuándo tendré noticias sobre si se ha aprobado la convalidación?",
    "¿Qué efectos tendrá la convalidación en mi expediente?",
    "Enlaces relacionados",
    "Solicitud del título",
    "Solicitud",
    "Tramitación y recogida",
    "Historial de versiones"
    ];
    

function slug(texto){
    return(
        texto.toLowerCase()    
        .replace(/[:,¿?]/g,"")
            .replace("-","")
            .replace(/[. ]/g,'_')
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g,"")
        
    )
}

const classLink="block text-blue-500 hover:bg-blue-700 p-2 rounded-2xl "

function  MenuPrincipal() {
  
    
    return (  
        <div className="w-[300px] bg-blue-200 px-3 ">

    <Link className={classLink} href={ slug(menu[0])}>{menu[0]}</Link>
    <Link className={classLink} href={ slug(menu[1])}>{menu[1]}</Link>
    <Link className={classLink} href={ slug(menu[2])}>{menu[2]}</Link>
    <Link className={classLink} href={ slug(menu[3])}>{menu[3]}</Link>
    <Link className={classLink} href={ slug(menu[4])}>{menu[4]}</Link>
    <Link className={classLink} href={ slug(menu[5])}>{menu[5]}</Link>
    <Link className={classLink} href={ slug(menu[6])}>{menu[6]}</Link>
    <Link className={classLink} href={ slug(menu[7])}>{menu[7]}</Link>
    <Link className={classLink} href={ slug(menu[8])}>{menu[8]}</Link>
    <Link className={classLink} href={ slug(menu[9])}>{menu[9]}</Link>
    <Link className={classLink} href={ slug(menu[10])}>{menu[10]}</Link>
    <Link className={classLink} href={ slug(menu[11])}>{menu[11]}</Link>
    <Link className={classLink} href={ slug(menu[12])}>{menu[12]}</Link>
    <Link className={classLink} href={ slug(menu[13])}>{menu[13]}</Link>
    <Link className={classLink} href={ slug(menu[14])}>{menu[14]}</Link>
    <Link className={classLink} href={ slug(menu[15])}>{menu[15]}</Link>
    <Link className={classLink} href={ slug(menu[16])}>{menu[16]}</Link>
    <Link className={classLink} href={ slug(menu[17])}>{menu[17]}</Link>
    <Link className={classLink} href={ slug(menu[18])}>{menu[18]}</Link>
    <Link className={classLink} href={ slug(menu[19])}>{menu[19]}</Link>
    <Link className={classLink} href={ slug(menu[20])}>{menu[20]}</Link>
    <Link className={classLink} href={ slug(menu[21])}>{menu[21]}</Link>
    <Link className={classLink} href={ slug(menu[22])}>{menu[22]}</Link>
        </div>
    );
} 

export default MenuPrincipal;