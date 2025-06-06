import { Button } from "@mui/material";

import { FaCircleUser, FaRoad } from "react-icons/fa6";
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
import { FaEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { Mycontext } from "../../App";
import Sidebar from "../Sidebar";
import { Link } from "react-router";

import { useState } from "react";
import { getAll, deletes } from "../../RestApi";

const Dashboard = () => {

    const context = React.useContext(Mycontext);


    const [show, setshow] = React.useState('');
    const [category, setcategory] = React.useState('');
    const [products, setProducts] = useState([]);
    const [totalPage, setTotalPage] = useState(null);

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


    const getProducts = async () => {

        try {
            const response = await getAll('http://localhost:5000/products?page=1')
            setTotalPage(response.data.totalPage)
            console.log('products', response.data.products);
            setProducts(response.data.products);
        } catch (error) {
            console.log('Error in Getting Products.', error);
        }
    }

    const fetchData = async (e, page) => {

        try {
            const response = await getAll(`http://localhost:5000/products?page=${page}&PerPage=4`)
            setTotalPage(response.data.totalPage)
            setProducts(response.data.products);
        } catch (error) {
            console.log('Error in Pagination', error);
        }
    }
    const DeleteProduct = async (id) => {
        try {
            const response = await deletes(`http://localhost:5000/products/${id}`);
            console.log(response.data);
            getProducts();
        } catch (error) {
            console.log('Error in deleting product.', error)
        }
    }

    React.useEffect(() => {
        context.setheadershow(true);
        getProducts();
    }, [])
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

                    <div className="w-full overflow-x-auto relative">
                        <table className="border border-gray-50 w-full mt-4 border-collapse">
                            <thead>
                                <tr className="bg-blue-600 text-white">
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[10%] p-4">PRODUCT</th>
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[5%] p-4">CATEGORY</th>
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[5%] p-4">SUB CATEGORY</th>
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[5%] p-4">BRAND</th>
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[5%] p-4">PRICE</th>
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[5%] p-4">RATING</th>
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[15%] p-4">RAM</th>
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[15%] p-4">WEIGHT</th>
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[15%] p-4">SIZE</th>
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[20%] p-4">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((item, index) => {
                                        return <tr className="odd:bg-gray-100 even:bg-white" key={index}>
                                            <td style={{ border: '1px solid black' }} className="w-[10%] p-4">{item.name}</td>

                                            <td style={{ border: '1px solid black' }} className="w-[5%] p-4">{item.category.name}</td>
                                            <td style={{ border: '1px solid black' }} className="w-[5%] p-4">{item.subcategory.subcategory}</td>
                                            <td style={{ border: '1px solid black' }} className="w-[5%] p-4">{item.brand}</td>
                                            <td style={{ border: '1px solid black' }} className="w-[5%] p-4">{item.price}</td>
                                            <td style={{ border: '1px solid black' }} className="w-[5%] p-4">{item.rating}</td>
                                            <td style={{ border: '1px solid black' }} className="w-[15%] p-4">
                                                {
                                                    item.RAM && item.RAM.map((mem) => {
                                                        return (
                                                            <div className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full inline-block mr-1 mb-1">{mem}</div>
                                                        )
                                                    })
                                                }
                                            </td>

                                            <td style={{ border: '1px solid black' }} className="w-[15%] p-4">
                                                {
                                                    item.weight && item.weight.map((w) => {
                                                        return (
                                                            <div className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full inline-block mr-1 mb-1">{w}</div>
                                                        )
                                                    })
                                                }
                                            </td>

                                            <td style={{ border: '1px solid black' }} className="w-[15%] p-4">
                                                {
                                                    item.size && item.size.map((s) => {
                                                        return (
                                                            <div className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full inline-block mr-1 mb-1">{s}</div>
                                                        )
                                                    })
                                                }
                                            </td>

                                            <td style={{ border: '1px solid black' }} className="w-[20%] p-4">
                                                <div className="flex items-center gap-2">
                                                    <Link to={`/product/view`}><Button style={{ backgroundColor: '#e9d5ff', minWidth: '40px' }}><FaEye style={{ color: 'purple', fontSize: '20px' }} /></Button></Link>
                                                    <Link to={`/product/edit/${item._id}`}> <Button style={{ backgroundColor: '#bbf7d0', minWidth: '40px' }}><FaPencil style={{ color: 'green', fontSize: '20px' }} /></Button></Link>
                                                    <Button onClick={() => { DeleteProduct(item._id) }} style={{ backgroundColor: '#fecaca', minWidth: '40px' }}><MdDelete style={{ color: 'red', fontSize: '20px' }} /></Button>
                                                </div>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="flex justify-end items-center ">
                            <Pagination count={totalPage} color="primary" showFirstButton showLastButton onChange={fetchData} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard;