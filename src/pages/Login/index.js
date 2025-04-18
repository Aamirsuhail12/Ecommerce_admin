
import './Login.css';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { Button } from '@mui/material';
import { Link } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { useContext, useEffect, useState } from 'react';
import { FaEyeSlash } from "react-icons/fa";
import { Mycontext } from '../../App';

const Login = () => {

    const [focusIdx, setfocusIdx] = useState(null);
    const [ispassword, setispassword] = useState(true);
    const context = useContext(Mycontext);
    useEffect(()=>{
        context.setheadershow(false);
    },[])
    return (
        <div className='flex justify-center items-center sign'>
            <div className='bg-white flex flex-col justify-center items-center p-8 gap-5 w-[30%] rounded-[10px]'>
                <h1 className='font-bold text-[25px]'>Login to Hotash</h1>
                <form className='w-full flex gap-5 flex-col'>
                    <div className={`${focusIdx === 0 ? 'focus' : ''} flex items-center relative`}>
                        <MdEmail style={{ position: 'absolute', left: '10px', fontSize: '25px', opacity: '0.6' }} />
                        <input onFocus={() => {
                            setfocusIdx(0);
                        }}
                            type='text' placeholder='enter your email' className={`px-12 py-2 outline-none border-[1px] border-solid rounded-[5px] w-[100%]`} />
                    </div>
                    <div className={` ${focusIdx === 1 ? 'focus' : ''} flex items-center relative`}>
                        <RiLockPasswordFill style={{ position: 'absolute', left: '10px', fontSize: '25px', opacity: '0.6' }} />
                        {
                            ispassword === true ? <FaEye onClick={()=> setispassword(!ispassword)} style={{ fontSize: '25px', opacity: '0.6', position: 'absolute', right: '10px' }} className='eye' /> : <FaEyeSlash className='eye' onClick={()=> setispassword(!ispassword)} style={{ fontSize: '25px', opacity: '0.6', position: 'absolute', right: '10px' }} />
                        }

                        <input
                            onFocus={() => {
                                setfocusIdx(1);
                            }}
                            type={`${ispassword === true ? 'password' : 'text'}`} placeholder='enter your password' className={` px-12 py-2 outline-none border-[1px] border-solid rounded-[5px] w-[100%]`} />
                    </div>
                    <Link to='/login'><Button style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'blue', padding: '10px', textTransform: 'none', fontSize: '18px', width: '100%' }} >Sign In</Button></Link>
                </form>
                <Link to='/forgotpassword'><button className='font-bold hover:text-blue-800'>FORGOT PASSWORD</button></Link>
                <div className='w-full flex justify-center items-center'>
                    <div className='w-[40%] h-[1px] bg-gray-200'></div>
                    <div className='w-[40px] h-[40px] border-solid border-[1px] flex justify-center items-center rounded-[50%] text-[20px]'>or</div>
                    <div className='w-[40%] h-[1px] bg-gray-200'></div>
                </div>
                <Button style={{ fontWeight: 'bold', padding: '10px', textTransform: 'none', fontSize: '18px', width: '100%', border: '1px solid blue' }} ><FcGoogle style={{ marginRight: '10px', fontSize: '30px', alignItems: 'center' }} />Sign In With Google</Button>
                <p>Don't have an account?<Link to='/signup'><button className='ml-2 font-bold text-blue-800'>Register</button></Link></p>
            </div>
        </div>
    )
}

export default Login;