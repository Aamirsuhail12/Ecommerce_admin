import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdBrandingWatermark } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { PiOctagonBold } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { FaReply } from "react-icons/fa6";
import Rating from '@mui/material/Rating';
import Sidebar from "../../components/Sidebar";
import { Mycontext } from "../../App";

const ProductView = () => {

    var settingslrg = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    var settingssml = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true
    };

    const context = useContext(Mycontext);
    useEffect(()=>{
        context.setheadershow(true);
    },[])
    return (
        <div className="flex w-full body_ mt-[60px]">

            <Sidebar />

            <div className={`${context.toggle === true ? 'active' : 'notactive'} md:w-[78%] bg-gray-200  ml-[20%] main-content p-4 flex flex-col overflow-hidden`}>
                <div className="flex justify-between items-center bg-white p-4 rounded-[10px]">
                    <h2 className="text-[20px] font-semibold">Product View</h2>
                    <div className="flex justify-center items-center gap-2">
                        <Button style={{ backgroundColor: '#E5E7EB', color: 'black', textTransform: 'none' }}>Dashboard</Button>
                        <span>/</span>
                        <Button style={{ backgroundColor: '#E5E7EB', color: 'black', textTransform: 'none' }}>Products</Button>
                        <span>/</span>
                        <Button style={{ backgroundColor: '#E5E7EB', color: 'black', textTransform: 'none' }}>Product View</Button>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start mt-8 bg-white p-4 rounded-[10px] gap-3">
                    <div className="w-full flex justify-center items-start">
                        <div className="md:w-5/12">
                            <h2 className="font-semibold text-[20px] mb-[10px]">Product Gallery</h2>
                            <Slider {...settingslrg}>
                                <div className="border-2 border-dashed border-gray-300  rounded-[10px] p-12">
                                    <img className="m-auto h-[350px]" src="https://tse2.mm.bing.net/th?id=OIP.PgKv0MzijnrhOoi1sBVBgwHaK0&pid=Api&P=0&h=180" />
                                </div>
                                <div className="border-2 border-dashed border-gray-300  rounded-[10px] p-12">
                                    <img className="m-auto h-[350px]" src="https://tse2.mm.bing.net/th?id=OIP.PgKv0MzijnrhOoi1sBVBgwHaK0&pid=Api&P=0&h=180" />
                                </div>
                                <div className="border-2 border-dashed border-gray-300  rounded-[10px] p-12">
                                    <img className="m-auto h-[350px]" src="https://tse2.mm.bing.net/th?id=OIP.PgKv0MzijnrhOoi1sBVBgwHaK0&pid=Api&P=0&h=180" />
                                </div>
                            </Slider>
                            <Slider {...settingssml} >
                                <div className="p-4">
                                    <div className="border-2 border-dashed border-gray-300  rounded-[10px] p-[20px] ">
                                        <img className="h-[70px] m-auto" src="https://tse2.mm.bing.net/th?id=OIP.PgKv0MzijnrhOoi1sBVBgwHaK0&pid=Api&P=0&h=180" />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="border-2 border-dashed border-gray-300  rounded-[10px] p-[20px] ">
                                        <img className="h-[70px] m-auto" src="https://tse2.mm.bing.net/th?id=OIP.PgKv0MzijnrhOoi1sBVBgwHaK0&pid=Api&P=0&h=180" />
                                    </div >
                                </div>
                                <div className="p-4">
                                    <div className="border-2 border-dashed border-gray-300  rounded-[10px] p-[20px]">
                                        <img className="h-[70px] m-auto" src="https://tse2.mm.bing.net/th?id=OIP.PgKv0MzijnrhOoi1sBVBgwHaK0&pid=Api&P=0&h=180" />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="border-2 border-dashed border-gray-300  rounded-[10px] p-[20px]">
                                        <img className="h-[70px] m-auto" src="https://tse2.mm.bing.net/th?id=OIP.PgKv0MzijnrhOoi1sBVBgwHaK0&pid=Api&P=0&h=180" />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="border-2 border-dashed border-gray-300  rounded-[10px] p-[20px]">
                                        <img className="h-[70px] m-auto" src="https://tse2.mm.bing.net/th?id=OIP.PgKv0MzijnrhOoi1sBVBgwHaK0&pid=Api&P=0&h=180" />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="border-2 border-dashed border-gray-300  rounded-[10px] p-[20px]">
                                        <img className="h-[70px] m-auto" src="https://tse2.mm.bing.net/th?id=OIP.PgKv0MzijnrhOoi1sBVBgwHaK0&pid=Api&P=0&h=180" />
                                    </div>
                                </div>
                            </Slider>
                        </div>

                        <div className="md:w-7/12 bg-white px-16 rounded-[10px]">
                            <h2 className="text-2xl font-semibold mb-2">Product Details</h2>
                            <h1 className="text-xl font-semibold text-gray-700">
                                Formal suits for men wedding slim fit 3 piece dress business party jacket
                            </h1>

                            <table className="w-full table-fixed mt-4 ">
                                <tbody>
                                    {/* Brand */}
                                    <tr className="border-b">
                                        <td className="p-2 w-2/5 flex items-center gap-2 font-medium text-gray-600">
                                            <MdBrandingWatermark style={{ fontSize: '25px' }} /> Brand
                                        </td>
                                        <td className="p-2 w-3/5 text-gray-800">Ecstasy</td>
                                    </tr>

                                    {/* Category */}
                                    <tr className="border-b">
                                        <td className="p-2 w-2/5 flex items-center gap-2 font-medium text-gray-600">
                                            <BiCategory style={{ fontSize: '25px' }} /> Category
                                        </td>
                                        <td className="p-2 w-3/5 text-gray-800">Men's</td>
                                    </tr>

                                    {/* Tags */}
                                    <tr className="border-b">
                                        <td className="p-2 w-2/5 flex items-center gap-2 font-medium text-gray-600">
                                            <PiOctagonBold style={{ fontSize: '25px' }} /> Tags
                                        </td>
                                        <td className="p-2 w-3/5">
                                            <div className="flex gap-2 flex-wrap">
                                                {["SUITE", "PARTY", "DRESS", "SMART", "MAN"].map((tag) => (
                                                    <span key={tag} className="bg-gray-200 px-2 py-1 rounded-md text-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Colors */}
                                    <tr className="border-b">
                                        <td className="p-2 w-2/5 flex items-center gap-2 font-medium text-gray-600">
                                            <IoIosColorPalette style={{ fontSize: '25px' }} /> Color
                                        </td>
                                        <td className="p-2 w-3/5">
                                            <div className="flex gap-2">
                                                {["RED", "BLUE", "WHITE"].map((color) => (
                                                    <span key={color} className="bg-gray-300 px-2 py-1 rounded-md text-sm">
                                                        {color}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Size */}
                                    <tr className="border-b">
                                        <td className="p-2 w-2/5 flex items-center gap-2 font-medium text-gray-600">
                                            <FaShoppingCart style={{ fontSize: '25px' }} /> Size
                                        </td>
                                        <td className="p-2 w-3/5 text-gray-800">(68) Piece</td>
                                    </tr>

                                    {/* Review */}
                                    <tr className="border-b">
                                        <td className="p-2 w-2/5 flex items-center gap-2 font-medium text-gray-600">
                                            <MdOutlineRateReview style={{ fontSize: '50px', fontWeight: 'bold' }} /> Review
                                        </td>
                                        <td className="p-2 w-3/5 text-gray-800">(03) Review</td>
                                    </tr>

                                    {/* Published Date */}
                                    <tr>
                                        <td className="p-2 w-2/5 flex items-center gap-2 font-medium text-gray-600">
                                            <MdDateRange style={{ fontSize: '25px' }} /> Published
                                        </td>
                                        <td className="p-2 w-3/5 text-gray-800">02 Feb 2020</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-semibold text-[20px] mb-[10px]">Product Description</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reprehenderit
                            repellendus expedita esse cupiditate quos doloremque rerum, corrupti ab illum est nihil,
                            voluptate ex dignissimos! Sit voluptatem delectus nam, molestiae, repellendus ab sint
                            quo aliquam debitis amet natus doloremque laudantium? Repudiandae, consequuntur,
                            officiis quidem quo deleniti, autem non laudantium sequi error molestiae ducimus
                            accusamus facere velit consectetur vero dolore natus nihil temporibus aspernatur
                            quia consequatur? Consequuntur voluptate deserunt repellat tenetur debitis molestiae
                            doloribus dicta. In rem illum dolorem atque ratione voluptates asperiores maxime
                            doloremque laudantium magni neque ad quae quos quidem, quaerat rerum ducimus
                            blanditiis reiciendis
                        </p>
                    </div>

                    <div className="w-full">
                        <h1 className="font-semibold text-[20px] mb-[20px]">Rating Analytics</h1>
                        <div className="w-full flex justify-start items-center gap-10 my-4">
                            <span>5 Star</span>
                            <div className="w-[30%] h-[5px] bg-gray-200 rounded-[10px]">
                                <div className="w-[50%] h-[5px] bg-yellow-500 rounded-[10px]"></div>
                            </div>
                            <span>(22)</span>

                        </div>
                        <div className="w-full flex justify-start items-center gap-10 my-4">
                            <span>4 Star</span>
                            <div className="w-[30%] h-[5px] bg-gray-200 rounded-[10px]">
                                <div className="w-[40%] h-[5px] bg-yellow-500 rounded-[10px]"></div>
                            </div>
                            <span>(22)</span>

                        </div><div className="w-full flex justify-start items-center gap-10 my-4">
                            <span>3 Star</span>
                            <div className="w-[30%] h-[5px] bg-gray-200 rounded-[10px]">
                                <div className="w-[70%] h-[5px] bg-yellow-500 rounded-[10px]"></div>
                            </div>
                            <span>(2)</span>

                        </div><div className="w-full flex justify-start items-center gap-10 my-4">
                            <span>2 Star</span>
                            <div className="w-[30%] h-[5px] bg-gray-200 rounded-[10px]">
                                <div className="w-[20%] h-[5px] bg-yellow-500 rounded-[10px]"></div>
                            </div>
                            <span>(3)</span>

                        </div><div className="w-full flex justify-start items-center gap-10 my-4">
                            <span>1 Star</span>
                            <div className="w-[30%] h-[5px] bg-gray-200 rounded-[10px]">
                                <div className="w-[50%] h-[5px] bg-yellow-500 rounded-[10px]"></div>
                            </div>
                            <span>(21)</span>

                        </div><div className="w-full flex justify-start items-center gap-10 my-4">
                            <span>5 Star</span>
                            <div className="w-[30%] h-[5px] bg-gray-200 rounded-[10px]">
                                <div className="w-[10%] h-[5px] bg-yellow-500 rounded-[10px]"></div>
                            </div>
                            <span>(22)</span>

                        </div>
                    </div>

                    <h1 className="mb-[10px] font-semibold text-[20px]">Customer Reviews</h1>
                    <div className="w-full">
                        <div className="bg-gray-200 p-12 rounded-[10px] ">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex justify-start items-center  gap-2 ">
                                    <img className="h-[50px] w-[50px] rounded-[50%] border-2 border-blue-500" src="https://tse2.mm.bing.net/th?id=OIP.H9UYen-_zre2XDocB14GZQHaEK&pid=Api&P=0&h=180" />
                                    <div className="flex flex-col">
                                        <span>Miron Mahmood</span>
                                        <span>25 minutes ago!</span>
                                    </div>
                                </div>
                                <Button style={{
                                    backgroundColor: 'blue', color: 'white', gap: '10px', paddingLeft: '20px', paddingRight: '20px', fontWeight: 'bold', textTransform: 'none', fontSize: '15px'
                                }}><FaReply /> Reply</Button>
                            </div>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                        </div>
                    </div>

                    <div className="w-full flex justify-end items-center my-[20px]">
                        <div className="bg-gray-200 p-12 rounded-[10px] w-[90%]">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex justify-start items-center  gap-2 ">
                                    <img className="h-[50px] w-[50px] rounded-[50%] border-2 border-blue-500" src="https://tse2.mm.bing.net/th?id=OIP.H9UYen-_zre2XDocB14GZQHaEK&pid=Api&P=0&h=180" />
                                    <div className="flex flex-col">
                                        <span>Miron Mahmood</span>
                                        <span>25 minutes ago!</span>
                                    </div>
                                </div>
                                <Button style={{
                                    backgroundColor: 'blue', color: 'white', gap: '10px', paddingLeft: '20px', paddingRight: '20px', fontWeight: 'bold', textTransform: 'none', fontSize: '15px'
                                }}><FaReply /> Reply</Button>
                            </div>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                        </div>
                    </div>


                    <div className="w-full flex justify-end items-center my-[20px]">
                        <div className="bg-gray-200 p-12 rounded-[10px] w-[90%]">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex justify-start items-center  gap-2 ">
                                    <img className="h-[50px] w-[50px] rounded-[50%] border-2 border-blue-500" src="https://tse2.mm.bing.net/th?id=OIP.H9UYen-_zre2XDocB14GZQHaEK&pid=Api&P=0&h=180" />
                                    <div className="flex flex-col">
                                        <span>Miron Mahmood</span>
                                        <span>25 minutes ago!</span>
                                    </div>
                                </div>
                                <Button style={{
                                    backgroundColor: 'blue', color: 'white', gap: '10px', paddingLeft: '20px', paddingRight: '20px', fontWeight: 'bold', textTransform: 'none', fontSize: '15px'
                                }}><FaReply /> Reply</Button>
                            </div>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="bg-gray-200 p-12 rounded-[10px] ">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex justify-start items-center  gap-2 ">
                                    <img className="h-[50px] w-[50px] rounded-[50%] border-2 border-blue-500" src="https://tse2.mm.bing.net/th?id=OIP.H9UYen-_zre2XDocB14GZQHaEK&pid=Api&P=0&h=180" />
                                    <div className="flex flex-col">
                                        <span>Miron Mahmood</span>
                                        <span>25 minutes ago!</span>
                                    </div>
                                </div>
                                <Button style={{
                                    backgroundColor: 'blue', color: 'white', gap: '10px', paddingLeft: '20px', paddingRight: '20px', fontWeight: 'bold', textTransform: 'none', fontSize: '15px'
                                }}><FaReply /> Reply</Button>
                            </div>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                        </div>
                    </div>

                    <h1 className="my-[20px] font-semibold text-[20px]">Review Reply Form</h1>
                    <textarea placeholder="write here" className="w-full h-[200px] outline-none border-2 border-gray-300 bg-gray-200 rounded-[10px] p-4"></textarea>
                    <Button style={{ backgroundColor: 'blue', color: 'white', textTransform: 'none', width: '100%', fontWeight: 'bold', marginTop: '10px', marginBottom: '10px', fontSize: '20px', borderRadius: '20px' }}>Drop Your Replies</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductView;