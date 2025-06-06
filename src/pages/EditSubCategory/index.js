

import { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Mycontext } from "../../App";
import { Button } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

import {  get, getAll, update} from "../../RestApi";
import { Link, useNavigate, useParams } from "react-router";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const EditSubCategory = () => {

    const context = useContext(Mycontext);
    const Redirect = useNavigate();

    let {id} = useParams();
    const [category,setCategory] = useState([])

    const [SubCategory, setSubCategory] = useState({
        category: '',
        subcategory: ''
    })

    const [isloading, setisloading] = useState(false);

    const editSubCategory = async (e) => {

        e.preventDefault();
        

        if (SubCategory.category === '' || SubCategory.subcategory === '') {

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
            const response = await update(`http://localhost:5000/subcategory/${id}`, SubCategory);
            setisloading(false);
            context.setProgress(100);

            console.log('This is sub category',response.data);
            context.setalertBox({
                open: true,
                color: 'success',
                msg: 'Sub category update successfully....'
            })
            setSubCategory({
                category: '',
                subcategory: ''
            })

            Redirect('/subcategory/list')
        } catch (error) {
            console.log('Error in updating sub category', error);
            setisloading(false);
            context.setalertBox({
                open: true,
                color: 'error',
                msg: 'sub category not update....'
            })

        }

    }

    const handleinput = (e) => {
        setSubCategory({
            ...SubCategory,
            [e.target.name]: e.target.value
        })
    }

    const GetCategory = async ()=>{
        try {
            const response = await getAll('http://localhost:5000/categories?page=-1')
            setCategory(response.data.categories)
        } catch (error) {
            
            console.log('Error in getting category',error);
        }
    }

    const GetEditSubCategory = async ()=>{
       try {
        
        const response = await get(`http://localhost:5000/subcategory/${id}`)
        setSubCategory({
            category: response.data.category._id,  // assuming response.data.category is an object
            subcategory: response.data.subcategory
          });
        console.log('sub cat',response.data)
       } catch (error) {
        
        console.log('Error in getting editable sub category',error);
       }
    }
    useEffect(()=>{
        GetCategory();
        GetEditSubCategory();
    },[])
    return (
        <div className="flex w-full  mt-[60px]">

            <Sidebar />

            <div className={`${context.toggle === true ? 'active' : 'notactive'} md:w-[78%] bg-gray-200  ml-[20%] main-content p-4 flex flex-col overflow-hidden`}>
                <div className="flex justify-between items-center bg-white p-4 rounded-[10px]">
                    <h2 className="text-[20px] font-semibold">Edit Sub Category</h2>
                    <div className="flex justify-center items-center gap-2">
                        <Button style={{ backgroundColor: '#E5E7EB', color: 'black', textTransform: 'none' }}>Dashboard</Button>
                        <span>/</span>
                        <Link to='/subcategory/list'>
                            <Button style={{ backgroundColor: '#E5E7EB', color: 'black', textTransform: 'none' }}>Sub Category List</Button>
                        </Link>
                    </div>
                </div>

                <div className="bg-white my-8 p-4 rounded-[10px]">
                    <form onSubmit={editSubCategory}>
                        <div className="my-4">
                            <h1 className=" text-[20px] my-2">Category</h1>
                            <Select
                                labelId="demo-simple-select-label"
                                id="category"
                                name="category"
                                value={SubCategory.category}
                                onChange={handleinput}
                                displayEmpty
                                style={{ width: '100%' }}
                            >
                                <MenuItem value=""> <em>None</em></MenuItem>
                                {
                                    category && category.map((item) => {
                                        return <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
                                    })
                                }
                            </Select>
                        </div>
                        <div className="my-4">
                            <h1 className="my-2">SubCategory</h1>
                            <input type="text" name="subcategory" value={SubCategory.subcategory} onChange={handleinput} className="w-full h-[60px] bg-gray-100 outline-none border-2 p-4 rounded-[5px]" />
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

export default EditSubCategory;