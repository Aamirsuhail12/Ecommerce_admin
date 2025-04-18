
import { MdMenuOpen } from "react-icons/md";
import Searchbox from "../Searchbox";
import { MdOutlineLightMode } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Button } from '@mui/material';
import Scroll from "../Scroll";
import { useContext, useState } from "react";
import { Mycontext } from "../../App";
import { FaBars } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { FaUserPlus } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";

const Header = () => {

    const context = useContext(Mycontext);
    const [isopen, setisopen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className={`${context.light === true ? 'light' : 'dark'} fixed ptr w-full top-[0px] z-50`}>
            <div className="flex header items-center h-[60px]">
                <div className="md:w-2/12 hotash max-w-2/12 flex justify-center items-center font-bold text-[25px]">
                    <div className="flex justify-center items-center">
                        <img className="h-10" src="https://cdn-icons-png.flaticon.com/512/8508/8508168.png" />
                        <span className="ml-2">HOTASH</span>
                    </div>
                </div>
                <div className="md:w-3/12 max-w-3/12 searchbox flex justify-end items-center gap-5">
                    <Button className="btn" onClick={() => context.settoggle(!context.toggle)}>
                        {
                            context.toggle === false ? <MdMenuOpen /> : <FaBars style={{ fontSize: '15px' }} />
                        }

                    </Button>
                    <Searchbox />
                </div>
                <div className="md:w-7/12 max-w-7/12 flex gap-5 justify-end items-center pr-10">
                    <Button className="btn" onClick={() => {
                        context.setlight(!context.light);
                    }}>
                        <MdOutlineLightMode />
                    </Button>
                    <Button className="btn">
                        <FiShoppingCart />
                    </Button>
                    <Button className="btn">
                        <MdOutlineEmail />
                    </Button>
                    <Button className="btn relative" onClick={() => {
                        setisopen(!isopen);
                    }}
                        onClose={
                            () => {
                                setisopen(false);
                            }
                        }
                    >
                        <IoIosNotificationsOutline />
                        {
                            isopen && <Scroll />
                        }

                    </Button>

                    <div>
                        <Button
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            style={{
                                width: '200px',
                                position: 'relative'
                            }}
                        >
                            <img className="h-10 rounded-full border-2 border-blue-800" src="https://pixlr.com/images/generator/how-to-generate.webp" />
                            <div className="flex flex-col gap-0 items-start  leading-tight ml-2">
                                <span className="font-semibold text-black">Aamir Suhail</span>
                                <span className="text-black">@amir</span>
                            </div>
                        </Button>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            style={{
                                top: '45px'
                            }}
                        >
                            <MenuItem onClick={handleClose} style={{ gap: '10px' }}><FaUserPlus style={{ fontSize: '20px', opacity: '0.7' }} /> My Account</MenuItem>
                            <MenuItem onClick={handleClose} style={{ gap: '10px' }}><RiLockPasswordFill style={{ fontSize: '20px', opacity: '0.7' }} />Reset Password</MenuItem>
                            <MenuItem onClick={handleClose} style={{ gap: '10px' }}><MdOutlineLogout style={{ fontSize: '20px', opacity: '0.7' }} />Logout</MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;