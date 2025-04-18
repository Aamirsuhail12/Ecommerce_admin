
import './Signup.css';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { Button } from '@mui/material';
import { Link } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { use, useContext, useEffect, useState } from 'react';
import { FaEyeSlash } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import Checkbox from '@mui/material/Checkbox';
import { IoMdHome } from "react-icons/io";
import { Mycontext } from '../../App';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Signup = () => {

    const [focusIdx, setfocusIdx] = useState(null);
    const [ispassword1, setispassword1] = useState(true);
    const [ispassword2, setispassword2] = useState(true);
    const context = useContext(Mycontext);

    useEffect(()=>{
        context.setheadershow(false);
    },[])

    return (
        <div className='flex items-center bg-gradient-to-r from-gray-200 to-gray-100 '>
            <div className="w-[70%] p-24 flex flex-col items-start gap-5">
                <h1 className='font-bold text-[55px] leading-tight'>BEST UX/UI FASHION <span className='text-blue-600'>ECOMMERCE DASHBOARD</span> & ADMIN PANEL</h1>
                <p className='text-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                <Link to='/'><Button style={{ textTransform: 'none', fontSize: '15px', backgroundColor: 'blue', color: 'white', paddingRight: '25px', paddingLeft: '25px', paddingTop: '10px', paddingBottom: '10px', fontWeight: 'bold' }}><IoMdHome style={{ fontSize: '35px', paddingRight: '5px' }} />Go To Home</Button></Link>
            </div>
            <div className="w-[30%] bg-gray-200 h-auto">
                <div className='flex justify-center items-center w-full bg-transparent !important'>
                    <div className=' flex flex-col justify-center items-center p-8 gap-5 w-[100%] rounded-[10px]'>
                        <h1 className='font-bold text-[25px]'>Register a new account</h1>
                        <form className='w-full flex gap-5 flex-col'>
                            <div className={`${focusIdx === 0 ? 'focus' : ''} flex items-center relative`}>
                                <FaUserCircle style={{ position: 'absolute', left: '10px', fontSize: '25px', opacity: '0.6' }} />
                                <input onFocus={() => {
                                    setfocusIdx(0);
                                }}
                                    type='text' placeholder='enter your name' className={`px-12 py-2 outline-none border-[1px] border-solid rounded-[5px] w-[100%]`} />
                            </div>
                            <div className={`${focusIdx === 1 ? 'focus' : ''} flex items-center relative`}>
                                <MdEmail style={{ position: 'absolute', left: '10px', fontSize: '25px', opacity: '0.6' }} />
                                <input onFocus={() => {
                                    setfocusIdx(1);
                                }}
                                    type='text' placeholder='enter your email' className={`px-12 py-2 outline-none border-[1px] border-solid rounded-[5px] w-[100%]`} />
                            </div>
                            <div className={` ${focusIdx === 2 ? 'focus' : ''} flex items-center relative`}>
                                <RiLockPasswordFill style={{ position: 'absolute', left: '10px', fontSize: '25px', opacity: '0.6' }} />
                                {
                                    ispassword1 === true ? <FaEye onClick={() => setispassword1(!ispassword1)} style={{ fontSize: '25px', opacity: '0.6', position: 'absolute', right: '10px' }} className='eye' /> : <FaEyeSlash className='eye' onClick={() => setispassword1(!ispassword1)} style={{ fontSize: '25px', opacity: '0.6', position: 'absolute', right: '10px' }} />
                                }

                                <input
                                    onFocus={() => {
                                        setfocusIdx(2);
                                    }}
                                    type={`${ispassword1 === true ? 'password' : 'text'}`} placeholder='enter your password' className={` px-12 py-2 outline-none border-[1px] border-solid rounded-[5px] w-[100%]`} />
                            </div>
                            <div className={` ${focusIdx === 3 ? 'focus' : ''} flex items-center relative`}>
                                <IoShieldCheckmark style={{ position: 'absolute', left: '10px', fontSize: '25px', opacity: '0.6' }} />
                                {
                                    ispassword2 === true ? <FaEye onClick={() => setispassword2(!ispassword2)} style={{ fontSize: '25px', opacity: '0.6', position: 'absolute', right: '10px' }} className='eye' /> : <FaEyeSlash className='eye' onClick={() => setispassword2(!ispassword2)} style={{ fontSize: '25px', opacity: '0.6', position: 'absolute', right: '10px' }} />
                                }

                                <input
                                    onFocus={() => {
                                        setfocusIdx(3);
                                    }}
                                    type={`${ispassword2 === true ? 'password' : 'text'}`} placeholder='confirm your password' className={` px-12 py-2 outline-none border-[1px] border-solid rounded-[5px] w-[100%]`} />
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <Checkbox {...label} />
                                <p>I agree to all the terms & conditions</p>
                            </div>
                            <Link to='/signup'><Button style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'blue', padding: '10px', textTransform: 'none', fontSize: '18px', width: '100%' }} >Sign Up</Button></Link>
                        </form>

                        <div className='w-full flex justify-center items-center'>
                            <div className='w-[40%] h-[1px] bg-gray-500'></div>
                            <div className='w-[40px] h-[40px] border-solid border-[1px] border-gray-500 flex justify-center items-center rounded-[50%] text-[20px]'>or</div>
                            <div className='w-[40%] h-[1px] bg-gray-500'></div>
                        </div>
                        <Button style={{ fontWeight: 'bold', padding: '10px', textTransform: 'none', fontSize: '18px', width: '100%', border: '1px solid blue' }} ><FcGoogle style={{ marginRight: '10px', fontSize: '30px', alignItems: 'center' }} />Sign In With Google</Button>
                        <p>Already Registered?<Link to='/login'><button className='ml-2 font-bold text-blue-800'>Sign In</button></Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;