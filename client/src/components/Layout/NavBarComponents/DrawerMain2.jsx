
export default function DrawerMain2(){
    return(
    <div className="drawer-side z-50 no-scrollbar">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-96 min-h-full bg-white">
            {/* Sidebar content here */}
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
        </ul>
    </div>
    )
}