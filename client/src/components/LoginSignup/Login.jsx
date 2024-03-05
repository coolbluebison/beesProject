import { useState } from "react"
import LoginComponent from "./LoginComponent"
import SignupComponent from "./Signup"

export default function Login({setUser}){

    let [form,setForm] = useState(false)

    return(
        <div className={form? "text-black flex bg-cover static bg-no-repeat bg-[url('https://w.forfun.com/fetch/f8/f82614fa694240de7cbd57cab1590fda.jpeg?w=1470&r=0.5625')]" : "text-black h-screen w-screen flex static items-center justify-center bg-[url('https://hips.hearstapps.com/hmg-prod/images/whm100123feaprotein-010-64f9d39a02264.jpg?crop=1.00xw:0.335xh;0,0.407xh&:*')]"} >
            <div className={form? "w-1/2 h-screen translate-x-full transition-all duration-500 bg-yellow flex items-center justify-center" : "flex items-center justify-center w-1/2 h-screen absolute left-0 transition-all duration-500 translate-x-0 bg-yellow"}>
                <div className="w-3/4 h-full pb-16 relative">
                    <p className="text-3xl font-dancing text-center py-10">Bees In Baskets</p>
                    {form ? <SignupComponent setUser={setUser}/> : <LoginComponent setUser={setUser}/>}
                    <div className="w-full transition-all mt-20">
                        <p className="text-center text-lg font-semibold">{form? "Already a Member ?" : "Don't Have an Account ?"}</p>
                        <p className="text-center text-rose-800 hover:text-rose-700 underline pt-2 cursor-pointer text-lg font-bold" onClick={()=>setForm(!form)}>{!form? "Sign Up" : "Login"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}