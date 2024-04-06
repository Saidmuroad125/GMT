import Nav from "./Nav"
import Logo from "../assets/Logo.svg"
import Modal from "./Modal";
import { FcLike } from "react-icons/fc";
import { FaChartLine } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import Search from "../katalog/Search";


const Header = () => {
 
    
    
  return (
    <div className="container mx-auto">
  <div className="flex-col justify-between h-16 border-b-2 border-black xl:flex sm:hidden md:flex-row">
    <div>
      <ul className="flex gap-5 ">
        <li className="hover:text-red-600 text-[#7A7687]">О компании</li>
        <li className="hover:text-red-600 text-[#7A7687]">Доставка</li>
        <li className="hover:text-red-600 text-[#7A7687]">Оплата</li>
        <li className="hover:text-red-600 text-[#7A7687]">Гарантии</li>
        <li className="hover:text-red-600 text-[#7A7687]">Блог</li>
      </ul>
    </div>
    <div>
      <ul className="flex gap-5">
        <li className="hover:text-red-600 text-[#7A7687]">info@mail.ru</li>
        <li className="hover:text-red-600 text-[#7A7687]">г. Москва, ул. Московская, д. 35</li>
      </ul>
    </div>
  </div>
  <div className="h-16 md:h-[100px] flex flex-col md:flex-row justify-between border-b-2 border-black items-center">
    <div className="flex">
      <NavLink to="/">
        <img src={Logo} alt="websayt logo" className="" />
      </NavLink>
      <div>
        <Search/>
      </div>
    
      <small className=" md:ml-[35px] sm:hidden">
        Пн-Пт с 09:00-19:00 <br />
        Сб-Вс - выходной
      </small>
    </div>
    <div className="gap-2 xl:flex sm:hidden ">
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
  <Nav />

</div>
  )
}

export default Header
