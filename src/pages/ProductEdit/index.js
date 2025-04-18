
import { Button, private_excludeVariablesFromRoot } from "@mui/material";
import { useState } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Sidebar from "../../components/Sidebar";
import { Mycontext } from "../../App";
import { get, getAll, update, uploads } from "../../RestApi";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { ImFilePicture } from "react-icons/im";
import { useNavigate, useParams } from "react-router";


const ProductEdit = () => {

    const { id } = useParams();

    const Redirect = useNavigate();
    const context = React.useContext(Mycontext);
    const [category, setCategory] = useState([]);
    const [isloading, setIsloading] = useState(false);
    const [images_, setImages_] = useState([]);
    const [product, setProduct] = useState({
        name: '',
        description: '',
        images: [],
        brand: '',
        price: 0,
        oldPrice: 0,
        category: '',
        countInStock: 0,
        rating: 0,
        isFeatured: ''
    })


    const handleSubmit = async (e) => {
        e.preventDefault();

        setProduct({
            ...product,
            images: images_
        })
        console.log("Product :", product); // Debugging

        if (
            !product.name ||
            !product.description ||
            !product.images || product.images.length === 0 ||
            !product.brand ||
            Number(product.price) < 0 ||
            Number(product.oldPrice) < 0 ||
            !product.category ||
            Number(product.countInStock) < 0 ||
            Number(product.rating) < 0 ||
            !(product.isFeatured === true || product.isFeatured === false)
        ) {
            context.setalertBox({
                open: true,
                color: "error",
                msg: "Please fill all the details",
            });
            return;
        }


        setIsloading(true);

        try {
            const response = await update(`http://localhost:5000/products/${id}`, product);

            context.setalertBox({
                open: true,
                color: "success",
                msg: "Product Update successfully!",
            });

            setIsloading(false);
            setProduct({
                name: "",
                description: "",
                images: [],
                brand: "",
                price: 0,
                oldPrice: 0,
                category: "",
                countInStock: 0,
                rating: 0,
                isFeatured: "",
            });

            Redirect('/product');
        } catch (error) {
            console.error("Error in product Update:", error);
            setIsloading(false);
        }
    };



    const handleProduct = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleChange1 = (event) => {
        console.log('Category id : ', event.target.value)
        setProduct({ ...product, category: event.target.value });
    };

    const handleChange2 = (event) => {
        setProduct({ ...product, isFeatured: event.target.value });
    };

    const CategoryList = async () => {

        try {
            const response = await getAll('http://localhost:5000/categories?page=-1');
            setCategory(response.data.categories);
            console.log(response.data.categories);
        } catch (error) {
            console.log('Error in getting Category', error);
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
            setProduct({
                ...product,
                images: img
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

    const GetEditProduct = async () => {

        try {

            const response = await get(`http://localhost:5000/products/${id}`)
            console.log("This is response category.", response.data);
            setProduct({ ...product, ...response.data, category: response.data.category._id });
        } catch (error) {

            console.log('Error in Getting Edit Product', error);
        }
    }

    React.useEffect(() => {
        context.setheadershow(true);
        CategoryList();
        GetEditProduct();
    }, [])
    return (
        <div className="flex w-full body_ mt-[60px]">

            <Sidebar />

            <div className={`${context.toggle === true ? 'active' : 'notactive'} md:w-[78%] bg-gray-200  ml-[20%] main-content p-4 flex flex-col overflow-hidden`}>
                <div className="flex justify-between items-center bg-white p-4 rounded-[10px]">
                    <h2 className="text-[20px] font-semibold">Product Edit</h2>
                    <div className="flex justify-center items-center gap-2">
                        <Button style={{ backgroundColor: '#E5E7EB', color: 'black', textTransform: 'none' }}>Dashboard</Button>
                        <span>/</span>
                        <Button style={{ backgroundColor: '#E5E7EB', color: 'black', textTransform: 'none' }}>Products</Button>
                        <span>/</span>
                        <Button style={{ backgroundColor: '#E5E7EB', color: 'black', textTransform: 'none' }}>Product View</Button>
                    </div>
                </div>

                <div className="bg-white my-8 p-4 rounded-[10px]">
                    <h1 className="font-semibold text-[20px]">Basic Information</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="my-4">
                            <h1 className="my-2">Product Name</h1>
                            <input type="text" onChange={handleProduct} name="name" value={product.name} className="w-full h-[70px] bg-gray-100 outline-none border-2 p-4 rounded-[5px]" />
                        </div>
                        <div className="my-4">
                            <h1 className="my-2">Description</h1>
                            <textarea onChange={handleProduct} name='description' value={product.description} className="w-full h-[200px] bg-gray-100 outline-none border-2 rounded-[5px] p-4"></textarea>
                        </div>

                        <div className="flex flex-wrap justify-between items-center gap-3">
                            <div className=" w-[30%]">
                                <h1 className=" text-[20px] my-2">Category</h1>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="category"
                                    value={product.category}
                                    onChange={handleChange1}
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

                            <div className="w-[30%]">
                                <h1 className="text-[20px] my-2">Price</h1>
                                <input type="text" onChange={handleProduct} name='price' value={product.price} className="w-full h-[60px] bg-gray-100 outline-none border-2 p-4 rounded-[5px]" />
                            </div>

                            <div className="w-[30%]">
                                <h1 className="text-[20px] my-2">Old Price</h1>
                                <input type="text" onChange={handleProduct} name='oldPrice' value={product.oldPrice} className="w-full h-[60px] bg-gray-100 outline-none border-2 p-4 rounded-[5px]" />
                            </div>

                            <div className=" w-[30%]">
                                <h1 className=" text-[20px] my-2">Is Featured</h1>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="isfeatured"
                                    value={product.isFeatured}
                                    onChange={handleChange2}
                                    displayEmpty
                                    style={{ width: '100%' }}
                                >
                                    <MenuItem value=""> <em>None</em></MenuItem>
                                    <MenuItem value={true}>true</MenuItem>
                                    <MenuItem value={false}>false</MenuItem>
                                </Select>
                            </div>

                            <div className="w-[30%]">
                                <h1 className="text-[20px] my-2">Product Stock</h1>
                                <input type="text" onChange={handleProduct} name='countInStock' value={product.countInStock} className="w-full h-[60px] bg-gray-100 outline-none border-2 p-4 rounded-[5px]" />
                            </div>

                            <div className="w-[30%]">
                                <h1 className="text-[20px] my-2">Brand</h1>
                                <input type="text" name='brand' onChange={handleProduct} value={product.brand} className="w-full h-[60px] bg-gray-100 outline-none border-2 p-4 rounded-[5px]" />
                            </div>

                        </div>

                        <h1 className="my-4 font-semibold text-[20px]">Ratings</h1>
                        <Rating name="rating" onChange={handleProduct} value={product.rating} precision={0.5} />

                        <h1 className="text-[20px] my-2">Product Images</h1>
                        <div className="relative h-[200px] w-[200px] border-2 border-dashed rounded-[10px] my-4">
                            <input onChange={handleImages} type="file" name="images" className="absolute  w-full h-full z-50 opacity-0" multiple />
                            <div className="flex flex-col justify-center items-center absolute top-[25%] left-[25%]">
                                <ImFilePicture style={{ fontSize: '100px', opacity: '0.5' }} />
                                <h3 className="opacity-[0.5]">Image Upload</h3>
                            </div>
                        </div>

                        {
                            isloading === false ?
                                <Button type="submit" style={{ width: '100%', backgroundColor: 'blue', color: 'white', textTransform: 'none', fontWeight: 'bold', fontSize: '20px' }}>Edit Product</Button> :
                                <Button type="submit" style={{ width: '100%', backgroundColor: 'blue', color: 'white', textTransform: 'none', fontWeight: 'bold', fontSize: '20px' }}>Edit Product   <Box sx={{ display: 'flex' }}>
                                    <CircularProgress size={24} style={{ marginLeft: '10px', color: 'white' }} />
                                </Box>
                                </Button>
                        }
                    </form>
                </div>
            </div>
        </div>


    )
}

export default ProductEdit;