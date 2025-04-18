import { Button } from "@mui/material";

import { FaCircleUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Card from '../Card'
import { Chart } from "react-google-charts";

import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import { FaEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { Mycontext } from "../../App";
import Sidebar from "../Sidebar";

const Dashboard = () => {

    const context = React.useContext(Mycontext);


    const [show, setshow] = React.useState('');
    const [category, setcategory] = React.useState('');

    const handleChangeShow = (event) => {
        setshow(event.target.value);
    };

    const handleChangeCategory = (event) => {
        setcategory(event.target.value);
    }

    const data = [
        ["Year", "Value"],
        ["2013", 30],
        ["2014", 20],
        ["2015", 30],
        ["2016", 20]
    ];

    const options = {
        backgroundColor: 'transparent',
        chartArea: { width: '100%', height: '100%' }
    };

     
        React.useEffect(()=>{
            context.setheadershow(true);
        },[])
    return (
        <div className="flex w-full body_ mt-[60px]">

            <Sidebar />

            <div className={`${context.toggle === true ? 'active' : 'notactive'} md:w-[78%] bg-gray-200  ml-[20%] main-content p-4 flex flex-col overflow-hidden`}>
                <div className="flex items-center">
                    <div className="md:w-[68%] flex flex-wrap  gap-1 ">
                        <Card logo={<FaCircleUser />} colors={['#15803D', '#4ADE80']} />
                        <Card logo={<FaCartShopping />} colors={['#a16207', '#facc15']} />
                        <Card logo={<FaBagShopping />} colors={['#1D4ED8', '#60A5FA']} />
                        <Card logo={<BsStars />} colors={['#BE185D', '#F472B6']} />
                    </div>
                    <div className="md:w-[32%] h-[97%] bg-blue-600 rounded-[10px] p-8 text-white flex flex-col gap-10">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-2">
                                <span className="font-semibold">Total Sales</span>
                                <span className="font-bold text-[30px]">$3,787,681.00</span>
                                <span className="opacity-[0.7]">$3,578.90 in last month</span>
                            </div>
                            <Button style={{ height: '40px', width: '40px', borderRadius: '50%', minHeight: '40px', minWidth: '40px' }}><HiOutlineDotsVertical style={{ fontWeight: 'bold', color: 'white', fontSize: '25px' }} />
                            </Button>
                        </div>
                        <div>

                            <Chart
                                chartType="PieChart"
                                data={data}
                                options={options}
                                width={"100%"}
                                height={"200px"}
                            />
                        </div>
                    </div>
                </div>
                <div className="md:w-[99%] bg-white mt-4 p-4 ml-[8px] rounded-[10px]">
                    <h3 className="font-semibold text-[25px] mb-4">Best Selling Products</h3>
                    <div className="flex items-center gap-10">

                        <FormControl style={{ width: '25%' }}>
                            <h1 className="text-[25px] mb-4">Show By</h1>
                            <Select
                                // labelId="demo-simple-select-label"
                                id='show-select'
                                value={show}
                                onChange={handleChangeShow}
                                displayEmpty
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl style={{ width: '24%' }}>
                            <h1 className="text-[25px] mb-4">Category By</h1>
                            <Select
                                id='category-select'
                                value={category}
                                onChange={handleChangeCategory}
                                displayEmpty
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="border border-gray-50 w-full mt-4 ">
                            <thead>
                                <tr className="bg-blue-600 text-white">
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[7%] p-4">UID</th>
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[30% p-4 pl-16]">PRODUCT</th>
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[9%] p-4">CATEGORY</th>
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[6%] p-4">BRAND</th>
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[6%] p-4">PRICE</th>
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[9%] p-4">STOCK</th>
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[7%] p-4">RATING</th>
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[6%] p-4">ORDER</th>
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[6%] p-4">SALES</th>
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[14%] p-4">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd:bg-gray-100 even:bg-white">
                                    <td style={{ border: '1px solid black' }} className="w-[7%] p-4">#1</td>
                                    <td style={{ border: '1px solid black' }} className="w-[30%] p-4">
                                        <div className="flex items-center">
                                            <div className="h-[70px] w-[70px] flex justify-center items-center">
                                                <img height={'50px'} className="rounded-[10px] border border-gray-200 bg-white shadow w-100" width={'50px'} src="https://mironcoder-hotash.netlify.app/images/product/01.webp" />
                                            </div>
                                            <div>
                                                <h1>Tops and skirt set for Female...</h1>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid black' }} className="w-[9%] p-4">womans</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">richman</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">
                                        <div className="flex flex-col">
                                            <del>$21.00</del>
                                            <span className="text-red-800">$20.00</span>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid black' }} className="w-[9%] p-4"><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></td>
                                    <td style={{ border: '1px solid black' }} className="w-[7%] p-4">3.5(16)</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">380</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">$38k</td>
                                    <td style={{ border: '1px solid black' }} className="w-[14%] p-4">
                                        <div className="flex items-center gap-2">
                                            <Button style={{ backgroundColor: '#e9d5ff', minWidth: '40px' }}><FaEye style={{ color: 'purple', fontSize: '20px' }} /></Button>
                                            <Button style={{ backgroundColor: '#bbf7d0', minWidth: '40px' }}><FaPencil style={{ color: 'green', fontSize: '20px' }} /></Button>
                                            <Button style={{ backgroundColor: '#fecaca', minWidth: '40px' }}><MdDelete style={{ color: 'red', fontSize: '20px' }} /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="odd:bg-gray-100 even:bg-white">
                                    <td style={{ border: '1px solid black' }} className="w-[7%] p-4">#1</td>
                                    <td style={{ border: '1px solid black' }} className="w-[30%] p-4">
                                        <div className="flex items-center">
                                            <div className="h-[70px] w-[70px] flex justify-center items-center">
                                                <img height={'50px'} className="rounded-[10px] border border-gray-200 bg-white shadow w-100" width={'50px'} src="https://mironcoder-hotash.netlify.app/images/product/01.webp" />
                                            </div>
                                            <div>
                                                <h1>Tops and skirt set for Female...</h1>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid black' }} className="w-[9%] p-4">womans</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">richman</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">
                                        <div className="flex flex-col">
                                            <del>$21.00</del>
                                            <span className="text-red-800">$20.00</span>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid black' }} className="w-[9%] p-4"><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></td>
                                    <td style={{ border: '1px solid black' }} className="w-[7%] p-4">3.5(16)</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">380</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">$38k</td>
                                    <td style={{ border: '1px solid black' }} className="w-[14%] p-4">
                                        <div className="flex items-center gap-2">
                                            <Button style={{ backgroundColor: '#e9d5ff', minWidth: '40px' }}><FaEye style={{ color: 'purple', fontSize: '20px' }} /></Button>
                                            <Button style={{ backgroundColor: '#bbf7d0', minWidth: '40px' }}><FaPencil style={{ color: 'green', fontSize: '20px' }} /></Button>
                                            <Button style={{ backgroundColor: '#fecaca', minWidth: '40px' }}><MdDelete style={{ color: 'red', fontSize: '20px' }} /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="odd:bg-gray-100 even:bg-white">
                                    <td style={{ border: '1px solid black' }} className="w-[7%] p-4">#1</td>
                                    <td style={{ border: '1px solid black' }} className="w-[30%] p-4">
                                        <div className="flex items-center">
                                            <div className="h-[70px] w-[70px] flex justify-center items-center">
                                                <img height={'50px'} className="rounded-[10px] border border-gray-200 bg-white shadow w-100" width={'50px'} src="https://mironcoder-hotash.netlify.app/images/product/01.webp" />
                                            </div>
                                            <div>
                                                <h1>Tops and skirt set for Female...</h1>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid black' }} className="w-[9%] p-4">womans</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">richman</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">
                                        <div className="flex flex-col">
                                            <del>$21.00</del>
                                            <span className="text-red-800">$20.00</span>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid black' }} className="w-[9%] p-4"><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></td>
                                    <td style={{ border: '1px solid black' }} className="w-[7%] p-4">3.5(16)</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">380</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">$38k</td>
                                    <td style={{ border: '1px solid black' }} className="w-[14%] p-4">
                                        <div className="flex items-center gap-2">
                                            <Button style={{ backgroundColor: '#e9d5ff', minWidth: '40px' }}><FaEye style={{ color: 'purple', fontSize: '20px' }} /></Button>
                                            <Button style={{ backgroundColor: '#bbf7d0', minWidth: '40px' }}><FaPencil style={{ color: 'green', fontSize: '20px' }} /></Button>
                                            <Button style={{ backgroundColor: '#fecaca', minWidth: '40px' }}><MdDelete style={{ color: 'red', fontSize: '20px' }} /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="odd:bg-gray-100 even:bg-white">
                                    <td style={{ border: '1px solid black' }} className="w-[7%] p-4">#1</td>
                                    <td style={{ border: '1px solid black' }} className="w-[30%] p-4">
                                        <div className="flex items-center">
                                            <div className="h-[70px] w-[70px] flex justify-center items-center">
                                                <img height={'50px'} className="rounded-[10px] border border-gray-200 bg-white shadow w-100" width={'50px'} src="https://mironcoder-hotash.netlify.app/images/product/01.webp" />
                                            </div>
                                            <div>
                                                <h1>Tops and skirt set for Female...</h1>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid black' }} className="w-[9%] p-4">womans</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">richman</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">
                                        <div className="flex flex-col">
                                            <del>$21.00</del>
                                            <span className="text-red-800">$20.00</span>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid black' }} className="w-[9%] p-4"><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></td>
                                    <td style={{ border: '1px solid black' }} className="w-[7%] p-4">3.5(16)</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">380</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">$38k</td>
                                    <td style={{ border: '1px solid black' }} className="w-[14%] p-4">
                                        <div className="flex items-center gap-2">
                                            <Button style={{ backgroundColor: '#e9d5ff', minWidth: '40px' }}><FaEye style={{ color: 'purple', fontSize: '20px' }} /></Button>
                                            <Button style={{ backgroundColor: '#bbf7d0', minWidth: '40px' }}><FaPencil style={{ color: 'green', fontSize: '20px' }} /></Button>
                                            <Button style={{ backgroundColor: '#fecaca', minWidth: '40px' }}><MdDelete style={{ color: 'red', fontSize: '20px' }} /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="odd:bg-gray-100 even:bg-white">
                                    <td style={{ border: '1px solid black' }} className="w-[7%] p-4">#1</td>
                                    <td style={{ border: '1px solid black' }} className="w-[30%] p-4">
                                        <div className="flex items-center">
                                            <div className="h-[70px] w-[70px] flex justify-center items-center">
                                                <img height={'50px'} className="rounded-[10px] border border-gray-200 bg-white shadow w-100" width={'50px'} src="https://mironcoder-hotash.netlify.app/images/product/01.webp" />
                                            </div>
                                            <div>
                                                <h1>Tops and skirt set for Female...</h1>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid black' }} className="w-[9%] p-4">womans</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">richman</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">
                                        <div className="flex flex-col">
                                            <del>$21.00</del>
                                            <span className="text-red-800">$20.00</span>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid black' }} className="w-[9%] p-4"><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></td>
                                    <td style={{ border: '1px solid black' }} className="w-[7%] p-4">3.5(16)</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">380</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">$38k</td>
                                    <td style={{ border: '1px solid black' }} className="w-[14%] p-4">
                                        <div className="flex items-center gap-2">
                                            <Button style={{ backgroundColor: '#e9d5ff', minWidth: '40px' }}><FaEye style={{ color: 'purple', fontSize: '20px' }} /></Button>
                                            <Button style={{ backgroundColor: '#bbf7d0', minWidth: '40px' }}><FaPencil style={{ color: 'green', fontSize: '20px' }} /></Button>
                                            <Button style={{ backgroundColor: '#fecaca', minWidth: '40px' }}><MdDelete style={{ color: 'red', fontSize: '20px' }} /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="odd:bg-gray-100 even:bg-white">
                                    <td style={{ border: '1px solid black' }} className="w-[7%] p-4">#1</td>
                                    <td style={{ border: '1px solid black' }} className="w-[30%] p-4">
                                        <div className="flex items-center">
                                            <div className="h-[70px] w-[70px] flex justify-center items-center">
                                                <img height={'50px'} className="rounded-[10px] border border-gray-200 bg-white shadow w-100" width={'50px'} src="https://mironcoder-hotash.netlify.app/images/product/01.webp" />
                                            </div>
                                            <div>
                                                <h1>Tops and skirt set for Female...</h1>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid black' }} className="w-[9%] p-4">womans</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">richman</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">
                                        <div className="flex flex-col">
                                            <del>$21.00</del>
                                            <span className="text-red-800">$20.00</span>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid black' }} className="w-[9%] p-4"><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></td>
                                    <td style={{ border: '1px solid black' }} className="w-[7%] p-4">3.5(16)</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">380</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">$38k</td>
                                    <td style={{ border: '1px solid black' }} className="w-[14%] p-4">
                                        <div className="flex items-center gap-2">
                                            <Button style={{ backgroundColor: '#e9d5ff', minWidth: '40px' }}><FaEye style={{ color: 'purple', fontSize: '20px' }} /></Button>
                                            <Button style={{ backgroundColor: '#bbf7d0', minWidth: '40px' }}><FaPencil style={{ color: 'green', fontSize: '20px' }} /></Button>
                                            <Button style={{ backgroundColor: '#fecaca', minWidth: '40px' }}><MdDelete style={{ color: 'red', fontSize: '20px' }} /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="odd:bg-gray-100 even:bg-white">
                                    <td style={{ border: '1px solid black' }} className="w-[7%] p-4">#1</td>
                                    <td style={{ border: '1px solid black' }} className="w-[30%] p-4">
                                        <div className="flex items-center">
                                            <div className="h-[70px] w-[70px] flex justify-center items-center">
                                                <img height={'50px'} className="rounded-[10px] border border-gray-200 bg-white shadow w-100" width={'50px'} src="https://mironcoder-hotash.netlify.app/images/product/01.webp" />
                                            </div>
                                            <div>
                                                <h1>Tops and skirt set for Female...</h1>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid black' }} className="w-[9%] p-4">womans</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">richman</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">
                                        <div className="flex flex-col">
                                            <del>$21.00</del>
                                            <span className="text-red-800">$20.00</span>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid black' }} className="w-[9%] p-4"><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></td>
                                    <td style={{ border: '1px solid black' }} className="w-[7%] p-4">3.5(16)</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">380</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">$38k</td>
                                    <td style={{ border: '1px solid black' }} className="w-[14%] p-4">
                                        <div className="flex items-center gap-2">
                                            <Button style={{ backgroundColor: '#e9d5ff', minWidth: '40px' }}><FaEye style={{ color: 'purple', fontSize: '20px' }} /></Button>
                                            <Button style={{ backgroundColor: '#bbf7d0', minWidth: '40px' }}><FaPencil style={{ color: 'green', fontSize: '20px' }} /></Button>
                                            <Button style={{ backgroundColor: '#fecaca', minWidth: '40px' }}><MdDelete style={{ color: 'red', fontSize: '20px' }} /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="odd:bg-gray-100 even:bg-white">
                                    <td style={{ border: '1px solid black' }} className="w-[7%] p-4">#1</td>
                                    <td style={{ border: '1px solid black' }} className="w-[30%] p-4">
                                        <div className="flex items-center">
                                            <div className="h-[70px] w-[70px] flex justify-center items-center">
                                                <img height={'50px'} className="rounded-[10px] border border-gray-200 bg-white shadow w-100" width={'50px'} src="https://mironcoder-hotash.netlify.app/images/product/01.webp" />
                                            </div>
                                            <div>
                                                <h1>Tops and skirt set for Female...</h1>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid black' }} className="w-[9%] p-4">womans</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">richman</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">
                                        <div className="flex flex-col">
                                            <del>$21.00</del>
                                            <span className="text-red-800">$20.00</span>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid black' }} className="w-[9%] p-4"><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></td>
                                    <td style={{ border: '1px solid black' }} className="w-[7%] p-4">3.5(16)</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">380</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">$38k</td>
                                    <td style={{ border: '1px solid black' }} className="w-[14%] p-4">
                                        <div className="flex items-center gap-2">
                                            <Button style={{ backgroundColor: '#e9d5ff', minWidth: '40px' }}><FaEye style={{ color: 'purple', fontSize: '20px' }} /></Button>
                                            <Button style={{ backgroundColor: '#bbf7d0', minWidth: '40px' }}><FaPencil style={{ color: 'green', fontSize: '20px' }} /></Button>
                                            <Button style={{ backgroundColor: '#fecaca', minWidth: '40px' }}><MdDelete style={{ color: 'red', fontSize: '20px' }} /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="odd:bg-gray-100 even:bg-white">
                                    <td style={{ border: '1px solid black' }} className="w-[7%] p-4">#1</td>
                                    <td style={{ border: '1px solid black' }} className="w-[30%] p-4">
                                        <div className="flex items-center">
                                            <div className="h-[70px] w-[70px] flex justify-center items-center">
                                                <img height={'50px'} className="rounded-[10px] border border-gray-200 bg-white shadow w-100" width={'50px'} src="https://mironcoder-hotash.netlify.app/images/product/01.webp" />
                                            </div>
                                            <div>
                                                <h1>Tops and skirt set for Female...</h1>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid black' }} className="w-[9%] p-4">womans</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">richman</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">
                                        <div className="flex flex-col">
                                            <del>$21.00</del>
                                            <span className="text-red-800">$20.00</span>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid black' }} className="w-[9%] p-4"><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></td>
                                    <td style={{ border: '1px solid black' }} className="w-[7%] p-4">3.5(16)</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">380</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">$38k</td>
                                    <td style={{ border: '1px solid black' }} className="w-[14%] p-4">
                                        <div className="flex items-center gap-2">
                                            <Button style={{ backgroundColor: '#e9d5ff', minWidth: '40px' }}><FaEye style={{ color: 'purple', fontSize: '20px' }} /></Button>
                                            <Button style={{ backgroundColor: '#bbf7d0', minWidth: '40px' }}><FaPencil style={{ color: 'green', fontSize: '20px' }} /></Button>
                                            <Button style={{ backgroundColor: '#fecaca', minWidth: '40px' }}><MdDelete style={{ color: 'red', fontSize: '20px' }} /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="odd:bg-gray-100 even:bg-white">
                                    <td style={{ border: '1px solid black' }} className="w-[7%] p-4">#1</td>
                                    <td style={{ border: '1px solid black' }} className="w-[30%] p-4">
                                        <div className="flex items-center">
                                            <div className="h-[70px] w-[70px] flex justify-center items-center">
                                                <img height={'50px'} className="rounded-[10px] border border-gray-200 bg-white shadow w-100" width={'50px'} src="https://mironcoder-hotash.netlify.app/images/product/01.webp" />
                                            </div>
                                            <div>
                                                <h1>Tops and skirt set for Female...</h1>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid black' }} className="w-[9%] p-4">womans</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">richman</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">
                                        <div className="flex flex-col">
                                            <del>$21.00</del>
                                            <span className="text-red-800">$20.00</span>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid black' }} className="w-[9%] p-4"><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></td>
                                    <td style={{ border: '1px solid black' }} className="w-[7%] p-4">3.5(16)</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">380</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">$38k</td>
                                    <td style={{ border: '1px solid black' }} className="w-[14%] p-4">
                                        <div className="flex items-center gap-2">
                                            <Button style={{ backgroundColor: '#e9d5ff', minWidth: '40px' }}><FaEye style={{ color: 'purple', fontSize: '20px' }} /></Button>
                                            <Button style={{ backgroundColor: '#bbf7d0', minWidth: '40px' }}><FaPencil style={{ color: 'green', fontSize: '20px' }} /></Button>
                                            <Button style={{ backgroundColor: '#fecaca', minWidth: '40px' }}><MdDelete style={{ color: 'red', fontSize: '20px' }} /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="odd:bg-gray-100 even:bg-white">
                                    <td style={{ border: '1px solid black' }} className="w-[7%] p-4">#1</td>
                                    <td style={{ border: '1px solid black' }} className="w-[30%] p-4">
                                        <div className="flex items-center">
                                            <div className="h-[70px] w-[70px] flex justify-center items-center">
                                                <img height={'50px'} className="rounded-[10px] border border-gray-200 bg-white shadow w-100" width={'50px'} src="https://mironcoder-hotash.netlify.app/images/product/01.webp" />
                                            </div>
                                            <div>
                                                <h1>Tops and skirt set for Female...</h1>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid black' }} className="w-[9%] p-4">womans</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">richman</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">
                                        <div className="flex flex-col">
                                            <del>$21.00</del>
                                            <span className="text-red-800">$20.00</span>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid black' }} className="w-[9%] p-4"><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></td>
                                    <td style={{ border: '1px solid black' }} className="w-[7%] p-4">3.5(16)</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">380</td>
                                    <td style={{ border: '1px solid black' }} className="w-[6%] p-4">$38k</td>
                                    <td style={{ border: '1px solid black' }} className="w-[14%] p-4">
                                        <div className="flex items-center gap-2">
                                            <Button style={{ backgroundColor: '#e9d5ff', minWidth: '40px' }}><FaEye style={{ color: 'purple', fontSize: '20px' }} /></Button>
                                            <Button style={{ backgroundColor: '#bbf7d0', minWidth: '40px' }}><FaPencil style={{ color: 'green', fontSize: '20px' }} /></Button>
                                            <Button style={{ backgroundColor: '#fecaca', minWidth: '40px' }}><MdDelete style={{ color: 'red', fontSize: '20px' }} /></Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex justify-end items-center">
                            <Pagination count={10} color="primary" showFirstButton showLastButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;