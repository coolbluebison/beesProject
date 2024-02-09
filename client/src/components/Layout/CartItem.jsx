

export default function CartItem({item}){

    let i = item[0]

    return(
        <div className="w-full flex justify-evenly gap-4 h-20 mt-4 ">
            <img src={i.image} alt={i.name} className=" h-20 w-20  border-[1px] border-black rounded-lg"/>
            <div className="w-1/3">
                <p className="text-sm">{i.name}</p>
                <p className="text-sm">{i.quantity_desc}</p>
            </div>
            <div>
                <select name="" id="" className="bg-white rounded-md border-[1px] border-black w-10">
                    <option value="someOption">1</option>
                    <option value="someOption">2</option>
                    <option value="someOption">3</option>
                    <option value="someOption">4</option>
                    <option value="someOption">5</option>
                    <option value="someOption">6</option>
                    <option value="someOption">7</option>
                    <option value="someOption">8</option>
                    <option value="otherOption">9</option>
                </select>
                <p></p>
            </div>
        </div>
    )
}