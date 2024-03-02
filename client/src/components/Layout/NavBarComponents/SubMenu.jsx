

export default function SubMenu({subMenu}){
    return(
        <div className={subMenu? "text-black w-full absolute h-[50vh] bg-white -z-50 transition-all duration-300 py-10" : "text-black w-full absolute bg-transparent -translate-y-full -z-50 transition-all"}>

        </div>
    )
}