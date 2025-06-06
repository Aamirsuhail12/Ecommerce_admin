

import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useContext, useState } from "react";
import { Link } from "react-router";
import { Button } from "@mui/material";
import { Mycontext } from "../../App";
import { BiSolidCategory } from "react-icons/bi";

const Sidebar = () => {

    const [activebtn, setactivebtn] = useState(0);
    const [open, setopen] = useState(false);
    const context = useContext(Mycontext);
    return (
        <div className={`${context.toggle === true ? 'active' : 'notactive'}  md:w-[22%] sidebar fixed left-0 h-screen overflow-y-auto px-4`}>
            <ul className="overflow-y-scroll max-h-[100vh] h-[100%]">
                <li>
                    <Link to='/'>
                        <Button
                            onClick={() => setactivebtn(0)}
                            className={`list ${activebtn === 0 ? 'active' : ''}`} style={{ width: '95%', borderRadius: '10px', justifyContent: 'start', margin: '5px 0', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '10px', paddingTop: '10px', color: 'black', opacity: '0.7' }}>
                            <div className="flex items-center gap-5">
                                <span><MdDashboard style={{ fontSize: '25px' }} /> </span>
                                <span className="font-semibold text-[15px] normal-case">Dashboard</span>
                            </div>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Button
                        onClick={() => {
                            setactivebtn(1)
                            setopen(!open);
                        }}
                        className={`list ${activebtn === 1 ? 'active' : ''}`}
                        style={{ margin: '5px 0', width: '95%', borderRadius: '10px', justifyContent: 'start', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '10px', paddingTop: '10px', color: 'black', opacity: '0.7' }}>
                        <div className="flex  items-center justify-between w-full">
                            <div className="flex items-center gap-5">
                                <span><FaProductHunt style={{ fontSize: '25px' }} /> </span>
                                <span className="font-semibold text-[15px] normal-case">Products</span>
                            </div>
                            {
                                activebtn === 1 &&
                                    open === true ? <div><IoIosArrowDown style={{ fontSize: '20px' }} /></div> :
                                    <div><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></div>
                            }
                        </div>
                    </Button>
                    {
                        activebtn === 1 && open &&
                        <div className="flex flex-col gap-3 border-l border-gray-800 px-4 py-4 mx-8 opacity-[0.7]">
                            <Link to="/product"><span className="hover:text-blue-800 hover:underline">Product List</span></Link>
                            <Link to="/product/view"><span className="hover:text-blue-800 hover:underline">Product View</span></Link>
                            <Link to="/product/upload"><span className="hover:text-blue-800 hover:underline">Product Upload</span></Link>
                        </div>
                    }
                </li>
                <li>
                    <Button
                        onClick={() => {
                            setactivebtn(2)
                            setopen(!open);
                        }}
                        className={`list ${activebtn === 2 ? 'active' : ''}`}
                        style={{ margin: '5px 0', width: '95%', borderRadius: '10px', justifyContent: 'start', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '10px', paddingTop: '10px', color: 'black', opacity: '0.7' }}>
                        <div className="flex  items-center justify-between w-full">
                            <div className="flex items-center gap-5">
                                <span><BiSolidCategory style={{ fontSize: '25px' }} /> </span>
                                <span className="font-semibold text-[15px] normal-case">Category</span>
                            </div>
                            {
                                activebtn === 2 &&
                                    open === true ? <div><IoIosArrowDown style={{ fontSize: '20px' }} /></div> :
                                    <div><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></div>
                            }
                        </div>
                    </Button>
                    {
                        activebtn === 2 && open &&
                        <div className="flex flex-col gap-3 border-l border-gray-800 px-4 py-4 mx-8 opacity-[0.7]">
                            <Link to="/category/list"><span className="hover:text-blue-800 hover:underline">Category List</span></Link>
                            <Link to="/category/add"><span className="hover:text-blue-800 hover:underline">Add Category</span></Link>
                            <Link to="/subcategory/add"><span className="hover:text-blue-800 hover:underline">Add Sub Category</span></Link>
                            <Link to="/subcategory/list"><span className="hover:text-blue-800 hover:underline">Sub Category List</span></Link>
                        </div>
                    }
                </li>
                <li>
                    <Button
                        onClick={() => {
                            setactivebtn(3)
                            setopen(!open)
                        }}
                        className={`list ${activebtn === 3 ? 'active' : ''}`}
                        style={{ margin: '5px 0', width: '95%', borderRadius: '10px', justifyContent: 'start', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '10px', paddingTop: '10px', color: 'black', opacity: '0.7' }}>
                        <div className="flex  items-center justify-between w-full">
                            <div className="flex items-center gap-5">
                                <span><BsCart4 style={{ fontSize: '25px' }} /> </span>
                                <span className="font-semibold text-[15px] normal-case">Orders</span>
                            </div>
                            {
                                activebtn === 3 &&
                                    open === true ? <div><IoIosArrowDown style={{ fontSize: '20px' }} /></div> :
                                    <div><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></div>
                            }
                        </div>
                    </Button>
                    {
                        activebtn === 3 && open &&
                        <div className="flex flex-col gap-3 border-l border-gray-800 px-4 py-4 mx-8 opacity-[0.7]">
                            <Link to="#"><span className="hover:text-blue-800 hover:underline">Order List</span></Link>
                            <Link to="#"><span className="hover:text-blue-800 hover:underline">Order View</span></Link>
                            <Link to="#"><span className="hover:text-blue-800 hover:underline">Order Upload</span></Link>
                        </div>
                    }
                </li>
                <li>
                    <Button
                        onClick={() => setactivebtn(4)}
                        className={`list ${activebtn === 4 ? 'active' : ''}`}
                        style={{ margin: '5px 0', width: '95%', borderRadius: '10px', justifyContent: 'start', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '10px', paddingTop: '10px', color: 'black', opacity: '0.7' }}>
                        <div className="flex  items-center justify-between w-full">
                            <div className="flex items-center gap-5">
                                <span><MdOutlineMessage style={{ fontSize: '25px' }} /> </span>
                                <span className="font-semibold text-[15px] normal-case">Messages</span>
                            </div>
                            <div><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></div>
                        </div>
                    </Button>
                </li>
                <li>
                    <Button
                        onClick={() => setactivebtn(5)}
                        className={`list ${activebtn === 5 ? 'active' : ''}`}
                        style={{ margin: '5px 0', width: '95%', borderRadius: '10px', justifyContent: 'start', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '10px', paddingTop: '10px', color: 'black', opacity: '0.7' }}>
                        <div className="flex  items-center justify-between w-full">
                            <div className="flex items-center gap-5">
                                <span><IoNotifications style={{ fontSize: '25px' }} /> </span>
                                <span className="font-semibold text-[15px] normal-case">Notifications</span>
                            </div>
                            <div><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></div>
                        </div>
                    </Button>
                </li>
                <li>
                    <Button
                        onClick={() => setactivebtn(6)}
                        className={`list ${activebtn === 6 ? 'active' : ''}`}
                        style={{ margin: '5px 0', width: '95%', borderRadius: '10px', justifyContent: 'start', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '10px', paddingTop: '10px', color: 'black', opacity: '0.7' }}>
                        <div className="flex  items-center justify-between w-full">
                            <div className="flex items-center gap-5">
                                <span><IoSettingsSharp style={{ fontSize: '25px' }} /> </span>
                                <span className="font-semibold text-[15px] normal-case">Settings</span>
                            </div>
                            <div><MdKeyboardArrowRight style={{ fontSize: '25px' }} /></div>
                        </div>
                    </Button>
                </li>
                <li>
                    <Link to='/login'>
                        <Button
                            onClick={() => setactivebtn(7)}
                            className={`list ${activebtn === 7 ? 'active' : ''}`}
                            style={{ margin: '5px 0', width: '95%', borderRadius: '10px', justifyContent: 'start', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '10px', paddingTop: '10px', color: 'black', opacity: '0.7' }}>
                            <div className="flex items-center gap-5">
                                <span><FaUser style={{ fontSize: '25px' }} /> </span>
                                <span className="font-semibold text-[15px] normal-case">Login</span>
                            </div>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to='/signup'>
                        <Button
                            onClick={() => setactivebtn(8)}
                            className={`list ${activebtn === 8 ? 'active' : ''}`}
                            style={{ margin: '5px 0', width: '95%', borderRadius: '10px', justifyContent: 'start', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '10px', paddingTop: '10px', color: 'black', opacity: '0.7' }}>
                            <div className="flex items-center gap-5">
                                <span><FaUser style={{ fontSize: '25px' }} /> </span>
                                <span className="font-semibold text-[15px] normal-case">Sign Up</span>
                            </div>
                        </Button>
                    </Link>
                </li>
                

                <li>
                    <div className="bg-blue-200 h-[150px] w-[90%] flex justify-center items-center mb-16 rounded-[10px]">
                        <Button style={{ backgroundColor: 'blue', color: 'white', fontWeight: 'bold', paddingLeft: '15px', paddingRight: '15px' }}>
                            <IoMdLogOut style={{ fontWeight: 'bold', fontSize: '25px', marginRight: '5px' }} /> LOGOUT
                        </Button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;