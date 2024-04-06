import { NavLink } from "react-router-dom"
import Modal from "./Modal"
import { FcLike } from "react-icons/fc"
import { FaChartLine } from "react-icons/fa"
import { SlBasket } from "react-icons/sl"

const HederP = () => {
  return (
    <div className="fixed bottom-0 h-[64px] bg-[#F8F7F3] w-[375px] ">
       <div className="flex gap-2">
      {/* Modal ichida inputi bilan  */}
      <Modal />
      <NavLink
        to="/Lake"
        className="flex flex-col items-center text-sm text-center uppercase transition-all duration-150 ease-lin hover:shadow-lg focus:outline-none hover:bg-[#088269]"
        >
        <FcLike className="w-5 h-5" />
        Избранное
      </NavLink>
      <button
        className="flex flex-col items-center text-sm text-center uppercase transition-all duration-150 ease-lin hover:shadow-lg focus:outline-none hover:bg-[#088269]"
        type="button"
        >
        <FaChartLine className="w-5 h-5" />
        Сравнить
      </button>
      <NavLink
        className="flex flex-col items-center text-sm text-center uppercase transition-all duration-150 ease-lin hover:shadow-lg focus:outline-none hover:bg-[#088269]"
        to="/karzinka"
        >
        <SlBasket className="w-5 h-5" />
        Корзина
      </NavLink>
    </div>
    </div>
  )
}

export default HederP
