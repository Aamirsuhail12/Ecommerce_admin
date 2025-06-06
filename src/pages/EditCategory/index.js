


import { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Mycontext } from "../../App";
import { Button } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

import { get, update } from "../../RestApi";
import { Link, useParams } from "react-router";
import { uploads } from "../../RestApi";
import { ImFilePicture } from "react-icons/im";
const EditCategory = () => {

    let {id} = useParams();
    const context = useContext(Mycontext);
    const [images_,setImages_] = useState([]);
    const [category, setCategory] = useState({
        name: '',
        images: [],
        color: ''
    })

    const [isloading, setisloading] = useState(false);

    const editCategory = async (e) => {

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
            const response = await update(`http://localhost:5000/categories/${id}`, category);
            setisloading(false);
            context.setProgress(100);

            console.log(response.data);
            context.setalertBox({
                open: true,
                color: 'success',
                msg: 'category update successfully....'
            })
            setCategory({
                name: '',
                images: [],
                color: ''
            })
        } catch (error) {
            console.log('Error in updating category', error);
            setisloading(false);
            context.setalertBox({
                open: true,
                color: 'error',
                msg: 'category not update....'
            })

        }

    }

    const handleImages = async (e) => {

        try {
            const form_data = new FormData();
            Array.from(e.target.files).forEach((file) => {
                // console.log('file',file)
                form_data.append('images', file)
            })

            context.setalertBox({
                open: true,
                color: "success",
                msg: "Image uploading....",
            });

            const response = await uploads('http://localhost:5000/uploads', form_data);
            console.log('uploaded Files', response.data.urls);
            const img = [...images_, ...response.data.urls];
            setImages_([...images_, img])
            console.log('images', img)
            setCategory({
                ...category,
                images : img
            })
            context.setalertBox({
                open: true,
                color: "success",
                msg: "Image upload successfully....",
            });
        } catch (error) {
            console.log('Error in uploading images', error);
            context.setalertBox({
                open: true,
                color: "error",
                msg: "Error in Image uploading....",
            });
        }
    }


    const handleinput = (e) => {
        setCategory({
            ...category,
            [e.target.name]: e.target.name === 'images' ? [e.target.value] : e.target.value
        })
    }

    const getEditCategory = async ()=>{
        try {
            const response = await get(`http://localhost:5000/categories/${id}`);
            setCategory(response.data)
        } catch (error) {
            
            console.log('Error in getting editable category',error);
        }
    }
    useEffect(()=>{

        getEditCategory();
    },[])
    return (
        <div className="flex w-full  mt-[60px]">

            <Sidebar />

            <div className={`${context.toggle === true ? 'active' : 'notactive'} md:w-[78%] bg-gray-200  ml-[20%] main-content p-4 flex flex-col overflow-hidden`}>
                <div className="flex justify-between items-center bg-white p-4 rounded-[10px]">
                    <h2 className="text-[20px] font-semibold">Edit Category</h2>
                    <div className="flex justify-center items-center gap-2">
                        <Button style={{ backgroundColor: '#E5E7EB', color: 'black', textTransform: 'none' }}>Dashboard</Button>
                        <span>/</span>
                        <Link to='/category/list'>
                            <Button style={{ backgroundColor: '#E5E7EB', color: 'black', textTransform: 'none' }}>Category List</Button>
                        </Link>
                    </div>
                </div>

                <div className="bg-white my-8 p-4 rounded-[10px]">
                    <form onSubmit={editCategory}>
                        <div className="my-4">
                            <h1 className="my-2">Category Name</h1>
                            <input type="text" name="name" value={category.name} onChange={handleinput} className="w-full h-[60px] bg-gray-100 outline-none border-2 p-4 rounded-[5px]" />
                        </div>
                        <div className="my-4">
                            <h1 className="my-2">Color</h1>
                            <input type="text" name="color" value={category.color} onChange={handleinput} className="w-full h-[60px] bg-gray-100 outline-none border-2 p-4 rounded-[5px]" />
                        </div>
                        <h1 className="my-2">Media and Published</h1>
                        <div className="my-4 flex gap-3">
                            {
                                category.images && category.images.map((item,index)=>{
                                    console.log('item',item)
                                    return(
                                        <div key={index} className="h-[200px] w-[200px] border-2 border-dashed rounded-[10px] my-4">
                                            <img src={item} className="h-full w-full rounded-[10px]"/>
                                        </div>
                                    )
                                })
                            }
                            <div className="relative h-[200px] w-[200px] border-2 border-dashed rounded-[10px] my-4">
                                <input onChange={handleImages} type="file" name="images" className="absolute  w-full h-full z-50 opacity-0" multiple />
                                <div className="flex flex-col justify-center items-center absolute top-[25%] left-[25%]">
                                    <ImFilePicture style={{ fontSize: '100px', opacity: '0.5' }} />
                                    <h3 className="opacity-[0.5]">Image Upload</h3>
                                </div>
                            </div>
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

export default EditCategory;