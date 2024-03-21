import React from 'react'

import { Link } from 'react-router-dom'
export default function Signin () {
  return (
   <div className={'flex flex-row'}>
            <div className="bg-[#79cce6] h-screen w-2/5 flex flex-row-reverse rounded-tl-3xl rounded-bl-3xl">
                <ul className={'my-auto'}>
                    <li className={'mb-1 font-bold bg-white p-2 mr-0 rounded-tl-xl rounded-bl-xl'}>

                        <Link to="/">Sign In</Link>
                    </li>
                    <li className={'bg-[#79cce6] font-bold text-[#ffffff] p-2 mr-0 rounded-tl rounded-bl'}>

                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col justify-center object-center w-full bg-white  rounded-tr-3xl rounded-br-3xl">
                <div className="mx-auto">
                    <p className={'text-[#79cce6] text-5xl'}>BRAVE</p>
                    <p className={'text-2xl mb-5'}>Best Forms</p>
                    <div className="input-group">
                        <div className="border-2 h-7 border-[#79cce6] rounded-lg ">
                            <span className="input-group-text text-[#79cce6]">

                                <i className="fa-regular fa-at"></i></span>
                            <input type="text" className="text-[#79cce6] ml-7" placeholder={'Email Address'}/>

                        </div>
                    </div>
                    <div className="mt-3 h-7 border-2 border-[#79cce6] rounded-lg">
                        <div className="input-group ">
                        <span className="input-group-text text-[#79cce6]">
                            <i className="fa-solid fa-lock"></i></span>


                            <input type="password" className="text-[#79cce6] ml-7" placeholder={'Password'}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row mt-3">
                        <label htmlFor="remember-me">
                            <input type="checkbox" className="ring-2 ring-[#79cce6] "/> Remember Me
                        </label>
                        <h1 className="ml-10 text-[#79cce6]">
                            <a href="/">Forgot Password?</a>
                        </h1>
                    </div>


                    <button className={'bg-[#79cce6] text-white w-full font-bold h-7 mt-4 rounded-lg'}>SIGN IN</button>

                    <button className={'mt-3 w-full h-7 border-2 border-[#79cce6] rounded-lg'}>
                        <i className="fa-brands fa-google"></i>
                        <span className="ml-2 text-[#000]">Sign
                        In With google </span>
                    </button>


                    <div className="flex flex-row">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p className={'mt-3'}>Don't have account? </p>

                        <Link to="/signup" className="mt-3 ml-3 text-[#79cce6]">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

