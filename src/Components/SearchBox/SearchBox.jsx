import { IoIosSearch } from "react-icons/io";

const SearchBox = (props) => {
    return (
        <div className={`searchBox relative`} style={{width:props.width}}>
            <IoIosSearch size={18} className="absolute top-[10px] left-[10px] text-gray-500"/>
            <input type="text" placeholder={props.placeholder} className="w-full h-[35px] outline-none border border-[rgba(0,0,0,0.2)] focus:border-[rgba(0,0,0,0.4)] rounded-md px-3 pl-8 text-[13px]"/>
        </div>
    );
};

export default SearchBox;