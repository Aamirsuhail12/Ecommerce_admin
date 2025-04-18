
import { FiSearch } from "react-icons/fi";

const Searchbox = () => {

    return (
        <div className="flex justify-center items-center  bg-blue-50 h-10 px-2 rounded-[6px]">
            <FiSearch />
            <input type="text" className="ml-2 outline-none bg-transparent" placeholder="Search here..."/>
        </div>
    )
}

export default Searchbox;