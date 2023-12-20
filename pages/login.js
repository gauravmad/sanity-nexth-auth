import React from 'react'
import dynamic from "next/dynamic"
import loginjson from "../public/assets/loginanimation.json"
import { signIn } from 'next-auth/react';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Login() {
  return (
    <div className='my-[10vh] md:my-[5vh] w-[85%] md:w-[50%] mx-auto'>
        <h1 className='text-center text-[4.5vh] font-medium text-blue-900'>Welcome User</h1>
        <Lottie 
            animationData={loginjson}
            className='w-[90%] md:w-[60vh] mx-auto'
        />
        <div className='w-full md:w-[40%] mx-auto text-center bg-purple-800 p-[1.5vh] rounded-xl'>
            <button 
                onClick={signIn}
                className='text-center text-[2.7vh] md:text-[3.5vh] font-semibold text-white'
            >
                Login
            </button>
        </div>
        <p className='text-center mt-[1vh] text-[2.2vh] font-medium'>Developed by Gaurav Madan</p>
    </div>
  )
}
