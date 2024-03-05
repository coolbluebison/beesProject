import { RxAvatar } from "react-icons/rx";
import { RxLockClosed } from "react-icons/rx";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { SlSocialGoogle } from "react-icons/sl";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaApple } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginComponent({setUser}){

    let [show,setShow] = useState(false)

    let nav = useNavigate()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://127.0.0.1:5555/login",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response error");
            }
            return response.json();
  
        })
        .then(data => {
            setUser(data)
            nav('/')
        })
        .catch(error => {
            console.log("error", error.message);
            alert("Error")
        });
      }

    console.log(username)

    return(
        <>
            <form action="#" className="w-2/3 mx-auto flex items-center justify-center" onSubmit={handleSubmit} >
            <div className="w-full">

                <label className="py-4 text-black font-semibold">Username</label>
                <div className="w-full bg-white rounded-md flex  justify-between px-2 my-2 items-center shadow-md text-gray-400">
                    <RxAvatar size={"1.5rem"}/>
                    <input type="text" className="py-2 w-[90%] bg-white outline-none" placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)}/>
                </div>

                <p className="h-4"></p>

                <label className=" text-black font-semibold">Password</label>
                

                <div className="w-full bg-white rounded-md flex  justify-between px-2 my-2 items-center shadow-md text-gray-400">
                    <RxLockClosed size={"1.5rem"}/>
                    <input className="py-2 w-[81%] bg-white outline-none" placeholder="Enter Password" id="password" type={show ? null : "password"} onChange={(e)=>setPassword(e.target.value)}/>
                    <div className="cursor-pointer" onClick={()=>setShow(!show)}>
                        {show ? <FaEyeSlash size={"1.5rem"}/> : <FaEye size={"1.5rem"}/>}
                    </div>
                </div>
                <p className="w-full flex justify-end text-sm underline cursor-pointer hover:text-gray-800">Forgot Password?</p>

                <p className="h-5"></p>

                <button type="submit" className="w-full text-center text-xl my-12 py-2 rounded-full hover:bg-rose-600 shadow-md bg-honey cursor-pointer text-black tracking-wider">Login</button>

                {/* <p className="text-sm text-center py-2">Or Continue With</p>

                <div className="flex items-center justify-between mx-2">
                    <span className="h-16 w-16 bg-rose-500 hover:bg-rose-600 hover:scale-105 shadow-md text-black rounded-xl flex items-center justify-center cursor-pointer"><SlSocialGoogle size={"2rem"}/></span>
                    <span className="h-16 w-16 bg-rose-500 hover:bg-rose-600 hover:scale-105 shadow-md text-black rounded-xl flex items-center justify-center cursor-pointer"><TiSocialFacebookCircular size={"2.5rem"}/></span>
                    <span className="h-16 w-16 bg-rose-500 hover:bg-rose-600 hover:scale-105 shadow-md text-black rounded-xl flex items-center justify-center cursor-pointer"><FaApple size={"2.5rem"}/></span>
                </div> */}

            </div>
            
            </form>
        </>
    )
}