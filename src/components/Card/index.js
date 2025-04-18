

import { Button } from "@mui/material";
import { HiOutlineDotsVertical } from "react-icons/hi";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CiTimer } from "react-icons/ci";
import { Mycontext } from "../../App";


const Card = ({ logo, colors }) => {
    const ITEM_HEIGHT = 48;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const context = React.useContext(Mycontext);
    return (


        <Button style={{width : '48%'}}>
            <div
                style={{ background: `linear-gradient(to right,${colors[0]},${colors[1]})` }}
                className={`w-[100%] flex-0 h-[200px] p-6 text-white flex flex-col justify-between rounded-[10px]`}>
                <div className="flex justify-between items-start">
                    <div className="flex flex-col items-start font-bold normal-case">
                        <span className="text-[15px]"> Total Users</span>
                        <span className="text-[30px]"> 277</span>
                    </div>
                    <div className="h-[50px] w-[50px] flex justify-center items-center text-[30px]">
                        {logo}
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span>Last Month</span>
                    <div>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon style={{color : 'white'}}/>
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            slotProps={{
                                paper: {
                                    style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: '20ch',
                                    },
                                },
                            }}
                        >

                            <MenuItem onClick={handleClose}>
                                <CiTimer style={{ marginRight: '10px', fontWeight: 'bold', fontSize: '15px' }} />Last Day
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <CiTimer style={{ marginRight: '10px', fontWeight: 'bold', fontSize: '15px' }} />Last Week
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <CiTimer style={{ marginRight: '10px', fontWeight: 'bold', fontSize: '15px' }} />Last Month
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <CiTimer style={{ marginRight: '10px', fontWeight: 'bold', fontSize: '15px' }} />Last Year
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </Button>
    )
}

export default Card;