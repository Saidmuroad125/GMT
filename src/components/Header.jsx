import Nav from "./Nav"
import Logo from "../assets/Logo.svg"
import { CiSearch } from "react-icons/ci";
import Modal from "./Modal";
import { FcLike } from "react-icons/fc";
import { FaChartLine } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { bash } from './../json/constant';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
    const handleSearch = () => {
    const results = bash.filter(item => {
      const { jkl, iop, iot, Артикул, ios } = item;
      // Arama kriterlerine göre nesneyi filtrele
      return (
        jkl.includes(searchTerm) ||
        iop.includes(searchTerm) ||
        iot.includes(searchTerm) ||
        Артикул.includes(searchTerm) ||
        ios.includes(searchTerm)
      );
    });

    setSearchResults(results);
  };
    
    
  return (
    <div className="container mx-auto">
  <div className="flex flex-col justify-between h-16 border-b-2 border-black md:flex-row">
    <div>
      <ul className="flex gap-5">
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
      <div className="flex items-center rounded-full bg-slate-200 ml-[50px]">
        <select name="Все категории" className="w-[146px] h-[39px] rounded-s-full bg-[#EFEFEF]">
          <option value="Новости">Новости</option>
          <option value="Статьи">Статьи</option>
          <option value="Видео">Видео</option>
        </select>
        <input
          type="search"
          className="w-[265px] h-39px rounded-e-full p-2 bg-[#EFEFEF]"
          placeholder="Поиск"
           value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
        />
        <button onClick={handleSearch}><CiSearch className="w-[24px] h-[24px] mx-2" /></button>
        
      </div>
      <small className="ml-[35px]">
        Пн-Пт с 09:00-19:00 <br />
        Сб-Вс - выходной
      </small>
    </div>
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
  <Nav />
 <div className="flex flex-wrap gap-5">
    {searchResults.map(item => (
    <div className='  flex  mx-auto h-400px  h-[300px] border '
    key={item.if}
    >
            <div className="flex items-center justify-center text-center ">
              <div className="">
                 
                <img className='h-[250px] w-[250px] px-3 ' src={item.jkl} alt="aaaaaaaaaaaa" />
              </div>
              <div className='w-[296px] text-start p-2'>
                <h2 className='text-2xl font-bold'>{item.iop}</h2>
                <p>Артикул:{item.Артикул}</p>
                <p>{item.ios}</p>
               <h4 className='text-xl font-bold'>{item.iot}</h4>
              </div>
            </div>
          </div>
  
  ))}
 </div>
</div>
  )
}

export default Header
