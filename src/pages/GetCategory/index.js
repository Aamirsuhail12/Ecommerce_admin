import { Button, withTheme } from "@mui/material";

import * as React from 'react';
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { Mycontext } from "../../App";
import Sidebar from "../../components/Sidebar";
import { deletes, getAll } from "../../RestApi";
import { Link } from "react-router";

const GetCategory = () => {

    const context = React.useContext(Mycontext);
    const [categorylist, setCategorylist] = React.useState([]);
    const [totalPage, setTotalPage] = React.useState(1);


    const categoryList = async () => {

        context.setProgress(20);
        try {
            const response = await getAll('http://localhost:5000/categories?page=1&PerPage=5');
            setCategorylist(response.data.categories);
            setTotalPage(response.data.totalPage);
            context.setProgress(100);
            console.log(response.data.categories);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteCategory = async (id) => {
        try {

            const response = await deletes(`http://localhost:5000/categories/${id}`)
            console.log(response.data);
            categoryList();

        } catch (error) {
            console.log('Error in deleting category', error);
        }
    }

    const fetchData = async (e, page) => {
        context.setProgress(20);
        try {
            const response = await getAll(`http://localhost:5000/categories?page=${page}&PerPage=5`);
            setCategorylist(response.data.categories);
            context.setProgress(100);
            console.log(page);
        } catch (error) {
            console.log('Error in fetching data', error);
        }
    }

    React.useEffect(() => {
        categoryList();
    }, [])


    return (
        <div className="flex w-full body_ mt-[60px]">

            <Sidebar />

            <div className={`${context.toggle === true ? 'active' : 'notactive'} md:w-[78%] bg-gray-200  ml-[20%] main-content p-4 flex flex-col overflow-hidden`}>

                <div className="w-[99%] bg-white mt-4 p-4 ml-[8px] rounded-[10px]">
                    <h3 className="font-semibold text-[25px] mb-4">Category List</h3>

                    <div className="w-full overflow-x-auto">
                        <table className="border border-gray-50 w-full mt-4 border-collapse">
                            <thead>
                                <tr className="bg-blue-600 text-white">
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[25%] p-4">IMAGE</th>
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[25%] p-4">CATEGORY</th>
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[25%] p-4">COLOR</th>
                                    <th style={{ border: '1px solid black', textAlign: 'start' }} className="w-[25%] p-4">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    categorylist.map((item, index) => {
                                        return <tr className="odd:bg-gray-100 even:bg-white" key={index}>
                                            <td style={{ border: '1px solid black' }} className="w-[25%] p-4">{<img src={item.images[0]} alt="Image not found" className="h-[70px] w-[70px] m-auto" />}</td>

                                            <td style={{ border: '1px solid black' }} className="w-[25%] p-4">{item.name}</td>
                                            <td style={{ border: '1px solid black' }} className="w-[25%] p-4">{item.color}</td>

                                            <td style={{ border: '1px solid black' }} className="w-[25%] p-4">
                                                <div className="flex items-center gap-2">
                                                    <Link to={`/category/edit/${item._id}`}>  <Button style={{ backgroundColor: '#bbf7d0', minWidth: '40px' }}><FaPencil style={{ color: 'green', fontSize: '20px' }} /></Button></Link>
                                                    <Button onClick={() => {
                                                        deleteCategory(item._id)
                                                    }} style={{ backgroundColor: '#fecaca', minWidth: '40px' }}><MdDelete style={{ color: 'red', fontSize: '20px' }} /></Button>

                                                </div>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="flex justify-end items-center">
                            <Pagination count={totalPage} color="primary" showFirstButton showLastButton onChange={fetchData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetCategory;