import { NavLink } from "react-router-dom"
import Modal from "./Modal"
import { FcLike, FcHome } from "react-icons/fc"
import { FaChartLine } from "react-icons/fa"
import { SlBasket } from "react-icons/sl"
import { TiThSmallOutline } from "react-icons/ti";

const HederP = () => {
  return (
    <div className="sm:fixed md:hidden bottom-0 h-[64px] bg-[#F8F7F3] w-full ">
       <div className="flex justify-center gap-5">
        <NavLink
        to="/"
        className="flex flex-col items-center text-sm text-center uppercase transition-all duration-150 ease-lin hover:shadow-lg focus:outline-none hover:text-[#088269]"
        >
        <FcHome className="w-5 h-5" />
        Избранное
      </NavLink>
      {/* Modal ichida inputi bilan  */}
     
      <NavLink
        to="/Lake"
        className="flex flex-col items-center text-sm text-center uppercase transition-all duration-150 ease-lin hover:shadow-lg focus:outline-none hover:text-[#088269]"
        >
        <FcLike className="w-5 h-5" />
        Избранное
      </NavLink>
      <NavLink
        className="flex flex-col items-center text-sm text-center uppercase transition-all duration-150 ease-lin hover:shadow-lg focus:outline-none hover:text-[#088269]"
        to="/tavar"
        >
        <TiThSmallOutline className="w-5 h-5" />
        All
      </NavLink>
      <NavLink
        className="flex flex-col items-center text-sm text-center uppercase transition-all duration-150 ease-lin hover:shadow-lg focus:outline-none hover:text-[#088269]"
        to="/katolg"
        >
        <FaChartLine className="w-5 h-5" />
        Katalog
      </NavLink>
      <NavLink
        className="flex flex-col items-center text-sm text-center uppercase transition-all duration-150 ease-lin hover:shadow-lg focus:outline-none hover:text-[#088269]"
        to="/karzinka"
        >
        <SlBasket className="w-5 h-5" />
        Корзина
      </NavLink>
       <Modal />
    </div>
    </div>
  )
}

export default HederP
