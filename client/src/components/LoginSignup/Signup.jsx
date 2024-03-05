import { RxAvatar } from "react-icons/rx";
import { RxLockClosed } from "react-icons/rx";
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialGoogle } from "react-icons/sl";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaApple } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupComponent({setUser}){

    let nav = useNavigate()

    const [email,setEmail] = useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        if(password !== confirmPassword){
          alert('Passwords Do Not Match')
        } else{
        fetch("http://127.0.0.1:5555/users",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                username,
                password,
                address: "Nothing"
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
            alert("Something Went Wronf")
        });
        }  
      }

    return(
        <>
            <form action="#" className="w-2/3 mx-auto flex items-center justify-center" onSubmit={handleSubmit}>
            <div className="w-full">

                <div className="flex gap-2 text-gray-400">
                    <div>
                        <label className="py-2 text-black font-semibold">Email</label>
                        <div className="w-full bg-white rounded-md flex  justify-between px-2 my-2 items-center shadow-md">
                            <MdOutlineEmail size={"1.5rem"}/>
                            <input type="text" className="py-2 w-[100%] bg-white outline-none" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div>
                        <label className="py-2 text-black font-semibold">Username</label>
                        <div className="w-full bg-white rounded-md flex  justify-between px-2 my-2 items-center shadow-md">
                            <RxAvatar size={"1.5rem"}/>
                            <input type="text" className="py-2 w-[100%] bg-white outline-none" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
                        </div>
                    </div>
                </div>

                <p className="h-4"></p>

                <div className="flex gap-2 text-gray-400">
                    <div>
                        <label className="py-2 text-black font-semibold">Password</label>
                        <div className="w-full bg-white rounded-md flex  justify-between px-2 my-2 items-center shadow-md">
                            <RxLockClosed size={"1.5rem"}/>
                            <input className="py-2 w-[90%] bg-white outline-none" placeholder="Password" id="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div>
                        <label className="py-2 text-black font-semibold">Confirm Password</label>
                        <div className="w-full bg-white rounded-md flex  justify-between px-2 my-2 items-center shadow-md">
                            <RxLockClosed size={"1.5rem"}/>
                            <input className="py-2 w-[90%] bg-white outline-none" placeholder="Confirm" id="password" type="password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                        </div>
                    </div>
                </div>

                <div className="h-8 py-5  w-[70%] mx-auto">
                    <div className="flex w-full items-center justify-between p-1">
                        <input type="checkbox" className="checkbox checkbox-xs bg-white checked:border-white [--chkbg:theme(colors.white)] shadow-md"/>
                        <p className="text-gray-700 text-sm underline">Opt In To Email Promotions</p>
                    </div>
                    <div className="flex w-full items-center justify-between p-1">
                        <input type="checkbox" className="checkbox checkbox-xs bg-white checked:border-white [--chkbg:theme(colors.white)] shadow-md"/>
                        <p className="text-gray-700 text-sm underline">Agree To Terms Of Service</p>
                    </div>
                </div>

                <button type="submit" className="w-full text-center text-xl my-12 py-2 rounded-full hover:bg-rose-600 shadow-md bg-honey cursor-pointer text-black tracking-wider">Sign Up</button>

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