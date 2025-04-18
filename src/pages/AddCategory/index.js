

import { useContext, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Mycontext } from "../../App";
import { Button, colors } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

import { create } from "../../RestApi";
import { Link } from "react-router";
const Addcategory = () => {

    const context = useContext(Mycontext);
    const [category, setCategory] = useState({
        name: '',
        images: [],
        color: ''
    })

    const [isloading, setisloading] = useState(false);

    const addCategory = async (e) => {

        e.preventDefault();

        if (category.name === '' || category.images.length === 0 || category.color === '') {

            context.setalertBox({
                open: true,
                msg: 'Please fill all details',
                color: 'error'
            })
            return;
        }
        setisloading(true);
        context.setProgress(20);

        try {
            const response = await create('http://localhost:5000/categories/create', category);
            setisloading(false);
            context.setProgress(100);

            console.log(response.data);
            context.setalertBox({
                open: true,
                color: 'success',
                msg: 'category added successfully....'
            })
            setCategory({
                name: '',
                images: [],
                color: ''
            })
        } catch (error) {
            console.log('Error adding category', error);
            setisloading(false);
            context.setalertBox({
                open: true,
                color: 'error',
                msg: 'category not added....'
            })

        }

    }


    const handleinput = (e) => {
        setCategory({
            ...category,
            [e.target.name]: e.target.name === 'images' ? [e.target.value] : e.target.value
        })
    }
    return (
        <div className="flex w-full  mt-[60px]">

            <Sidebar />

            <div className={`${context.toggle === true ? 'active' : 'notactive'} md:w-[78%] bg-gray-200  ml-[20%] main-content p-4 flex flex-col overflow-hidden`}>
                <div className="flex justify-between items-center bg-white p-4 rounded-[10px]">
                    <h2 className="text-[20px] font-semibold">Add Category</h2>
                    <div className="flex justify-center items-center gap-2">
                        <Button style={{ backgroundColor: '#E5E7EB', color: 'black', textTransform: 'none' }}>Dashboard</Button>
                        <span>/</span>
                        <Link to='/category/list'>
                            <Button style={{ backgroundColor: '#E5E7EB', color: 'black', textTransform: 'none' }}>Category List</Button>
                        </Link>
                    </div>
                </div>

                <div className="bg-white my-8 p-4 rounded-[10px]">
                    <form onSubmit={addCategory}>
                        <div className="my-4">
                            <h1 className="my-2">Category Name</h1>
                            <input type="text" name="name" value={category.name} onChange={handleinput} className="w-full h-[60px] bg-gray-100 outline-none border-2 p-4 rounded-[5px]" />
                        </div>
                        <div className="my-4">
                            <h1 className="my-2">Image Url</h1>
                            <input type="text" name="images" value={category.images} onChange={handleinput} className="w-full h-[60px] bg-gray-100 outline-none border-2 p-4 rounded-[5px]" />
                        </div> <div className="my-4">
                            <h1 className="my-2">Color</h1>
                            <input type="text" name="color" value={category.color} onChange={handleinput} className="w-full h-[60px] bg-gray-100 outline-none border-2 p-4 rounded-[5px]" />
                        </div>
                        <div className="my-4">
                            {
                                isloading === true ?
                                    <Button type="submit" style={{ width: '100%', color: 'white', backgroundColor: 'blue', fontWeight: 'bold' }}>Submit  < CircularProgress size={24} style={{ color: 'white', marginLeft: '10px' }} /></Button> :
                                    <Button type="submit" style={{ width: '100%', color: 'white', backgroundColor: 'blue', fontWeight: 'bold' }}>Submit</Button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addcategory;