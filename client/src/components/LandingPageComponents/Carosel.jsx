import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Carousel(){

    let nav = useNavigate()

    let slides = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
      ];

    let [current, setCurrent] = useState(0);

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 5000);
        return () => clearInterval(interval);
      }, [current]);


    return(
        <div className="overflow-hidden relative mx-0 h-[34rem] w-full">
            <div
                className={`flex transition ease-out duration-500`}
                style={{
                transform: `translateX(-${current * (100 / slides.length)}%)`,
                width: `${slides.length * 100}vw`
                }}
            >
                {slides.map(s => <img src={s} className="h-full w-screen" key={s}/>)}
            </div>

        <div className="absolute flex justify-center items-center text-center md:text-left h-full p-5 md:pl-28 top-0 w-full md:w-[55%] ">
            <div  className="bg-honey p-10 h-3/4 ">
                <h1 className="text-2xl md:text-4xl text-gray-200 font-semibold ">Get Started and Enjoy the Best Savings on Organic Farm Fresh Food</h1>
                <p className="w-1/2 py-12 font-bold">Produced with care by your Local Farmers and Producers, delivered to you by our bees</p>
                <div className="mt-auto">
                    <a
                    onClick={()=>nav("/shop")}
                    className="mt-auto flex-none rounded-sm bg-yellow px-8 py-4 font-semibold text-white shadow-sm cursor-pointer select-none"
                    >
                    Shop Now 
                    </a>
                </div>
            </div>
        </div>

        {/* <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
            {slides.map((s, i) => {
            return (
                <div
                onClick={() => {
                    setCurrent(i);
                }}
                key={"circle" + i}
                className={`rounded-full md:w-2 md:h-2 w-1 h-1 cursor-pointer  ${
                    i == current ? "bg-white" : "bg-gray-500"
                }`}
                ></div>
            );
            })}
        </div> */}

        </div>

        
    )
}