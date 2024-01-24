

export default function ProfileNav({pHover,setPHover}){
    return(
        <div className={pHover?"w-72 px-4 py-4 bg-white rounded-b-2xl absolute z-40 right-20 shadow-md":"hidden"} onMouseOver={()=>{setPHover(true)}} onMouseLeave={()=>{setPHover(false)}}>
            {/* put content here */}
                <p className="p-2 px-4 text-gray-800 cursor-pointer w-full rounded-xl hover:bg-honey">Account Information</p>
                <p className="p-2 px-4 text-gray-800 cursor-pointer w-full rounded-xl hover:bg-honey">Orders</p>
                <p className="p-2 px-4 text-gray-800 cursor-pointer w-full rounded-xl hover:bg-honey">Buy It Again</p>
                <p className="p-2 px-4 text-gray-800 cursor-pointer w-full rounded-xl hover:bg-honey">Lists</p>
                <p className="p-2 px-4 text-gray-800 cursor-pointer w-full rounded-xl hover:bg-honey">Recommended</p>
                <p className="p-2 px-4 text-gray-800 cursor-pointer w-full rounded-xl hover:bg-honey">Recently Viewed</p>
                <p className="p-2 px-4 text-gray-800 cursor-pointer w-full rounded-xl hover:bg-honey">Invite a Friend</p>
                <p className="p-2 px-4 text-gray-800 cursor-pointer w-full rounded-xl hover:bg-honey">Review Purchases</p>
                <p className="p-2 px-4 text-gray-800 cursor-pointer w-full rounded-xl hover:bg-honey">Gift Membership</p>
                <p className="p-2 px-4 text-gray-800 cursor-pointer w-full rounded-xl hover:bg-honey">FAQs</p>
                <p className="p-2 px-4 text-gray-800 cursor-pointer w-full rounded-xl hover:bg-honey">24/7 Chat</p>
        </div>
    )
}