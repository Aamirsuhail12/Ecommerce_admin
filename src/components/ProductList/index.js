

import { Button } from "@mui/material";

import * as React from 'react';
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import Pagination from '@mui/material/Pagination';
import { Mycontext } from "../../App";
import Sidebar from "../../components/Sidebar";
import { deletes, getAll } from "../../RestApi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const ProductList = () => {

    const context = React.useContext(Mycontext);
    const [products, setProducts] = useState([]);
    const [totalPage, setTotalPage] = useState(null);
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
    useEffect(() => {
        getProducts();
    }, [])


    return (
        <div className="flex w-full body_ mt-[60px]">

            <Sidebar />

            <div className={`${context.toggle === true ? 'active' : 'notactive'} md:w-[78%] bg-gray-200  ml-[20%] main-content p-4 flex flex-col overflow-hidden`}>

                <div className="w-[99%] bg-white mt-4 p-4 ml-[8px] rounded-[10px]">
                    <h3 className="font-semibold text-[25px] mb-4">Product List</h3>

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
                        <div className="flex justify-end items-center fixed right-8 ">
                            <Pagination count={totalPage} color="primary" showFirstButton showLastButton onChange={fetchData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList;


